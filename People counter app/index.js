let arr = [];
let totality = 0;
let countEl = document.getElementById("count-el");
let deleteBtn = document.getElementById("delete-btn");
console.log(countEl);
let count = 0;
function increment() {
  deleteBtn.style.display = "";
  count += 1;
  countEl.textContent = count;
}
function deleteE() {
  if (count == 0) {
    count =0;
  } else {
    count -= 1;
  }
  countEl.textContent = count;
}
function save() {
  let savebutton = document.getElementById("save-el");
  console.log(savebutton);
  savebutton.textContent += count + " - ";
  arr.push(count);
  countEl.textContent = 0;
  count = 0;
}

function totalP() {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    totality += arr[i];
  }
  let totalP = document.getElementById("total-p");
  totalP.textContent += " " + totality;
}
