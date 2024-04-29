import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
  const CLIENT_ID = "4c0e45cd3d324d468d5a4bba32da6be7"
  const REDIRECT_URI = "http://localhost:3000/"
  // const SECRET_KEY = "db4c0c7d47734d7bbf0fe359697bfa1a"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] =  useState("")
  const[artists, setArtists] = useState([])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

//   const searchTags = async (e)=> {
//     e.preventDefault()
//     const{data} = await axios.get("https://api.spotify.com/v1/search". {
//       headers: {
//         Authorization: `Bearer ${token}`
//     },
//     params: {
//       q: searchKey,
//       type: "artist"
//     }
//   })
//    setTags(data.tags.items)
// }


  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
        console.log(token)
        console.log('blah')
    }
    
    setToken(token)
  }, [])  
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>spotiy react</h1>
       <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
       <div className="container">
                    {items.map((item) => (
                        <div className="item">
                            <ol key={item.id}>
                                <div>
                                    <strong>
                                        {"artist: Cavetown"}
                                    </strong>
                                    {item.artist},
                                </div>
                            </ol>
                        </div>
                    ))}
                </div>
        </a>
      </header>
    </div>
  );
  

}

export default App;