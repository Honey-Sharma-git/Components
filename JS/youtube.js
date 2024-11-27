//SELECTING ELEMENTS
const buttonElement = document.querySelector(".js-subscribe-button");
//ADDING EVENT LISTENERS
buttonElement.addEventListener("click", () => {
  subscribed();
});
function subscribed() {
  let buttonStatus = document.querySelector(".js-subscribe-button");

  if (buttonStatus.innerText === "Subscribe") {
    buttonStatus.innerHTML = "Subscribed";
    document
      .querySelector(".js-subscribe-button")
      .classList.add("subscribed-button");
  } else {
    buttonStatus.innerHTML = "Subscribe";
    document
      .querySelector(".js-subscribe-button")
      .classList.remove("subscribed-button");
  }
}
