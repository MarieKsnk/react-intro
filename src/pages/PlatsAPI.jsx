import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav'; 
import '../App.css';


const PlatsAPI = () => {

  const [plats, setPlats] = useState([])

  const fetchPlats = async () => {
      try{
          const response = await axios.get('http://localhost:4000/plats')
          setPlats(response.data)
      } catch(error) {
          console.log(error)
      }
  }

  useEffect(() => {
      fetchPlats()
  }, [])



  return(
      <>
      <Nav />
      <div className='cards'>
          <h1>Voici les plats de l'API</h1>
          {plats.map(plat => {
              return(
                  <div>
                      <h2>{plat.title}</h2>
                  </div>
              )
          })}
        </div>
      </>
  )
}

export default PlatsAPI;
