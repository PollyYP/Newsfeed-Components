// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

document.querySelector("img").style.backgroundColor = "black";

function menuMaker(array) {
  let getMenu = document.createElement("div");
  getMenu.classList.add("menu", "menu--open");
  document.querySelector("div.header").appendChild(getMenu);

  let getUl = document.createElement("ul");
  getUl.classList.add("menu-open");
  getMenu.appendChild(getUl);

  let getLi1 = document.createElement("li");
  getLi1.textContent = array[0];
  getUl.appendChild(getLi1);

  let getLi2 = document.createElement("li");
  getLi2.textContent = array[1];
  getUl.appendChild(getLi2);

  let getLi3 = document.createElement("li");
  getLi3.textContent = array[2];
  getUl.appendChild(getLi3);

  let getLi4 = document.createElement("li");
  getLi4.textContent = array[3];
  getUl.appendChild(getLi4);

  let getLi5 = document.createElement("li");
  getLi5.textContent = array[4];
  getUl.appendChild(getLi5);

  let getLi6 = document.createElement("li");
  getLi6.textContent = array[5];
  getUl.appendChild(getLi6);

  let menuBtn = document.querySelector("img.menu-button");
  menuBtn.addEventListener("click", () => {
    getMenu.classList.toggle("menu--open");
  });

  return getMenu;
}

console.log(menuMaker(menuItems));
