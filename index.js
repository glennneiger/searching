'use strict'

const ingredients = [
	{
		id: 1,
		name: 'Apple',
		qualities: 'Light, Rough',
		rasa: 'Sweet, Astringent',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'Vata',
		decrease: 'Pitta',
		type: 'fruits'
	}, {
		id: 2,
		name: 'Banana',
		qualities: 'Smooth, Heavy, Laxative',
		rasa: 'Sweet, Astringent',
		virya: 'Cooling',
		vipaka: 'Sour',
		increase: 'Pitta and Kapha',
		decrease: 'Vata',
		type: 'fruits'
	},
	{
		id: 3,
		name: 'Coconut',
		qualities: 'Oily, Smooth',
		rasa: 'Sweet',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'Kapha',
		decrease: 'Vata and Pitta',
		type: 'fruits'
	},
	{
		id: 4,
		name: 'Date',
		qualities: 'Oily',
		rasa: 'Sweet',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'none',
		decrease: 'Pitta',
		type: 'fruits'
	},
	{
		id: 5,
		name: 'Fig',
		qualities: 'Heavy, Nourishing',
		rasa: 'Sweet',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'Kapha',
		decrease: 'Vata and Pitta',
		type: 'fruits'
	},
	{
		id: 6,
		name: 'Beet',
		qualities: 'Heavy, Smooth',
		rasa: 'Sweet',
		virya: 'Heating',
		vipaka: 'Sweet',
		increase: 'Kapha and Pitta',
		decrease: 'Vata',
		type: 'vegetables'
	},
	{
		id: 7,
		name: 'Broccoli',
		qualities: 'Rough, Dry',
		rasa: 'Sweet',
		virya: 'Heating',
		vipaka: 'Pungent',
		increase: 'Vata',
		decrease: 'Kapha and Pitta',
		type: 'vegetables'
	},
	{
		id: 8,
		name: 'Cauliflower',
		qualities: 'Rough, Dry',
		rasa: 'Astringent',
		virya: 'Cooling',
		vipaka: 'Pungent',
		increase: 'Vata',
		decrease: 'Kapha and Pitta',
		type: 'vegetables'
	},
	{
		id: 9,
		name: 'Carrot',
		qualities: 'Heavy',
		rasa: 'Sweet, Bitter, Astringent',
		virya: 'Cooling',
		vipaka: 'Pungent',
		increase: 'Pitta',
		decrease: 'Kapha and Vata',
		type: 'vegetables'
	},
	{
		id: 10,
		name: 'Letucce',
		qualities: 'Cooling, light',
		rasa: 'Astringent',
		virya: 'Cooling',
		vipaka: 'Pungent',
		increase: 'Vata',
		decrease: 'Kapha and Pitta',
		type: 'vegetabless'
	},
	{
		id: 11,
		name: 'Basmati Rice',
		qualities: 'Light, Soft, Smooth, Nourishing',
		rasa: 'Astringent',
		virya: 'Cooling',
		vipaka: 'Pungent',
		increase: 'Kapha in excess',
		decrease: 'Vata and Pitta',
		type: 'grains'
	},
	{
		id: 11,
		name: 'Corn',
		qualities: 'Light, Dry',
		rasa: 'Sweet',
		virya: 'Heating',
		vipaka: 'Sweet',
		increase: 'Pitta and Vata',
		decrease: 'Kapha',
		type: 'grains'
	},
	{
		id: 12,
		name: 'Wheat',
		qualities: 'Heavy',
		rasa: 'Sweet',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'Kapha',
		decrease: 'Vata and Pitta',
		type: 'grains'
	},
	{
		id: 13,
		name: 'Oats (cooked)',
		qualities: 'Heavy, Oil',
		rasa: 'Sweet',
		virya: 'Heating',
		vipaka: 'Sweet',
		increase: 'Kapha in excess',
		decrease: 'Vata and Pitta',
		type: 'grains'
	},
	{
		id: 14,
		name: 'Oats (raw)',
		qualities: 'Heavy, dry',
		rasa: 'Sweet',
		virya: 'Heating',
		vipaka: 'Sweet',
		increase: 'Vata and Pitta',
		decrease: 'Kapha',
		type: 'grains'
	},
	{
		id: 15,
		name: 'Barley',
		qualities: 'Light',
		rasa: 'Sweet, Astringent',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'Vaya',
		decrease: 'Kapha and Pitta',
		type: 'grains'
	},
	{
		id: 16,
		name: 'Almonds',
		qualities: 'Heavy, Oily',
		rasa: 'Sweet',
		virya: 'Heating',
		vipaka: 'Sweet',
		increase: 'Kapha and Pitta',
		decrease: 'Vata',
		type: 'nuts'
	},
	{
		id: 17,
		name: 'Peanuts',
		qualities: 'Heavy, Oily',
		rasa: 'Sweet, Astringent',
		virya: 'Heating',
		vipaka: 'Sweet',
		increase: 'Kapha and Pitta',
		decrease: 'Vata',
		type: 'nuts'
	},
	{
		id: 18,
		name: 'Pumpkin Seeds',
		qualities: 'Heavy, Dry',
		rasa: 'Sweet, Bitter, Astringent',
		virya: 'Heating',
		vipaka: 'Pungent',
		increase: 'Vata and Pitta',
		decrease: 'Kapha',
		type: 'nuts'
	},
	{
		id: 19,
		name: 'Sunflower Seeds',
		qualities: 'Heavy, Oily',
		rasa: 'Sweet, Astringent',
		virya: 'Heating',
		vipaka: 'Sweet',
		increase: 'Kapha and Pitta',
		decrease: 'Vata',
		type: 'nuts'
	},
	{
		id: 20,
		name: 'Cashews',
		qualities: 'Heavy, Oily',
		rasa: 'Sweet',
		virya: 'Heating',
		vipaka: 'Sweet',
		increase: 'Kapha and Pitta',
		decrease: 'Vata',
		type: 'nuts'
	},
	{
		id: 21,
		name: 'Lentils (brown)',
		qualities: 'Dry, Rough, Heavy',
		rasa: 'Sweet, Astringent',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'Vata and Kapha',
		decrease: 'Pitta',
		type: 'legumes'
	},
	{
		id: 22,
		name: 'Mung Bean',
		qualities: 'Light, Soft',
		rasa: 'Sweet, Astringent',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'Kapha',
		decrease: 'Vata and Pitta',
		type: 'legumes'
	},
	{
		id: 23,
		name: 'Soy Beans',
		qualities: 'Heavy, Oily, Smooth',
		rasa: 'Sweet, Astringent',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'Kapha and Vata',
		decrease: 'Pitta',
		type: 'legumes'
	},
	{
		id: 24,
		name: 'Chickpeas',
		qualities: 'Dry, Heavy, Rough',
		rasa: 'Sweet, Astringent',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'Vata',
		decrease: 'Kapha and Pitta',
		type: 'legumes'
	},
	{
		id: 25,
		name: 'Lentils (red)',
		qualities: 'Light, Soft',
		rasa: 'Sweet, Astringent',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'Vata',
		decrease: 'Kapha and Pitta',
		type: 'legumes'
	},
	{
		id: 26,
		name: 'Sunflower Oil',
		qualities: 'Light, Oily',
		rasa: 'Sweet',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'Tridoshic',
		decrease: 'Tridoshic',
		type: 'oils'
	},
	{
		id: 27,
		name: 'Ghee',
		qualities: 'Light, Oily, Smooth',
		rasa: 'Sweet',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'Kapha',
		decrease: 'Tridoshic',
		type: 'oils'
	},
	{
		id: 28,
		name: 'Sunflower Oil',
		qualities: 'Light, Oily',
		rasa: 'Sweet',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'Tridoshic',
		decrease: 'Tridoshic',
		type: 'oils'
	},
	{
		id: 29,
		name: 'Sesame Oil',
		qualities: 'Heavy, Oily, Smooth',
		rasa: 'Sweet, Bitter, Astringent',
		virya: 'Heating',
		vipaka: 'Sweet',
		increase: 'Pitta',
		decrease: 'Vata',
		type: 'oils'
	},
	{
		id: 30,
		name: 'Safflower Oil',
		qualities: 'Light, Sharp, Oily',
		rasa: 'Sweet, Pungent',
		virya: 'Heating',
		vipaka: 'Pungent',
		increase: 'Pitta',
		decrease: 'Kapha and Vata',
		type: 'oils'
	}

];

let itemsList = [];
const searchInput =  document.querySelector(".search-bar");
const searchButton =  document.querySelector(".search-button");
const displayContainer =  document.querySelector(".display-container");

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

		displayContainer.appendChild(itemContainer);
	})
}

const search = () => {

	itemsList = [];

	let searchedItem = searchInput.value.toLowerCase();

	ingredients.forEach(item => {
		if (item.name.toLowerCase().includes(`${searchedItem}`)) {
			itemsList.push(item);
		} else {
			displayContainer.innerHTML = 'No results found :('
		}
	})


	printItems(itemsList);

	return itemsList;
}

searchButton.addEventListener('click', search);