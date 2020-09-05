function random(lower,upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
function addTable() {
  var getRow = document.getElementById("tableRow").value;
  var getCol = document.getElementById("tableCol").value;
  var showResult = document.getElementById("showResult");
  showResult.innerHTML = "";
  var newTab = document.createElement("table");
  showResult.appendChild(newTab);
  for (let i = 0; i <= getRow; i++) {
    var newTr = document.createElement("tr");
    newTab.appendChild(newTr);
    for (let j = 0; j <= getCol; j++) {
      var newTd = document.createElement("td");
      if (i === 0 && j !== 0) {
        newTd.innerHTML = "第<span>" + j + "</span>列";
        newTd.className = "th";
      }else if (j === 0 && i !== 0) {
        newTd.innerHTML = "第<span>" + i + "</span>行";
        newTd.className = "th";
      }else if (j === 0 && i === 0) {
        newTd.innerHTML = ""
      }else {
        newTd.innerHTML = "<span class='txt'>" + i + "-" + j + "</span>";
        var r = random(153, 243),
            g = random(153, 243),
            b = random(153, 243);
        newTd.style.background = "rgb("+ r + "," + g + "," + b  + ")";
      }
      newTr.appendChild(newTd);
    }
  }
}
