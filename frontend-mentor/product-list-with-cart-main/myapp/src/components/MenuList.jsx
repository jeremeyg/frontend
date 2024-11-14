import React from "react";

const Products = ({ data }) => {
    return (
        <div className="products">
            {data.map(menu => {
                <div key={menu.id} className="menu-list">
                    <img src={menu.image.desktop} alt="" />
                    <button>Add to Cart</button>
                    <div className="menu-list-info">
                        <p className="menu-list-category">{menu.category}</p>
                        <p className="menu-list-name">{menu.name}</p>
                        <p className="menu-list-price">${menu.price}</p>
                    </div>
                </div>;
            })}
        </div>
    );
};

export default Products;
