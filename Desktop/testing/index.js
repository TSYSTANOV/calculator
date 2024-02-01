let display = document.querySelector(".display");
let calc = ["+", "-", "/", "*"];
let res = "";
let prevKey = null;
let btns = document.querySelectorAll("button");
btns.forEach((el) => {
  el.addEventListener("click", () => {
    display.textContent += el.textContent;
    // if (el.className === "deleteAll") {
    //   display.textContent = "";
    //   return;
    // }
    // if (el.className === "result") {
    // }
    // if (calc.indexOf(`${el.innerHTML}`) === -1) {
    //   res += el.innerHTML;
    // }

    if (calc.indexOf(`${el.innerHTML}`) === 0) {
      prevKey = `${el.innerHTML}`;
      return;
    }

    if (prevKey === "+") {
      res = +res + +el.innerHTML;
      prevKey = "";
      console.log(res);
    } else {
      res += el.innerHTML;
    }

    // if (el.className === "plus") {
    //   console.log(parseFloat(display.textContent));
    // }
    // display.textContent += el.textContent;
  });
});
