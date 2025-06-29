const baseUrl = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/original';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDhlMDRiNzcwODBhN2ZkYjAwMzQ5ZmVkNzVmZGY2MyIsIm5iZiI6MTcyMzgzMDUxNi40NDYsInN1YiI6IjY2YmY5MGY0NTQ0NTk1ODk5MjQ5ZTUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z-e50TznJEryxFmVupqMRRwe4rVjjV7jqS0V6fzAlo8';
const mainElement = document.querySelector("main");

async function getMovies(type) {
  const res = await fetch(`${baseUrl}/movie/${type}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const json = await res.json();
  return json.results;
}


function createSection(heading, data) {
  const section = document.createElement("section");
  section.classList.add("mb-3");

  const h1 = document.createElement("h1");
  h1.innerText = heading;
  h1.classList.add("text-2xl", "mb-1", "text-white");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("flex", "overflow-x-auto", "gap-3");

  data.forEach(movie => {
    const img = document.createElement("img");
    img.setAttribute("width", "220px");
    img.setAttribute("src", `${imgUrl}${movie.poster_path}`);

    contentDiv.append(img);
  });

  section.append(h1);
  section.append(contentDiv);
  return section;
}

function randomlySetHeader(data){
  console.log(data);
}


async function main() {
  const popularMovies = getMovies("popular"); // 4s
  const upcomingMovies = getMovies("upcoming"); // 5s
  const topRatedMovies = getMovies("top_rated"); // 2s

  const result = await Promise.all([popularMovies, upcomingMovies, topRatedMovies])

  // randomlySetHeader([...result[0], ...result[1], ...result[2]]);
  randomlySetHeader(result.flat())

  const popularMovieSection = createSection("Popular Movies", result[0]);
  const upcomingMovieSection = createSection("Upcoming Movies", result[1]);
  const topRatedMoviesSection = createSection("Top Rated Movies", result[2]);

  mainElement.append(popularMovieSection);
  mainElement.append(upcomingMovieSection);
  mainElement.append(topRatedMoviesSection);
}

main();

