import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
  const [data, changeData] = useState([]); // ✅ useState should be capitalized

  const getApi = () => {
    axios.get("https://dummyjson.com/carts").then(
      (response) => {
        changeData(response.data.carts || []); // ✅ Assign carts directly
      }
    ).catch(
      (error) => {
        console.error(error);
        alert("Something went wrong!!");
      }
    );
  };

  useEffect(() => {
    getApi(); // ✅ useEffect should pass a function, not a reference
  }, []);

  return (
    <div className="container">
      <div className="row">
        {
          data.map((cart, index) => (
            <div key={index} className="col-12">
              <div className="card mb-3">
                <img src={cart.products[0].thumbnail} className="card-img-top" alt={cart.products[0].title} />
                <div className="card-body">
                  <h5 className="card-title">{cart.products[0].title}</h5>
                  <p className="card-text">Buy now.</p>
                  <a href="#" className="btn btn-primary">${cart.products[0].price}</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Test;
