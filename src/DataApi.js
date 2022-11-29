import React, {useState, useEffect} from 'react'
import axios from 'axios' 


function DataApi() {
  
    const [players, setPlayers] = useState([])
    
    
    useEffect(() => { 

        const options = {
            method: 'GET',
            url: 'https://free-nba.p.rapidapi.com/players',
            params: {page: '0', per_page: '25'},
            headers: {
              'X-RapidAPI-Key': 'd5e7e32e1bmshf7626b5698184d1p1a093fjsn53eb856e94ff',
              'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
          };
          
          axios.request(options)
          .then((response) => { 
              console.log(response.data)
              setPlayers(response.data)
          })
          .catch((err) => {
              console.err(err)
          })



    }, [])

        
    
   

    return (
    <div>
        <h2>Players</h2>
            {players.map((player) => (
            <p>{player.first_name}</p>
            ))}
   
    </div>
  )
}

export default DataApi