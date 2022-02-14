# Микро документация по chess courses 3

## SCSS
main.scss       - файл вывода со всеми подключёнными файлами
base/           - папка для глобальных стилей
  fonts           - font-fase шрифта
  reset           - самописный минимальный сброс стилей
  stable          - глобальные стили
blocks/         - папка для хранения стилей блоков
  header          - header-заглушка( стили к нему)
  lecture         - .lectures - блок-сайдбар справа с лекциями
  nav             - .nav - правый блок с ссылками, позже переходит вверх
  theory          - .theory - блок, с вложенными блоками теории, отображение которых записит от .lecture


## JS
main.js     - отвечает за работоспособность переключения .task и .lesson__block
  #### Подробнее:
    main.js:
      1.	changeCurrent() - главная функция, которая снимает класс с одного элемента внутри родителя и присваевает его выбраному потомку. Принимает в себя элемент на который кликнули(clickedItem), родителя элемента (List), querySelector элемента, который уже активен (Selector), а так же класс, который применяется к clickedItem (Class).
      2.	Использованны 2 цикла для перебора массива со связанными данными (связанными из-за равного количества). Внутри циклов происходит присваивание каждому нажатому блоку по одному блоку вывода, соответсвующему месту в массиве





