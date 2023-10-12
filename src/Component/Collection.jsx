import React from 'react'
import {cards} from '../data'
import "../Styles/card.css"

const Collection = () => {
    const card_details = cards.map((card)=>{
    let button;
     if(card.id === 4){
        button = <button>Collect Now</button>
     }
        return(
        <div className='card-cont' key={card.id}>
            <section className='txt-section'>
                <h6>{card.title}</h6>
                <p>{card.maker}</p>
            </section>
            <section className='img-section'>
                <img src={card.img} alt="" />
            </section>
            <div className='lower-section'>
                <section className='ETH'>
                    <h5>Current Bid</h5>
                    <p>{card.ETH}</p>
                </section>
                <section className='time'>
                    <h5>Remaining Time</h5>
                    <p>02 : 12 : 09</p>
                </section>
            </div>
            {button}
        </div>
        )
    })
  return (
    <div className='main-collection'>
        <h3>Top Collection</h3>
        <div className='container'>
            {card_details}
        </div>
        <div className='more'>See more</div>
    </div>
  )
}

export default Collection