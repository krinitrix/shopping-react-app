import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAllProducts = () => {

        const [products,setItem]= useState(
            {
                "products":
                [

                ]
            }
        )


        const fetchData=()=>{
            
            axios.get("https://dummyjson.com/products").then(
                (response)=>{
                    setItem(response.data)
                }
            ).catch()
        }

        useEffect(()=>{fetchData()},[])

  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {/* card starting */}

{products.products.map(
    (value,index)=>{
        return(
<div className="col col-12 col-sm-6 col-md-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            
                            <div class="card">
                                <img src={value.images} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{value.title}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>


                        </div>
                         )
                    }
                    )   }
                        
                        {/* card end */}


                        


                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ViewAllProducts