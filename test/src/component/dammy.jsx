import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Test()
{
const Test = () => {
  const [data, changeData] = usestate([]);
  const getApi=()=>{
    axios.get("https://dummyjson.com/carts").then(
      (Response)=>{
        changeData(Response.data)
      }
    ).catch(
      (error)=>{
        console.log(error)
        alert("Something went wrong!!")
      }
    )
  }
  useEffect(getApi,[])
const carts = data[0].carts || [];
return (
  <div>
    <div className="container">
      <div className="row">
        {
          carts.map(
            (value, index) => {
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                return (
                <div className="card">
                  <img src={value.products[0].thumbnail} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.products[0].title}</h5>
                    <p className="card-text">Buy now.</p>
                    <a href="#" className="btn btn-primary">{value.products[0].price}</a>
                  </div>
                </div>
                )

              </div>
            }
          )
        }
      </div>
    </div>
  </div>
);

}
}
export default Test;
