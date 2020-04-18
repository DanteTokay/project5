
const btn = document.querySelector("#btnAdd");
let num = 1;
const addLi = function(){
  // alert('ok');
  const liItem = document.createElement('li');

  if(num%3==0){
    liItem.classList.add("bold");
  }
  liItem.textContent = num;
  num+=2;
  document.querySelector('ul').appendChild(liItem);
}


btn.addEventListener('click',addLi);
