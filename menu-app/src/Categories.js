import React from 'react';

const Categories = ({ categories, filterItem }) => {
	return (
		<div className="btn-container">
			{categories.map((category, index) => {
				return (
					<button key={index} className="filter-btn" onClick={() => filterItem(category)}>
						{category}
					</button>
				);
			})}
			{/* {categories.map((category, index) => {
				return (
					<button className="filter-btn" onClick={() => filterItem(category)}>
						{category}
					</button>
				);
			})} */}
			{/* {category.map(({ category }) => {
				return (
					<button
						className="filter-btn"
						onClick={() => {
							filterItem('breakfast');
						}}
					>
						break fast
					</button>
				);
			})} */}
		</div>
	);
};

export default Categories;
