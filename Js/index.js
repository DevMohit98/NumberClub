import config from "../conf/index.js";
let cardArr = document.querySelectorAll(".card-row"); // dream number desktop
let cardArr2 = document.querySelectorAll(".card-Vip-row"); // latest and updated stock desktop
let cardSmArr = document.querySelectorAll(".card-sm-row"); // dream number mobile
let cardVip = document.querySelectorAll(".card-Vipsm-row"); // latest and updated stock mobile
const card = [...cardArr]; // dream number desktop
const cardSm = [...cardSmArr]; // dream number mobile
const VipSmCard = [...cardVip]; // latest and updated stock mobile
const cardVip2 = [...cardArr2]; //latest and updated stock desktop
//------------------------------------------------------------------//
let HomeCardData;
// Home card Desktop
const FetchHome = async () => {
  const response = await fetch(
    config.backendEndpoint + "/fetch_all_products/1"
  );
  const data = await response.json();
  HomeCardData = data.data;
  HomeCardData.length = 12;
  card.map((item) => {
    HomeCardData.forEach((val) => {
      let dov = document.createElement("div");
      let num = val.number.toString();
      const first3 = num.slice(0, 2);
      const reamaning = num.slice(2, 6);
      const last = num.slice(6, 10);
      dov.classList.add(
        "col-xl-3",
        "col-lg-3",
        "col-md-3",
        "col-18",
        "pull-up"
      );
      dov.innerHTML = `<div style="border-radius:10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
         <div class="d-flex justify-content-between align-items-center col-div px-2 py-1 ">
            
             <div class="d-inline-flex"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
             <button class="btn-card-heart"><i onclick="addToWishlist(${val.product_id})" class="fa-solid fa-heart"></i></button>
           </div>
     <div class="d-flex flex-column bg-cont">  
    
     <div class="d-flex justify-content-center col-div-2 mt-2">
       
    <h1 class="mb-0 fw-bold" style="font-size:2rem">${first3}-<span style="color:#9e48cd ;">${reamaning}-${last}</span></h1>
    
       
     </div>
    
    <div class="d-flex justify-content-center col-div-3 py-1">
    Total-<strong class="mx-2">${val.sum_total}</strong> | Sum-<strong class="mx-2">${val.first_sum}</strong> | <span class="mx-1">${val.number_status}</span> | <a href="./vipNumber.html" class="ms-1" style="font-size:10px;"><span>SIMILAR NUMBERS</span></a>
    </div>
    
    <div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
  
   <h4 class="mb-0 fw-bold">₹${val.price}</h4><div class="vl mx-1"></div>
   <button class="" onclick="cart(${val.product_id})"><i class="fa-solid fa-cart-shopping"></i></button>
   
    <div class="vl mx-1"></div>
    <button class="py-2"onclick=window.location.href="./Detail.html?product=${val.product_id}"><i class="fa-solid fa-circle-info d-block"></i></button>
     <div class="vl mx-1"></div>
    <button onclick="buyNow(${val.product_id})">BUY</button> 
    
    
    </div>
    </div>
    `;
      item.appendChild(dov);
    });
  });
};
FetchHome();
// Home card Desktop 2
const FetchHome2 = async () => {
  const response = await fetch(
    config.backendEndpoint + "/fetch_all_products/2"
  );
  const data = await response.json();
  HomeCardData = data.data;
  HomeCardData.length = 12;
  cardVip2.map((item) => {
    HomeCardData.forEach((val) => {
      let dov = document.createElement("div");
      let num = val.number.toString();
      const first3 = num.slice(0, 2);
      const reamaning = num.slice(2, 6);
      const last = num.slice(6, 10);
      dov.classList.add(
        "col-xl-3",
        "col-lg-3",
        "col-md-3",
        "col-18",
        "pull-up"
      );
      dov.innerHTML = `<div style="border-radius:10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
         <div class="d-flex justify-content-between align-items-center col-div px-2 py-1 ">
            
             <div class="d-inline-flex"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
             <button class="btn-card-heart"><i onclick="addToWishlist(${val.product_id})" class="fa-solid fa-heart"></i></button>
           </div>
     <div class="d-flex flex-column bg-cont">
      
     
    
     <div class="d-flex justify-content-center col-div-2 mt-2">
       
    <h1 class="mb-0 fw-bold" style="font-size:2rem">${first3}-<span style="color:#9e48cd ;">${reamaning}-${last}</span></h1>
    
       
     </div>
    
    <div class="d-flex justify-content-center col-div-3 py-1">
    Total-<strong class="mx-2">${val.sum_total}</strong> | Sum-<strong class="mx-2">${val.first_sum}</strong> | <span class="mx-1">${val.number_status}</span> | <a href="./vipNumber.html" class="ms-1" style="font-size:10px;"><span>SIMILAR NUMBERS</span></a>
    </div>
    
    <div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
  
   <h4 class="mb-0 fw-bold">₹${val.price}</h4><div class="vl mx-1"></div><button onclick="cart(${val.product_id})" class=""><i class="fa-solid fa-cart-shopping"></i></button>
   
    <div class="vl mx-1"></div>
    <button class="py-2" onclick=window.location.href="./Detail.html?product=${val.product_id}"><i class="fa-solid fa-circle-info d-block"></i></button>
     <div class="vl mx-1"></div>
    <button onclick="buyNow(${val.product_id})">BUY</button> 
    
    
    </div>
    </div>
    `;
      item.appendChild(dov);
    });
  });
};
FetchHome2();

