import React from 'react'
import "../Styles/creator.css"
import { topCreators } from '../data'
const Creators = () => {
  const creator_cards = topCreators.map((creator)=>{

    return(
    <div className='creator-card' key={creator.img}>
      <section>
        <img src={creator.img} alt="" />
      </section>
      <section className='text-sect'>
        <p>{creator.name}</p>
          <p>
            <span><img src={creator.logo} alt="" /></span>
            {creator.Price}
          </p>
      </section>
    </div>
    )

  })
  return (
    <div className='creators'>
        <h1>Top Creators</h1>
        <div className='creator-cont'>
          {creator_cards}
        </div>

        <div className='sell'>
          <h1>Start Selling Now</h1>
          <p>Ready to turn your passion into profit? Join us in revolutionizing digital ownership. Start creating and selling your NFTs today!</p>
          <button>Explore</button>
        </div>
        <Footer/>
    </div>
  )
}
const Footer=()=>{

  return(
    <div>
     
    </div>
  )
}
export default Creators