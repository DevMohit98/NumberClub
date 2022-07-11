// Wish list card Desktop
let wishArr = [1, 2];
let cardWish1 = document.querySelectorAll(".card-wish-row");
const cardWish = [...cardWish1];
let token = localStorage.getItem("user");
if (token) {
  var myHeaders = new Headers();
  myHeaders.append("token", `${token}`);

  var requestOptions1 = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://vipnumberapi.bigboychoice.com/api/v1/customer/customer_info",
    requestOptions1
  )
    .then((response) => response.json())
    .then((result) => {
      fetch(
        "https://vipnumberapi.bigboychoice.com/api/v1/customer/fetch_whishlist/1?customer_id=" +
          result.data.customer_id,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          cardWish.map((item) => {
            result.data.forEach((val) => {
              let dov = document.createElement("div");
              dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
              dov.innerHTML = `<div id=${val.product_id} style="border-radius:10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
                   <div class="d-flex justify-content-between align-items-center col-div px-2 py-1 ">
                      
                       <div class="d-inline-flex"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                       <button class="btn-card-heart"><i class="fa-solid fa-trash-can" onclick="addToWishlist(${val.product_id}, 'remove')"></i></button>
                     </div>
               <div class="d-flex flex-column bg-cont">
                
               
              
               <div class="d-flex justify-content-center col-div-2 mt-2">
                 
              <h1 class="mb-0 fw-bold" style="font-size:2rem">${val.number}<span style="color:#9e48cd ;"></span></h1>
              
                 
               </div>
              
              <div class="d-flex justify-content-center col-div-3 py-1">
              Total-<strong class="mx-2">${val.sum_total}</strong> | Sum-<strong class="mx-2">${val.first_sum}</strong> | <span class="mx-1"> RTP</span> | <a href="./vipNumber.html" class="ms-1" style="font-size:12px;"><span>SIMILAR NUMBERS</span></a>
              </div>
              
              <div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
            
             <h4 class="mb-0 fw-bold">₹${val.price}</h4><div class="vl mx-1"></div><button class=""><i class="fa-solid fa-cart-shopping"  onclick="cart(${val.product_id})"></i></button>
             
              <div class="vl mx-1"></div>
              <button class="py-2" onClick="Detail(this)"><i class="fa-solid fa-circle-info d-block"></i></button>
               <div class="vl mx-1"></div>
              <button  onclick="buyNow(${val.product_id})">BUY</button> 
              
              
              </div>
              </div>
              `;
              item.appendChild(dov);
            });
          });
        });
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      // Wish list card Mobile
      let cardWish1Sm = document.querySelectorAll(".card-wish-sm-row");
      const cardWishSm = [...cardWish1Sm];
      fetch(
        "https://vipnumberapi.bigboychoice.com/api/v1/customer/fetch_whishlist/1?customer_id=" +
          result.data.customer_id,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          cardWishSm.map((item) => {
            result.data.forEach((val) => {
              let dov = document.createElement("div");
              dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
              dov.innerHTML = `  <div id=${val.product_id} style="border-top-left-radius:5px;border-top-right-radius:5px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );">
                <div class="d-flex justify-content-between align-items-center col-div px-2 ">
                <div class="d-inline-flex">
                <i class="fa-solid fa-star" style="font-size: 12px;"></i>
                <i class="fa-solid fa-star"  style="font-size: 12px;"></i>
                <i class="fa-solid fa-star"  style="font-size: 12px;"></i>
                <i class="fa-solid fa-star"  style="font-size: 12px;"></i>
                <i class="fa-solid fa-star"  style="font-size: 12px;"></i>
                </div>
                <button class="btn-card-heart"><i class="fa-solid fa-trash-can" onclick="addToWishlist(${val.product_id}, 'remove')"></i></button>
              </div>
                  </div>
            <div class="d-flex flex-column bg-cont">
             
            <div class="d-flex flex-column align-items-center col-div-2 mt-1">
               
            <h1 class="mb-0 fw-bold">${val.number}<span style="color:#9e48cd"></span></h1>
            </div>
            
            <div class="d-flex justify-content-center col-div-3 py-1">
            Total- <strong class="mx-1">${val.sum_total}</strong> | Sum- <strong class="mx-1">${val.first_sum}</strong> | <span class="mx-1">RTP</span> |
            <a href="./vipNumber.html" class="ms-1"><span>SIMILAR NUMBERS</span></a>
            </div>
            
            <div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">
            
            <h6 class="mb-0 fw-bold" style="font-size:12px">₹${val.price}</h6>
            <div class="vl mx-1"></div><button class=""><i class="fa-solid fa-cart-shopping"  onclick="cart(${val.product_id})"></i></button>
               
                <div class="vl mx-1"></div>
                <button class="py-2" onClick="Detail(this)"><i class="fa-solid fa-circle-info d-block"></i></button>
                 <div class="vl mx-1"></div>
                <button  onclick="buyNow(${val.product_id})">BUY</button> 
                
            </div>
            </div>
            </div>
                `;
              item.appendChild(dov);
            });
          });
        });
    })
    .catch((error) => console.log("error", error));
}
