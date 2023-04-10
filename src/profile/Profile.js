import React from 'react'
import Image from './Image'

function Profile(props) {
  return (
    <div className='profile-det'>
        <h1 style={{color:'red'}}>{props.name}</h1>
        <h3>{props.bio}</h3>
        <h2>{props.profession}</h2>

      <Image>

      <img src="https://www.legalplace.fr/wp-content/uploads/2019/04/16.04-Content-Squad-Sci-personne-morale-1.jpg" alt='Imed' width={300}/>
        
      </Image>  
    </div>

  )

}


export default Profile