window.addToWishlist = (id, type) => {
  if (localStorage.getItem("user")) {
    var myHeaders = new Headers();
    myHeaders.append("token", localStorage.getItem("user"));

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://vipnumberapi.bigboychoice.com/api/v1/customer/customer_info",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status == "success") {
          var myHeaders2 = new Headers();
          myHeaders2.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            product_id: id,
            customer_id: result.data.customer_id,
          });

          var requestOptions = {
            method: "POST",
            headers: myHeaders2,
            body: raw,
            redirect: "follow",
          };

          fetch(
            "https://vipnumberapi.bigboychoice.com/api/v1/customer/add_whishlist",
            requestOptions
          )
            .then((response) => response.json())
            .then((result) => {
              if (result.status == "success") {
                if (type == "remove") {
                  Toastify({
                    text: "Item removed from your wishlist! ",
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
                  location.reload();
                } else if (result.msg) {
                  Toastify({
                    text: "Item removed from your wishlist! ",
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
                } else {
                  Toastify({
                    text: "Item added to your wishlist! ",
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
              }
            })
            .catch((error) => console.log("error", error));
        } else {
          localStorage.removeItem("user");
          window.location = "sign.html";
        }
      })
      .catch((error) => console.log("error", error));
  } else {
    window.location = "sign.html";
  }
};
