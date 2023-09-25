import React from 'react'
import "../Styles/hero.css"
import heroLogo from "../Assets/hero.png"

const Hero = () => {
  return (
    <div className='hero-container'>
        <section className='text-section'>
            <h1>Explore, Collect  and Sell super Rare <span className='nft'>NFT</span></h1>
            <p>First Digital Marketplace to buy and sell artwork from the world top artists</p>
            <section className='button-section'>
                <button className='disc'>Discover</button>
                <button className='wallet'>Connect wallet</button>
            </section>
            <section className='sales-number'>
                <p>25K<span className='plus'>+</span> <span className='art'>Artwork</span></p>
                <p>15k<span className='plus'>+</span> <span className='art'>Auction</span></p>
                <p>10k<span className='plus'>+</span> <span className='art'>Artist</span></p>
            </section>
        </section>
        <section className='image-section'>
            <img src={heroLogo} alt="hero"/>
        </section>
    </div>
  )
}
export default Hero