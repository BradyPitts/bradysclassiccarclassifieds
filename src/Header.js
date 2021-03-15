import React from 'react'
import Logo from './images/star.png'

export default function Header(){
  return(
    <header>
      <img src = {Logo} alt = "Brady's Logo" />
      <h1>Brady's Classic Car Classifieds</h1>
      <nav>
        <a>Home</a>
        <a>Buy Cars</a>
        <a>Sell Your Car</a>
        <a>Contact us</a>
        <a>User Agreement</a>
      </nav>

    </header>
  );
}