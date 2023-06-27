let colBtns = document.querySelectorAll(".hi");

let firstCol = document.querySelector("#first");
let secondCol = document.querySelector("#second");
let thirdCol = document.querySelector("#third");

colBtns.forEach((colBtn) => {
  colBtn.addEventListener("click", (e) => {
    colBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    console.log(e.target.innerText);

    if (e.target.innerText === "Simple Bookmarking") {
      firstCol.style.display = "block";
      secondCol.style.display = "none";
      thirdCol.style.display = "none";
    } else if (e.target.innerText === "Speedy Searching") {
      firstCol.style.display = "none";
      secondCol.style.display = "block";
      thirdCol.style.display = "none";
    } else {
      firstCol.style.display = "none";
      secondCol.style.display = "none";
      thirdCol.style.display = "block";
    }
  });
});
