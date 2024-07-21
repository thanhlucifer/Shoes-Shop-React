import React from 'react';

const ProductItem = ({ item, setStateModal }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">${item.price}</p>
          <button className="btn btn-primary" onClick={() => setStateModal(item)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
