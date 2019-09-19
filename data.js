const ingredients = [
	{
		id: 01,
		name: 'Apple',
		qualities: 'Light, Rough',
		rasa: 'Sweet, Astringent',
		virya: 'Cooling',
		vipaka: 'Sweet',
		increase: 'Vata',
		decrease: 'Pitta',
		type: 'fruits'
	}, {
		id: 02,
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
		id: 03,
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
		id: 04,
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
		id: 05,
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
		id: 06,
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
		id: 07,
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
		id: 08,
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
		id: 09,
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

]



