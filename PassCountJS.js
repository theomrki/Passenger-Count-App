//ctrl + k + c
// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count);

let countEl = document.getElementById("count-el");
let count = 0

function increment()
{
  count += 1
  countEl.innerText = count
  
}

let saveEl = document.getElementById("save-el")
//want to get 0 everyime we save numbers
function save()
{
  let saveAll = count + " - "
  saveEl.textContent += saveAll //or innerText
  
  countEl.textContent = 0
  count = 0
  
}

