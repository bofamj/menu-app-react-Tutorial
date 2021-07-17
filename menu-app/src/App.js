import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategory = [ ...new Set(items.map((item) => item.Category)) ];
function App() {
	const [ itemMenu, setItemMenu ] = useState(items);
	const [ categories, setCategories ] = useState(allCategory);
	const filterItem = (category) => {
		const newItem = items.filter((item) => item.category === category);
		setItemMenu(newItem);
	};
	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline" />
				</div>
				<Categories categories={categories} filterItem={filterItem} />
				<Menu itemMenu={itemMenu} />
			</section>
		</main>
	);
}

export default App;
