const menuPage = document.createElement('div');
menuPage.classList.add('container');

//menu items array
const menuItems = []

//header element
const menuHeader = document.createElement('div');
menuHeader.classList.add('header');
menuPage.appendChild(menuHeader);
const headerText = document.createElement('h1')
    headerText.textContent = "Menu"
menuHeader.appendChild(headerText)

//create menu div element
const menuDiv = document.createElement('div');
menuDiv.classList.add('menu');
menuPage.appendChild(menuDiv);

//create menu item
function createMenuItem(itemName, description) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('card')

    const nameDiv = document.createElement('p');
    nameDiv.classList.add('item-name');
    nameDiv.innerText = itemName;
    itemDiv.appendChild(nameDiv);

    const descriptionDiv = document.createElement('p');
    descriptionDiv.classList.add('item-description');
    descriptionDiv.innerText = description;
    itemDiv.appendChild(descriptionDiv)

    menuItems.push(itemDiv);
}

//populate menu items
createMenuItem('JUMBO CRAB CAKES', 'smoked tomato aioli + fried sweet potato + arugula salad + pickled red onion');
createMenuItem('BUCKNER LAMB GYRO', 'tzatziki + hummus + cucumber salad + feta + pickled peppers + herbed farro + roasted local vegetables + pita')
createMenuItem('BLACK & BLUE PASTA', 'blackened beef tips + blue cheese cream + sautéed mushrooms + spinach + conchiglie pasta + toasted focaccia');
createMenuItem('CUBAN SANDWICH', 'mojo pork + black forest ham + white cheddar + pickles + garlic mayo + yellow mustard + crisp telera bread');
createMenuItem('AHI POKÉ RICE BOWL', 'Hawaiian tuna + ponzu + kimchi + mushrooms + peppers + basil + cilantro + cashews + jasmine rice');
createMenuItem('STEAK FRITES', 'grilled bistro filet + brown butter sauce + candied bacon + garlic parm fries + scallions');


//add menu items to menu array
menuItems.forEach(item => menuDiv.appendChild(item));

export { menuPage };