import React from 'react'
import meta from "../Assets/MetaMask-Emblem-500x281.png"
import Mask from "../Assets/Mask group.png"
import wallet from "../Assets/Group 78.png"
import exodus from "../Assets/Exodus_Logo-094c6a5bbda24cb29c2f930dd254069f.png"
import blue from "../Assets/horizontal_blue.png"

const Trustee = () => {
  return (
    <div className='trustee'>
        <h1>We are trusted by</h1>
        <div className='sponsor'>
            <div><img src={meta} alt="" /></div>
            <div><img src={Mask} alt="" /></div>
            <div><img src={wallet} alt="" /></div>
            <div><img src={exodus} alt="" /></div>
            <div><img src={blue} alt="" /></div>
        </div>
    </div>
  )
}

export default Trustee

