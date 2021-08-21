import React from 'react'
import { useState } from 'react'
import Card from './Card'
import img1 from '../images/food.jpg';
import img2 from '../images/ethio.jpg';
import img3 from '../images/de.jpg';
import img4 from '../images/hd.jpeg';
const Sectors = () => {

    return (
        <section className="Sectors">
                <div className="container-fluid d-flex justify-content-center">
                   <div className="row">
                       <div className="col-md-3">
                            <Card imgsrc={img1} title="Natural resource and Food security"/>
                       </div>
                       <div className="col-md-3">
                            <Card imgsrc={img2} title="Farming Development"/>
                       </div>
                       <div className="col-md-3">
                            <Card imgsrc={img3} title="Agricultural inputs and production market"/>
                       </div>
                       <div className="col-md-3">
                            <Card imgsrc={img4} title="Livestock resources"/>
                       </div>
                   </div>
                </div>
        </section>
    )
}

export default Sectors
