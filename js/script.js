// YOUR CODE HERE
document.getElementById("btn1").onclick = function () {
  document.getElementById("btn1").style.color = "red";
};

document.getElementById("btn2").addEventListener("click", function () {
  const span = document.createElement("span");
  span.textContent = "Hello world";
  const paragraph = document.querySelector("#output2 p");
  paragraph.insertAdjacentElement("afterend", span);
});

document.getElementById("btn3").addEventListener("click", function () {
  const paragraph = document.querySelector("#output3 p");
  paragraph.remove();
});

document.getElementById("btn4").addEventListener("click", function () {
  const paragraphs = document.querySelectorAll("#output4 p");
  paragraphs.forEach((paragraph) => {
    paragraph.style.color = "red";
  });
});

document.getElementById("btn5").addEventListener("click", function () {
  const inputValue = document.getElementById("message").value;
  console.log(inputValue);
});
