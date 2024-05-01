import "./App.css";
import react, { useEffect, useState } from "react";
import axios from "axios";


const LoginScreen = () => {

  //variable declarations
  const client_ID = "4c0e45cd3d324d468d5a4bba32da6be7";
  const redirect_url = "http://localhost:3000";
  const auth_endpoint = "https://accounts.spotify.com/authorize?";
  const response_type = "token";
  const [token, setToken] = useState("");
  // const [user_ID, set_user_ID] = useState("");
  // const [followers, set_followers] = useState("");
  // const [playlist_json, set_playlist_json] = useState([]);
  // const [button_json,set_button_json] = useState([])
  // const [selected_playlist, set_selected_playlist] = useState("");
  // let playlist_names_array = [];
  // let playlists_json = [];
  let redirect_button_clicked;

  

  //useEffect function to call other functions
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    // getToken
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    // setToken(token);
    // getID(token);
    // getPlaylists(token);
    
    window.onbeforeunload = function() {
      if(!redirect_button_clicked){
        localStorage.clear();
      }
      else{
        redirect_button_clicked=false;
      }
   }
  }, []);
  return(
    // <h1>SOMETHING </h1>
    <div className="Home">
      <div id="grad1">
        <h1></h1>
        <br></br>
        <br></br>
        <br></br>

        {token ? (
          <h2>
            
            welcome, {user_ID}!

            <p>you have {button_json.length} playlists and {followers} followers!</p>
            {/* here, add data you can obtain from their general profile and account */}
            <p>click on one of your playlists to find out more about your musical taste!</p>
            <br></br>
            <br></br>
            
            <div>{button_json}</div>
            

          </h2>
        ) : (
          <h2>Please Login </h2>
          
        )}

        {!token ? (
          <a
            href={`${auth_endpoint}?client_id=${client_ID}&redirect_uri=${redirect_url}&response_type=${response_type}`}
            class="button2"
          >
            Click Me!
          </a>
        ) : (
          <button class="button2" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}; 
export default LoginScreen;
// const logout = () => {
//     setToken("")
//     window.localStorage.removeItem("token")
//   }
// return(
//      <div className="App">
//        <header className="App-header">
//         <h1>spotiy react</h1>
//         <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
//         </a>
//       </header>
//     </div>
// );