const eltatel = document.querySelector(".nam-lil");
const elForim = document.querySelector("#hhh");
const elIconX = document.querySelector(".x_icon");
//// iput
const elinpotImg = document.querySelector("#input_img");
const elinpotText = document.querySelector("#Input_text");
const elinpotText2 = document.querySelector("#Input_text2");
const elinpotDate = document.querySelector("#Input_date");

///cart

const eliBoxs = document.querySelector(".man-boy");

arr = [];

elForim.addEventListener("submit", (e) => {
  e.preventDefault();

  // eliBoxs.textContent = null;
  // div.textContent = "";

  const newDiv = {
    url: elinpotImg.value,
    Text: elinpotText.value,
    typeof: elinpotText2.value,
    Date: elinpotDate.value,
  };

  arr.push(newDiv);
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    // const div = document.createElement("div");
    const div = document.querySelector(".man-startsbox");
    const itemImg = document.createElement("img");

    // div.className = "cart";
    const diVcart = document.querySelector(".essmbox");
    // diVcart.className = "cart_itim";
    const itemText = document.createElement("h2");
    const itemText2 = document.createElement("h2");
    const itemDate = document.createElement("p");

    itemImg.src = element.url;
    itemText.textContent = element.Text;
    itemText2.textContent = element.typeof;
    itemDate.textContent = element.Date;

    div.appendChild(itemImg);
    diVcart.appendChild(itemText);
    diVcart.appendChild(itemText2);
    diVcart.appendChild(itemDate);

    eliBoxs.appendChild(div);
    // eliBoxs.appendChild(diVcart);

    itemImg.style.width = "250px";
    itemImg.style.height = "152px";
    itemImg.style.borderRadius = "10px";
  }
});

eltatel.addEventListener("click", function (e) {
  elForim.style.transform = "translatex(50%)";
});

elIconX.addEventListener("click", (e) => {
  elForim.style.transform = "translateY(-100%)";
});
