'use strict'

import {ingredients as ingredients} from './data.js';

const searchInput =  document.querySelector(".search-bar");
const searchButton =  document.querySelector(".search-button");

const searchByIdInput =  document.querySelector(".search-bar-id");
const searchByIdButton =  document.querySelector(".search-button-id");

const displayContainer =  document.querySelector(".display-container");
const displayTotalResults = document.querySelector(".total-results");

let itemsList = [];

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

		let itemContainer = document.createElement('div');
		itemContainer.setAttribute('class', 'item-container');

		let name = document.createElement('div');
		name.setAttribute('class', 'name');
		name.innerHTML = 'Name: ';

		let itemName = document.createElement('div');
		itemName.setAttribute('class', 'item-name');
		itemName.innerHTML = item.name;

		let qualities = document.createElement('div');
		qualities.setAttribute('class', 'qualities');
		qualities.innerHTML = 'Qualities: ';

		let itemQualities = document.createElement('div');
		itemQualities.setAttribute('class', 'item-qualities');
		itemQualities.innerHTML = item.qualities;

		let rasa = document.createElement('div');
		rasa.setAttribute('class', 'rasa');
		rasa.innerHTML = 'Rasa: ';

		let itemRasa = document.createElement('div');
		itemRasa.setAttribute('class', 'item-rasa');
		itemRasa.innerHTML = item.rasa;

		let virya = document.createElement('div');
		virya.setAttribute('class', 'virya');
		virya.innerHTML = 'Virya: ';

		let itemVirya = document.createElement('div');
		itemVirya.setAttribute('class', 'item-virya');
		itemVirya.innerHTML = item.virya;

		let vipaka = document.createElement('div');
		vipaka.setAttribute('class', 'vipaka');
		vipaka.innerHTML = 'Vipaka: ';

		let itemVipaka = document.createElement('div');
		itemVipaka.setAttribute('class', 'item-vipaka');
		itemVipaka.innerHTML = item.vipaka;

		let increase = document.createElement('div');
		increase.setAttribute('class', 'increase');
		increase.innerHTML = 'Increases: ';

		let itemIncrease = document.createElement('div');
		itemIncrease.setAttribute('class', 'item-increase');
		itemIncrease.innerHTML = item.increase;

		let decrease = document.createElement('div');
		decrease.setAttribute('class', 'decrease');
		decrease.innerHTML = 'Decreases: ';

		let itemDecrease = document.createElement('div');
		itemDecrease.setAttribute('class', 'item-decrease');
		itemDecrease.innerHTML = item.decrease;

		let guna = document.createElement('div');
		guna.setAttribute('class', 'guna');
		guna.innerHTML = 'Guna: ';

		let itemGuna = document.createElement('div');
		itemGuna.setAttribute('class', 'item-guna');
		itemGuna.innerHTML = item.guna;

		itemContainer.appendChild(name);
		itemContainer.appendChild(itemName);

		itemContainer.appendChild(qualities);
		itemContainer.appendChild(itemQualities);

		itemContainer.appendChild(rasa);
		itemContainer.appendChild(itemRasa);

		itemContainer.appendChild(virya);
		itemContainer.appendChild(itemVirya);

		itemContainer.appendChild(vipaka);
		itemContainer.appendChild(itemVipaka);

		itemContainer.appendChild(increase);
		itemContainer.appendChild(itemIncrease);

		itemContainer.appendChild(decrease);
		itemContainer.appendChild(itemDecrease);

		itemContainer.appendChild(guna);
		itemContainer.appendChild(itemGuna);

		displayContainer.appendChild(itemContainer);
	})
}

const search = () => {

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

	let result  = ingredients.find(item => item.id === searchedItem ? itemsList.push(item) : null);

	showTotal(itemsList);
	printItems(itemsList);

	return itemsList;
}

const searchId = searchById.bind(ingredients);

searchButton.addEventListener('click', search);
searchByIdButton.addEventListener('click', searchId);