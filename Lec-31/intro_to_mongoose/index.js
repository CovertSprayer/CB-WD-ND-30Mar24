const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/movieDB")
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log("Something went wrong in connecting to DB"));

const movieSchema = mongoose.Schema({
  title: String,
  genre: [String],
  releaseYear: Number,
  // rating: Number
  rating: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

// Create
async function createMovie() {
  // const movie = new Movie({
  //   "title": "Galactic Odyssey",
  //   "genre": ["Sci-Fi", "Adventure"],
  //   "releaseYear": 2022,
  //   "rating": 8.3
  // })

  // await movie.save();

  await Movie.create({
    "title": "Melody of the Stars",
    "genre": ["Musical", "Romance"],
    "releaseYear": 2020,
    "rating": 25
  });
  // await Movie.create({
  //   title: "Hearts Unwritten",
  //   genre: ["Romance", "Drama"],
  //   releaseYear: 2019,
  //   rating: 7.6,
  // });
  console.log("Movie created successfully!");
}

async function createMovies() {
  const data = [
    {
      title: "Galactic Odyssey",
      genre: ["Sci-Fi", "Adventure"],
      releaseYear: 2022,
      rating: 8.3,
    },
    {
      title: "Hearts Unwritten",
      genre: ["Romance", "Drama"],
      releaseYear: 2019,
      rating: 7.6,
    },
    {
      title: "The Forgotten Code",
      genre: ["Thriller", "Mystery"],
      releaseYear: 2024,
      rating: 8.9,
    },
    {
      title: "Laugh Track",
      genre: ["Comedy"],
      releaseYear: 2021,
      rating: 6.4,
    },
    {
      title: "Rise of the Shadows",
      genre: ["Action", "Fantasy"],
      releaseYear: 2020,
      rating: 7.8,
    },
    {
      title: "Echoes of Time",
      genre: ["Drama", "Sci-Fi"],
      releaseYear: 2023,
      rating: 9.1,
    },
    {
      title: "Canvas of Chaos",
      genre: ["Horror", "Psychological"],
      releaseYear: 2018,
      rating: 6.9,
    },
    {
      title: "Neon Rush",
      genre: ["Action", "Thriller"],
      releaseYear: 2025,
      rating: 8.0,
    },
    {
      title: "Whispers in the Library",
      genre: ["Mystery", "Fantasy"],
      releaseYear: 2017,
      rating: 7.2,
    },
    {
      title: "Melody of the Stars",
      genre: ["Musical", "Romance"],
      releaseYear: 2020,
      rating: 7.5,
    },
  ];
  await Movie.create(data);
  console.log("Success!");
}

// Read
async function getMovies() {
  const movies = await Movie.find();
  console.log(movies);
}

async function getMovie() {
  const movie = await Movie.findOne({_id: "6885e14ffcf1ced19233e974"});
  console.log(movie)
}

async function getMovieWithQuery(query) {
  const movies = await Movie.find(query);
  console.log(movies);
}

// Update
async function updateMovie() {
  const movie = await Movie.updateOne({rating: 6.4}, {rating: 2.2})
  console.log(movie);
}

async function updateMovies() {
  const movies = await Movie.updateMany({releaseYear: 2020}, {rating: 20});
  console.log(movies);
}

// Delete
async function deleteMovie() {
  // await Movie.deleteOne({releaseYear: 2018})
  // await Movie.deleteMany({releaseYear: 2018})
  await Movie.deleteMany({})
  console.log("success");
}

// method with Id
async function getMovieById(movieId){
  // const movie = await Movie.findById(movieId);
  // const movie = await Movie.findByIdAndUpdate(movieId, {releaseYear: 1800}, {new: true});
  const movie = await Movie.findByIdAndDelete(movieId);
  console.log(movie);
}

function main() {
  // createMovie();
  // deleteMovie()
  // createMovies();
  // getMovies();
  // getMovie();
  // getMovieWithQuery({releaseYear: { $gte: 2020 }})
  // getMovieWithQuery({releaseYear: { $in: [2020, 2025] }})
  // getMovieWithQuery({releaseYear: { $eq: 2020 }})
  // getMovieWithQuery({
  //   $and: [
  //     { 
  //       $and: [
  //         {releaseYear: {$gte: 2018}}, 
  //         {releaseYear: {$lte: 2021}}
  //       ]
  //     },
  //     {
  //       $and: [
  //         {rating: {$gte: 7}}, 
  //         {rating: {$lte: 8}}
  //       ]
  //     }
  //   ]
  // })

  // getMovieWithQuery({
  //   genre: "Drama"
  // })

  // updateMovie();
  // updateMovies();

  // deleteMovie();

  // getMovieById("6885f2e0aec6d56ad54107b9");
}

main();
