const breakfastMenu = ['Pancakes -$12.99', 'Eggs Benedict -$6.99', 'Oatmeal -$15', 'Frittata -$22.99'];
const mainCourseMenu = ['Steak -$10', 'Pasta -$22', 'Burger -$18', 'Salmon -$25'];
const dessertMenu = ['Cake -$11', 'Ice Cream -$6', 'Pudding -$12', 'Fruit Salad -$8'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => '<p>Item ' + (index + 1) + ': ' + item + '</p>').join('');
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHTML;
//const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += '<p>Item ' + (index + 1) + ': ' + item + '</p>';});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += '<p>Item ' + (i + 1) + ': ' + dessertMenu[i] + '</p>';
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

