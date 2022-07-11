import config from "../conf/index.js";
const cartArr = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
window.cart = async (id) => {
  let alreadyAdded = false;
  if (cartArr.length > 0) {
    for (let i = 0; i < cartArr.length; i++) {
      if (id == cartArr[i].product_id) {
        Toastify({
          text: "Product already added to cart! ",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "red",
          },
        }).showToast();
        alreadyAdded = true;
        break;
      }
    }
  }
  if (!alreadyAdded) {
    const response = await fetch(
      config.backendEndpoint + `/fetch_single_product?product=${id}`
    );
    const data = await response.json();
    let item = data.data;
    cartArr.push(item);
    console.log(cartArr);
    localStorage.setItem("cart", JSON.stringify(cartArr));
    Toastify({
      text: "Item added to cart! ",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#32cd32",
      },
    }).showToast();
  }
};
