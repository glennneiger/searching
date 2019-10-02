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

<div class="card">

<header class="card-header-title">
	<p class="title">Apple</p>
</header>

<div class="card-content">
	<div class="content">
		<div class="columns is-centered is-mobile">
			<div class="column">
				<p>Type:</p>
				<p>Qualities:</p>
				<p>Rasa:</p>
				<p>Virya:</p>
				<p>Vipaka:</p>
				<p>Guna:</p>
				<p>Increase:</p>
				<p>Decrease:</p>
			</div>
			<div class="column">
				<p>Fruit</p>
				<p>Sweet, Astringet</p>
				<p>Sweet</p>
				<p>Cooling</p>
				<p>Sweet</p>
				<p>Sattvic</p>
				<p>Vata</p>
				<p>Pitta, Kapha</p>
			</div>
		</div>
	</div>
</div>

<footer class="card-footer">
	<a href="#" class="card-footer-item">Save</a>
	<a href="#" class="card-footer-item">Edit</a>
	<a href="#" class="card-footer-item">Delete</a>
</footer>

</div>