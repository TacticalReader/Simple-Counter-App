let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;

  if (result > 1000) {
    result = 0;
  }

  output.innerText = result;
});

subtract.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 1000; 
  }

  output.innerText = result;
});
