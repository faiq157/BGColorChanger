// generate a random color
const randomColor = function () {
  const hex = "0123456789ABCDF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());
let interval_ID;
const startChangingColor = function () {
  if (!interval_ID) {
    interval_ID = setInterval(ChangeBGColor, 1000);
  }

  function ChangeBGColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(interval_ID);
  interval_ID = null;
};
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
