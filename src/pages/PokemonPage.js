import React from 'react'
import Logo from '../components/Logo';

const PokemonPage = () => {
  return (
    <div className='pokemon-div'>
      <img src="https://pokestop.io/img/pokemon/aggron-256x256.png" />
    <br/>
    <h3>Aggron</h3>
    <img src='https://pokestop.io/img/pokemon/ho-oh-256x256.png'/>
    <h3>Ho-oh</h3>
    <img src='https://pokestop.io/img/pokemon/groudon-256x256.png'/>
    <h3>Groudon</h3>
      
    </div>
  );
}

export default PokemonPage