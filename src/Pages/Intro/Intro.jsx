import React from 'react'
import intro from '../../Components/Assets/WEB/intro.png'
import './Intro.css'
const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__col">
        <h1>About</h1>
        <p className='lighter'>Subheading for description or instructions</p>
        <p>Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:</p>
        <p>Excepteur efficient emerging, minim veniam anim auto carfully curated Finza conver sation exquisite perfect nostrud nisi intricate Content. 
          Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusomod irure. Exclusive izakaya charming Scandinavian 
          impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable offica Helsinki excepteur Basset hound. 
          Zurich sleepy perfect consectetur.</p>
      </div>
      <div className="intro__col">
        <img src={intro} alt="intro" />
      </div>
    </div>
  )
}

export default Intro