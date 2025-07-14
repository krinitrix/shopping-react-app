import React from 'react'
import Navbar from './Navbar'

const AddProducts = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <row>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Title</label>
                        <input type="text" className="form-control" />



                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Category</label>
                        <input type="text" className="form-control" />



                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Description</label>
                        <textarea name="" id="" className="form-control"></textarea>



                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Price</label>
                        <input type="text" className="form-control" />



                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Rating</label>
                        <input type="text" className="form-control" />



                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Stock</label>
                        <input type="text" className="form-control" />



                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Brand</label>
                        <input type="text" className="form-control" />



                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Weight</label>
                        <input type="text" className="form-control" />



                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">DIscount</label>
                        <input type="text" className="form-control" />



                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
                        <div className="button btn btn-primary center">Submit</div>



                        </div>
                    </div>
                </div>
            </row>
        </div>
    </div>
  )
}

export default AddProducts