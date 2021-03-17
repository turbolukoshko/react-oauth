import { useState } from "react";
import GoogleLogin from "react-google-login";
import "./App.css";
import CardUser from "./components/CardUser/CardUser";
import { cliendId } from "./config/config";

function App() {
  const [userData, setUserData] = useState(null);

  const responseGoogle = (response) => {
    setUserData(response.profileObj);
  };

  return (
    <div className="App">
      {!userData && (
        <div className="login">
          <GoogleLogin
            clientId={cliendId}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
        </div>
      )}
      {userData && <CardUser userData={userData} />}
    </div>
  );
}

export default App;
