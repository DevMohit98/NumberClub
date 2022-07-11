// import config from "../conf/index.js";
let cardArr2 = document.querySelector(".card-vip-row");
let cardArrMob = document.querySelector(".card-vipSm-row");

let defaultData = (
  count,
  number,
  sum_total,
  not_contains,
  sort,
  low_price,
  high_price,
  number_series,
  search_type,
  category
) => {
  fetch(
    `https://vipnumberapi.bigboychoice.com/api/v1/customer/search_products/${count}?number=${number}&sum_total=${sum_total}&number_not_contains=${not_contains}&sort=${sort}&low_price=${low_price}&high_price=${high_price}&number_series=${number_series}&search_type=${search_type}&category=${category}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "failure") {
        cardArr2.innerHTML = `<h1>${data.msg}</h1>`;
        cardArrMob.innerHTML = `<h1>${data.msg}</h1>`;
      } else {
        let dataOfNums = data.data;
        dataOfNums.map((item) => {
          const {
            price,
            sum_total,
            first_sum,
            number_status,
            number,
            product_id,
          } = item;
          const first3 = number.slice(0, 2);
          const reamaning = number.slice(2, 6);
          const last = number.slice(6, 10);
          cardArr2.innerHTML =
            cardArr2.innerHTML +
            `<div class="col-xl-4 col-lg-4 col-md-4 col-18 pull-up">
        <div
          style="
            border-radius: 10px;
            background: linear-gradient(
              40deg,
              #bf68e6 20%,
              #9e48cd 51%,
              #bf68e6 90%
            );
            border: 1.5px solid #e6e6e6;
            box-shadow: 0 0 10px grey;
          "
        >
          <div
            class="d-flex justify-content-between align-items-center col-div px-2 py-1"
          >
            <div class="d-inline-flex">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i>
            </div>
            <button class="btn-card-heart">
              <i class="fa-solid fa-heart"  onclick="addToWishlist(${product_id})"></i>
            </button>
          </div>
          <div class="d-flex flex-column bg-cont">
            <div class="d-flex justify-content-center col-div-2 mt-2">
              <h1 class="mb-0 fw-bold" style="font-size: 2rem">
                ${first3}-<span style="color: #9e48cd">${reamaning}-${last}</span>
              </h1>
            </div>
  
            <div class="d-flex justify-content-center col-div-3 py-1">
              Total-<strong class="mx-2">${sum_total}</strong> | Sum-<strong
                class="mx-2"
                >${first_sum}</strong
              >
              | <span class="mx-1">${number_status}</span> |
              <a href="./vipNumber.html" class="ms-1" style="font-size: 10px"
                ><span>SIMILAR NUMBERS</span></a
              >
            </div>
  
            <div
              class="d-flex justify-content-center align-items-center card-icon-cont py-3"
            >
              <h4 class="mb-0 fw-bold">₹${price}</h4>
              <div class="vl mx-1"></div>
              <button class=""><i class="fa-solid fa-cart-shopping" onclick="cart(${product_id})"></i></button>
  
              <div class="vl mx-1"></div>
              <button
                class="py-2"
                onclick="window.location.href"
                ="./Detail.html?product=${product_id}"
              >
                <i class="fa-solid fa-circle-info d-block"></i>
              </button>
              <div class="vl mx-1"></div>
              <button onclick="buyNow(${product_id})">BUY</button>
            </div>
          </div>
        </div>
      </div>
      `;
          cardArrMob.innerHTML =
            cardArrMob.innerHTML +
            `
       <div class="col-6 col-md-6 col-18 pull-up">
      <div
        style="
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          background: linear-gradient(
            40deg,
            #bf68e6 20%,
            #9e48cd 51%,
            #bf68e6 90%
          );
        "
      >
        <div
          class="d-flex justify-content-between align-items-center col-div px-2"
        >
          <div class="d-inline-flex">
            <i class="fa-solid fa-star" style="font-size: 12px"></i>
            <i class="fa-solid fa-star" style="font-size: 12px"></i>
            <i class="fa-solid fa-star" style="font-size: 12px"></i>
            <i class="fa-solid fa-star" style="font-size: 12px"></i>
            <i class="fa-solid fa-star" style="font-size: 12px"></i>
          </div>
          <button class="btn-card-heart">
            <i class="fa-solid fa-heart"  onclick="addToWishlist(${product_id})"></i>
          </button>
        </div>
      </div>
      <div class="d-flex flex-column bg-cont">
        <div class="d-flex flex-column align-items-center col-div-2 mt-1">
          <h1 class="mb-0 fw-bold">
            ${first3}-<span style="color: #9e48cd">${reamaning}-${last}</span>
          </h1>
        </div>

        <div class="d-flex justify-content-center col-div-3 py-1">
          Total- <strong class="mx-1">${sum_total}</strong> | Sum-
          <strong class="mx-1">${first_sum}</strong> |
          <span class="mx-1">${number_status}</span> |
          <a href="./vipNumber.html" class="ms-1"
            ><span>SIMILAR NUMBERS</span></a
          >
        </div>

        <div
          class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3"
        >
          <h6 class="mb-0 fw-bold" style="font-size: 12px">₹${price}</h6>
          <div class="vl mx-1"></div>
          <button class=""><i class="fa-solid fa-cart-shopping" onclick="cart(${product_id})"></i></button>

          <div class="vl mx-1"></div>
          <button
            class="py-2"
            onclick="window.location.href"
            ="./Detail.html?product=${product_id}"
          >
            <i class="fa-solid fa-solid fa-circle-info d-block"></i>
          </button>
          <div class="vl mx-1"></div>
          <button onclick="buyNow(${product_id})">BUY</button>
        </div>
      </div>
    </div>
      `;
        });
      }
    });
};

let search_sum = screen.width > 700 ? "" : "_mob";
document
  .querySelector(`.search_sum${search_sum}`)
  .addEventListener("click", (e) => {
    e.preventDefault();
    let sum_total =
      screen.width > 700
        ? document.querySelector(".sumtotal").value
        : document.querySelector(".sumotalMobile").value;

    if (sum_total.length > 0) {
      window.location = `vipNumber.html?search_num=${sum_total}&search_type=sum_total`;
    } else {
      window.location = `vipNumber.html`;
    }
  });
document.querySelector(`.search_number`).addEventListener("click", (e) => {
  e.preventDefault();
  let sum_total = document.querySelector(".search_number_left").value;

  if (sum_total.length > 0) {
    window.location = `vipNumber.html?search_num=${sum_total}&search_type=Anywhere`;
  } else {
    window.location = `vipNumber.html`;
  }
});
let dataOfCategory = (
  count,
  number,
  sum_total,
  not_contains,
  sort,
  low_price,
  high_price,
  number_series,
  search_type,
  category
) => {
  fetch(
    `https://vipnumberapi.bigboychoice.com/api/v1/customer/search_products/${count}?number=${number}&sum_total=${sum_total}&number_not_contains=${not_contains}&sort=${sort}&low_price=${low_price}&high_price=${high_price}&number_series=${number_series}&search_type=${search_type}&category=${category}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "failure") {
        cardArr2.innerHTML = `<h1>${data.msg}</h1>`;
      } else {
        let dataOfNums = data.data;
        cardArr2.innerHTML = "";
        cardArrMob.innerHTML = "";
        dataOfNums.map((item) => {
          const {
            price,
            sum_total,
            first_sum,
            number_status,
            number,
            product_id,
          } = item;
          const first3 = number.slice(0, 2);
          const reamaning = number.slice(2, 6);
          const last = number.slice(6, 10);
          cardArr2.innerHTML =
            cardArr2.innerHTML +
            `<div class="col-xl-4 col-lg-4 col-md-4 col-18 pull-up">
        <div
          style="
            border-radius: 10px;
            background: linear-gradient(
              40deg,
              #bf68e6 20%,
              #9e48cd 51%,
              #bf68e6 90%
            );
            border: 1.5px solid #e6e6e6;
            box-shadow: 0 0 10px grey;
          "
        >
          <div
            class="d-flex justify-content-between align-items-center col-div px-2 py-1"
          >
            <div class="d-inline-flex">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i>
            </div>
            <button class="btn-card-heart">
              <i class="fa-solid fa-heart"  onclick="addToWishlist(${product_id})"></i>
            </button>
          </div>
          <div class="d-flex flex-column bg-cont">
            <div class="d-flex justify-content-center col-div-2 mt-2">
              <h1 class="mb-0 fw-bold" style="font-size: 2rem">
                ${first3}-<span style="color: #9e48cd">${reamaning}-${last}</span>
              </h1>
            </div>
  
            <div class="d-flex justify-content-center col-div-3 py-1">
              Total-<strong class="mx-2">${sum_total}</strong> | Sum-<strong
                class="mx-2"
                >${first_sum}</strong
              >
              | <span class="mx-1">${number_status}</span> |
              <a href="./vipNumber.html" class="ms-1" style="font-size: 10px"
                ><span>SIMILAR NUMBERS</span></a
              >
            </div>
  
            <div
              class="d-flex justify-content-center align-items-center card-icon-cont py-3"
            >
              <h4 class="mb-0 fw-bold">₹${price}</h4>
              <div class="vl mx-1"></div>
              <button class=""><i class="fa-solid fa-cart-shopping" onclick="cart(${product_id})"></i></button>
  
              <div class="vl mx-1"></div>
              <button
                class="py-2"
                onclick="window.location.href"
                ="./Detail.html?product=${product_id}"
              >
                <i class="fa-solid fa-circle-info d-block"></i>
              </button>
              <div class="vl mx-1"></div>
              <button onclick="buyNow(${product_id})">BUY</button>
            </div>
          </div>
        </div>
      </div>
      `;
          cardArrMob.innerHTML =
            cardArrMob.innerHTML +
            `
       <div class="col-6 col-md-6 col-18 pull-up">
      <div
        style="
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          background: linear-gradient(
            40deg,
            #bf68e6 20%,
            #9e48cd 51%,
            #bf68e6 90%
          );
        "
      >
        <div
          class="d-flex justify-content-between align-items-center col-div px-2"
        >
          <div class="d-inline-flex">
            <i class="fa-solid fa-star" style="font-size: 12px"></i>
            <i class="fa-solid fa-star" style="font-size: 12px"></i>
            <i class="fa-solid fa-star" style="font-size: 12px"></i>
            <i class="fa-solid fa-star" style="font-size: 12px"></i>
            <i class="fa-solid fa-star" style="font-size: 12px"></i>
          </div>
          <button class="btn-card-heart">
            <i class="fa-solid fa-heart"  onclick="addToWishlist(${product_id})"></i>
          </button>
        </div>
      </div>
      <div class="d-flex flex-column bg-cont">
        <div class="d-flex flex-column align-items-center col-div-2 mt-1">
          <h1 class="mb-0 fw-bold">
            ${first3}-<span style="color: #9e48cd">${reamaning}-${last}</span>
          </h1>
        </div>

        <div class="d-flex justify-content-center col-div-3 py-1">
          Total- <strong class="mx-1">${sum_total}</strong> | Sum-
          <strong class="mx-1">${first_sum}</strong> |
          <span class="mx-1">${number_status}</span> |
          <a href="./vipNumber.html" class="ms-1"
            ><span>SIMILAR NUMBERS</span></a
          >
        </div>

        <div
          class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3"
        >
          <h6 class="mb-0 fw-bold" style="font-size: 12px">₹${price}</h6>
          <div class="vl mx-1"></div>
          <button class=""><i class="fa-solid fa-cart-shopping" onclick="cart(${product_id})"></i></button>

          <div class="vl mx-1"></div>
          <button
            class="py-2"
            onclick="window.location.href"
            ="./Detail.html?product=${product_id}"
          >
            <i class="fa-solid fa-solid fa-circle-info d-block"></i>
          </button>
          <div class="vl mx-1"></div>
          <button onclick="buyNow(${product_id})">BUY</button>
        </div>
      </div>
    </div>
      `;
        });
      }
    });
};
