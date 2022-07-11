let cardArr = document.querySelectorAll(".card-row");
let cardSmArr = document.querySelectorAll(".card-sm-row");
let cardVip = document.querySelectorAll(".card-vipSm-row");
const card = [...cardArr];
const cardSm = [...cardSmArr];
const VipSmCard = [...cardVip];
let Arr = [];
const Arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const Arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

// offer card Desktop
let cardOffer = document.querySelectorAll(".card-offer-row");
let card5 = [...cardOffer];
fetch(
  "https://vipnumberapi.bigboychoice.com/api/v1/customer/fetch_offers/1",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    Arr = result.data;
    card5.map((item) => {
      let dov = document.createElement("div");
      if (!result.data) {
        document.querySelector(".card-offer-row").innerHTML =
          '<h1 class="text-center">No Data Found!</h1>';
      } else {
        Arr.forEach((val) => {
          let dov = document.createElement("div");
          dov.classList.add(
            "col-xl-3",
            "col-lg-3",
            "col-md-3",
            "col-18",
            "pull-up"
          );
          dov.innerHTML = `<div id=${val.product_id} style="border-radius:10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
          <div class="badge-bg-cont"></div>
               <div class="d-flex justify-content-between align-items-center col-div px-2 py-1 ">
                  
                   <div class="d-inline-flex"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                    <div class="ribbon"><span>20% off</span></div>
                   <button class="btn-card-heart"><i onclick="addToWishlist(${val.product_id})" class="fa-solid fa-heart"></i></button>
                 </div>
           <div class="d-flex flex-column bg-cont">
           <div class="d-flex justify-content-center col-div-2 mt-2">
             
          <h1 class="mb-0 fw-bold" style="font-size:2rem; margin-left:15px">${val.number}<span style="color:#9e48cd ;"></span></h1>
          
             
           </div>
          
          <div class="d-flex justify-content-center col-div-3 py-1">
          Total-<strong class="mx-1">${val.sum_total}</strong> | Sum-<strong class="mx-1">${val.first_sum}</strong> | <span class="mx-1"> RTP</span> | <a href="./vipNumber.html" class="ms-1" style="font-size:9.25px;"><span>SIMILAR NUMBERS</span></a>
          </div>
          
          <div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
        
         <h4 class="mb-0 fw-bold">₹${val.price}</h4><div class="vl mx-1"></div><button class=""><i class="fa-solid fa-cart-shopping" onclick="cart(${val.product_id})"></i></button>
         
          <div class="vl mx-1"></div>
          <button class="py-2" onClick="Detail(this)"><i class="fa-solid fa-circle-info d-block"></i></button>
           <div class="vl mx-1"></div>
          <button onclick="buyNow(${val.product_id})">BUY</button> 
          
          
          </div>
          </div>
          `;
          item.appendChild(dov);
        });
      }
    });
  })
  .catch((error) => console.log("error", error));

// offer card Mobile
let cardSmOffer = document.querySelectorAll(".card-offer-sm-row");
const card6 = [...cardSmOffer];
fetch(
  "https://vipnumberapi.bigboychoice.com/api/v1/customer/fetch_offers/1",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    if (!result.data) {
      document.querySelector(".card-offer-sm-row").innerHTML =
        '<h1 class="text-center">No Data Found!</h1>';
    } else {
      card6.map((item) => {
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
            <div class="ribbon"><span>20% off</span></div>
            <button class="btn-card-heart"><i  onclick="addToWishlist(${val.product_id})" class="fa-solid fa-heart"></i></button>
          </div>
              </div>
        <div class="d-flex flex-column bg-cont">
         
        <div class="d-flex flex-column align-items-center col-div-2 mt-1">
           
        <h1 class="mb-0 fw-bold">${val.number}<span style="color:#bf68e6;"></span></h1>
        </div>
        
        <div class="d-flex justify-content-center col-div-3 py-1">
        Total- <strong class="mx-1">${val.sum_total}</strong> | Sum- <strong class="mx-1">${val.first_sum}</strong> | <span class="mx-1">RTP</span> |
        <a href="./vipNumber.html" class="ms-1"><span>SIMILAR NUMBERS</span></a>
        </div>
        
        <div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">
        
        <h6 class="mb-0 fw-bold" style="font-size:13px">₹${val.price}</h6><div class="vl mx-1"></div><button class=""><i class="fa-solid fa-cart-shopping" onclick="cart(${val.product_id})"></i></button>
           
            <div class="vl mx-1"></div>
            <button class="py-2" onClick="Detail(this)"><i class="fa-solid fa-circle-info d-block"></i></button>
             <div class="vl mx-1"></div>
            <button onclick="buyNow(${val.product_id})">BUY</button> 
            
        </div>
        </div>
        </div>
            `;
          item.appendChild(dov);
        });
      });
    }
  });
