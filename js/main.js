//main.js

//course-bar
let courseList = document.querySelector(".lectures__list");
let courseItem = document.querySelectorAll(".lectures__item");
//tasks
let tasksList = document.querySelector(".theory");
let tasksItem = document.querySelectorAll(".theory__block");



//перебор массива для синхронизации Использую один цикл из-за равного кол-ва
for (let Counter = 0; Counter < courseItem.length; Counter++) {
  courseItem[Counter].onclick = function () {
    changeCurrent(courseItem[Counter], courseList, ".lectures__item.current", "current");
    changeCurrent(tasksItem[Counter], tasksList, ".theory__block.current", "current");
  }
}
//


// Функция по смене current или любого другого класса (остальное в readme.md)
function changeCurrent(clickedItem, List, Selector, Class) {
  let currentItem = List.querySelector(Selector);
  if (currentItem === clickedItem) {
    console.log("This item is current allready")
  }else{
    clickedItem.classList.add(Class);
    currentItem.classList.remove(Class);
  }
}



