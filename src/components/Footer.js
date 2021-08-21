import React from 'react'

const Footer = () => {
    return (
      
    <footer class="page-footer font-small indigo">
        <div className="container">
            <div className="row text-center d-flex justify-content-center pt-5 mb-3">
                <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                    <a href="#!">About us</a>
                    </h6>
                 </div>
                 <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                    <a href="#!">Products</a>
                    </h6>
                </div>
                <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                    <a href="#!">Contact</a>
                    </h6>
                </div>
            </div>
            <hr class="rgba-white-light" style="margin: 0 15%;"></hr>
        </div>
   </footer>

    )
}

export default Footer
