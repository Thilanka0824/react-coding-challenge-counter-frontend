import React from 'react'


const PokemonPage = () => {
  return (
    <div className='pokemon-div'>
    <label htmlFor='pokemon'>Pokemon: </label>
    <br/>
    <br/>
    <br/>
    <img src='https://pokestop.io/img/pokemon/charizard-256x256.png' alt=''/>
    <h3>Charizard</h3>
      <img src="https://pokestop.io/img/pokemon/aggron-256x256.png" alt=''/>
    <br/>
    <h3>Aggron</h3>
    <img src='https://pokestop.io/img/pokemon/ho-oh-256x256.png' alt=''/>
    <h3>Ho-oh</h3>
    <img src='https://pokestop.io/img/pokemon/groudon-256x256.png' alt=''/>
    <h3>Groudon</h3>
      
    </div>
  );
}

export default PokemonPage