// Home card Mobile
const FetchHomeMobile = async () => {
  const response = await fetch(
    config.backendEndpoint + "/fetch_all_products/1"
  );
  const data = await response.json();
  HomeCardData = data.data;
  HomeCardData.length = 12;
  cardSm.map((item) => {
    HomeCardData.forEach((val) => {
      let dov = document.createElement("div");
      let num = val.number.toString();
      const first3 = num.slice(0, 2);
      const reamaning = num.slice(2, 6);
      const last = num.slice(6, 10);
      dov.classList.add("col-12", "col-md-6", "col-18", "pull-up");
      dov.innerHTML = `  <div style="border-top-left-radius:10px;border-top-right-radius:10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );">
    <div class="d-flex justify-content-between align-items-center col-div px-2 ">
    <div class="d-inline-flex">
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    </div>
    <button class="btn-card-heart"><i onclick="addToWishlist(${val.product_id})" class="fa-solid fa-heart"></i></button>
  </div>
      </div>
<div class="d-flex flex-column bg-cont">
 
<div class="d-flex flex-column align-items-center col-div-2 mt-1">
   
<h1 class="fw-bold"">${first3}-<span style="color:#9e48cd;">${reamaning}-${last}</span></h1>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
<span style="font-size:.8rem;">Total -<strong class="mx-1">${val.sum_total} | </strong> </span> 
<span style="font-size:.8rem"> Sum - <strong class="mx-1">${val.first_sum} |</strong>  </span> 
<span class="mx-1" style="font-size:.8rem">${val.number_status} |</span> 
<a href="./vipNumber.html" class="ms-1"style="font-size:.8rem"><span>SIMILAR NUMBERS</span></a>
</div>

<div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">

<h6 class="mb-0 fw-bold" style="font-size:1.2rem">₹${val.price}</h6>
<div class="vl mx-1"></div>
<button style="width:30px;height:30px" onclick="cart(${val.product_id})"><i class="fa-solid fa-cart-shopping" style="font-size:.8rem"></i></button>
     <div class="vl mx-1"></div>
    <button class="py-2" onclick=window.location.href="./Detail.html?product=${val.product_id}" style="width:30px; height:30px;"><i class="fa-solid fa-circle-info d-block" style="font-size:1rem"></i></button>
     <div class="vl mx-1"></div>
    <button style="width:60px; height:30px; font-size:.8rem"  onclick="buyNow(${val.product_id})">BUY</button> 
    
</div>
</div>
</div>
    `;
      item.appendChild(dov);
    });
  });
};
FetchHomeMobile();
//Home card Mobile 2
const FetchHomeMobile2 = async () => {
  const response = await fetch(
    config.backendEndpoint + "/fetch_all_products/2"
  );
  const data = await response.json();
  HomeCardData = data.data;
  HomeCardData.length = 12;
  VipSmCard.map((item) => {
    HomeCardData.forEach((val) => {
      let dov = document.createElement("div");
      let num = val.number.toString();
      const first3 = num.slice(0, 2);
      const reamaning = num.slice(2, 6);
      const last = num.slice(6, 10);
      dov.classList.add("col-12", "col-md-6", "col-18", "pull-up");
      dov.innerHTML = `  <div style="border-top-left-radius:10px;border-top-right-radius:10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );">
    <div class="d-flex justify-content-between align-items-center col-div px-2 ">
    <div class="d-inline-flex">
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    </div>
    <button class="btn-card-heart"><i onclick="addToWishlist(${val.product_id})" class="fa-solid fa-heart"></i></button>
  </div>
      </div>
<div class="d-flex flex-column bg-cont">
 
<div class="d-flex flex-column align-items-center col-div-2 mt-1">
   
<h1 class="fw-bold"">${first3}-<span style="color:#9e48cd;">${reamaning}-${last}</span></h1>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
<span style="font-size:.8rem;">Total -<strong class="mx-1">${val.sum_total} | </strong> </span> 
<span style="font-size:.8rem"> Sum - <strong class="mx-1">${val.first_sum} |</strong>  </span> 
<span class="mx-1" style="font-size:.8rem">${val.number_status} |</span> 
<a href="./vipNumber.html" class="ms-1"style="font-size:.8rem"><span>SIMILAR NUMBERS</span></a>
</div>

<div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">

<h6 class="mb-0 fw-bold" style="font-size:1.2rem">₹${val.price}</h6>
<div class="vl mx-1"></div>
<button style="width:30px;height:30px" onclick="cart(${val.product_id})"><i class="fa-solid fa-cart-shopping" style="font-size:.8rem"></i></button>
     <div class="vl mx-1"></div>
    <button class="py-2" onclick=window.location.href="./Detail.html?product=${val.product_id}" style="width:30px; height:30px;"><i class="fa-solid fa-circle-info d-block" style="font-size:1rem"></i></button>
     <div class="vl mx-1"></div>
    <button style="width:60px; height:30px; font-size:.8rem" onclick="buyNow(${val.product_id})">BUY</button> 
    
</div>
</div>
</div>
    `;
      item.appendChild(dov);
    });
  });
};
FetchHomeMobile2();

// function to add card to wish list
let btnHeartArr = document.querySelectorAll(".btn-card-heart");
let bool1 = false;
console.log(bool1);
Array.from(btnHeartArr).forEach((link) => {
  link.addEventListener("click", function (event) {
    if (!bool1) {
      event.target.style.color = "red";
      bool1 = true;
      console.log(bool1);
    } else {
      event.target.style.color = "white";
      bool1 = false;
      console.log(bool1);
    }
  });
});
