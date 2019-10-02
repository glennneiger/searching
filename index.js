'use strict'

import {ingredients as ingredients} from './data.js';

const searchInput =  document.querySelector(".search-bar");
const searchButton =  document.querySelector(".search-button");

const searchByIdInput =  document.querySelector(".search-bar-id");
const searchByIdButton =  document.querySelector(".search-button-id");

const displayContainer =  document.querySelector(".display-container");
const displayTotalResults = document.querySelector(".total-results");

const condition = document.querySelector("select");
const inputFilter = document.querySelector(".search-condition");

let itemsList = [];

const searchByType = () => {

	let itemsList =  ingredients.filter(item => item[`${condition.value}`].startsWith(inputFilter.value) ?  true :  false);

	 showTotal(itemsList);
	 printItems(itemsList);
}

const showTotal = list => {

	if (list.length === 0 ) {
		displayTotalResults.innerHTML = ` 0 RESULTADOS `;
	} else if (list.length === 1 ) {
		displayTotalResults.innerHTML = `${list.length} RESULTADO`;
	} else {
		displayTotalResults.innerHTML = `${list.length} RESULTADOS`;
	}
}

const printItems = list => {

	displayContainer.innerHTML = '';

	list.forEach(item => {

		let cardContainer = document.createElement('div');
		cardContainer.setAttribute('class', 'card');

		let headerTitle = document.createElement('header');
		headerTitle.setAttribute('class', 'card-header-title');

		let itemTitle = document.createElement('p');
		itemTitle.setAttribute('class', 'title');
		itemTitle.innerHTML = item.name;

		let cardContent = document.createElement('div');
		cardContent.setAttribute = ('class', 'card-content');

		let content = document.createElement('div');
		content.setAttribute('class', 'content');

		let columns = document.createElement('div');
		columns.setAttribute('class', 'columns is-centered is-mobile');

		let firstColumn = document.createElement('div');
		firstColumn.setAttribute('class', 'column');

		let type = document.createElement('p');
		type.innerHTML = 'Type: ';

		let qualities = document.createElement('p');
		qualities.innerHTML = 'Qualities: ';

		let rasa = document.createElement('p');
		rasa.innerHTML = 'Rasa: ';

		let virya = document.createElement('p');
		virya.innerHTML = 'Virya: ';

		let vipaka = document.createElement('p');
		vipaka.innerHTML = 'Vipaka: ';

		let increase = document.createElement('p');
		increase.innerHTML = 'Increase: ';

		let decrease = document.createElement('p');
		decrease.innerHTML = 'Decrease: ';

		let secondColumn = document.createElement('div');
		secondColumn.setAttribute('class', 'column');

		let itemType = document.createElement('p');
		itemType.innerHTML = item.type;

		let itemQualities = document.createElement('p');
		itemQualities.innerHTML = item.qualities;

		let itemRasa = document.createElement('p');
		itemRasa.innerHTML = item.rasa;

		let itemVirya = document.createElement('p');
		itemVirya.innerHTML = item.virya;

		let itemVipaka = document.createElement('p');
		itemVipaka.innerHTML = item.vipaka;

		let itemIncrease = document.createElement('p');
		itemIncrease.innerHTML = item.increase;

		let itemDecrease = document.createElement('p');
		itemDecrease.innerHTML = item.decrease;

		cardContainer.appendChild(headerTitle);
		headerTitle.appendChild(itemTitle);
		cardContainer.appendChild(cardContent);
		cardContent.appendChild(content);
		content.appendChild(columns);
		columns.appendChild(firstColumn);
		firstColumn.appendChild(type);
		firstColumn.appendChild(qualities);
		firstColumn.appendChild(rasa);
		firstColumn.appendChild(virya);
		firstColumn.appendChild(vipaka);
		firstColumn.appendChild(increase);
		firstColumn.appendChild(decrease);
		columns.appendChild(secondColumn);
		secondColumn.appendChild(itemType);
		secondColumn.appendChild(itemQualities);
		secondColumn.appendChild(itemRasa);
		secondColumn.appendChild(itemVirya);
		secondColumn.appendChild(itemVipaka);
		secondColumn.appendChild(itemIncrease);
		secondColumn.appendChild(itemDecrease);

		displayContainer.appendChild(cardContainer);

	})
}

const searchByName = () => {

	itemsList = [];

	let searchedItem = searchInput.value.toLowerCase();

	ingredients.forEach(item => {
		if (item.name.toLowerCase().includes(`${searchedItem}`)) {
			itemsList.push(item);
		}
	})

	showTotal(itemsList);
	printItems(itemsList);
}

const searchById = function() {

	itemsList = [];

	let searchedItem = parseInt(searchByIdInput.value);

	let isFound = false;

	let i = 0;

	while (i < ingredients.length && !isFound) {

		if (searchedItem === ingredients[i].id) {
			itemsList.push(ingredients[i]);
			isFound = true;
		}

		i++;
	}

	showTotal(itemsList);
	printItems(itemsList);

	return itemsList;
}

const search = () => {

	if (searchInput.value.length !== 0) {
		searchByName();
	} else {
		searchByType();
	}
}

const searchId = searchById.bind(ingredients);

searchButton.addEventListener('click', search);
searchByIdButton.addEventListener('click', searchId);
