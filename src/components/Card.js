import React from 'react'
import card from './card.css'
const Card = props => {
    return (
        <div className = 'card text-center'>
                 <div className='overflow'>
                     <img src ={props.imgsrc} alt="sorry we can't find " className="card-img-top"/>
                 </div>
                 <div className="card-body text-dark">
                     <h4>{props.title}</h4>
                     <div>
                     <p className="card-text text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                     <a href='#'className="btn btn-outline-success">view more</a>
                     </div>
                 </div>
             </div>
    )
}

export default Card
