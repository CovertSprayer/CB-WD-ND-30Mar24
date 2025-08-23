console.log("connected!")

document.addEventListener("click", (e) => {
  const likeBtn = e.target;
  if(likeBtn.classList.contains("fa-heart")) {
    const productId = likeBtn.getAttribute("id");
    updateWishList(productId, likeBtn);
  }
})

async function updateWishList(productId, btn) {
  try {
    const res = await axios.post(
      `/api/products/${productId}/wishlist`,
      {},
      {
        headers: {
          xhr: true
        }
      }
    );
    console.log(res);
    if(res.data.success){
      btn.classList.toggle("fa-regular");
      btn.classList.toggle("fa-solid");
    }
  } catch (error) {
    // console.log(error)
    if(error.response.status == 401){
      window.location.href = "/login"
    }
  }
}
