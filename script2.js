
function func() {
    var array = document.querySelectorAll(".form__input");
    for (let index = 0; index < array.length; index++) {
      if (array[index].value !== "") {
        var temp = Number(array[index].value);
        if (isNaN(temp)) {
          continue;
          }
        else {
          var cell = document.createElement("p");
          cell.classList.add("grid__cell");
          cell.textContent = temp;
          document.querySelector(".grid1").appendChild(cell);
        }
      }
    }
}
function funcM() {
    document.querySelector(".grid2").innerHTML = null;
    var array = document.querySelectorAll(".grid__cell");
    var arrNum = [];
    for (let index = 0; index < array.length; index++) {
      arrNum[index] = parseInt(array[index].textContent);
    }
    var arrNumSort = arrNum;
    arrNumSort.sort(function (a, b) {
      return a - b;
    });
    for (let index = 0; index < arrNumSort.length; index++) {
      var cell = document.createElement("p");
      cell.classList.add("grid__cell");
      cell.textContent = arrNumSort[index];
      document.querySelector(".grid2").appendChild(cell);
    }
  }
function funcD() {
  document.querySelector(".grid1").innerHTML = null;
  document.querySelector(".grid2").innerHTML = null;
}

document.querySelector(".submit").addEventListener("click", func);
document.querySelector(".massive").addEventListener("click", funcM);
document.querySelector(".dump").addEventListener("click", funcD);




