import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState({});

  const googleProvider = new GoogleAuthProvider();

  return (
    <>
      <button
        onClick={() => {
          signInWithPopup(auth, googleProvider)
            .then(async (result) => {
              const credential =
                GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              const user = result.user;
              setUserData(user);
              console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.customData.email;
              const credential = GoogleAuthProvider.credentialFromError(error);
            });
        }}
      >
        onclick
      </button>
        {
          userData?.email
        },
        {
          userData?.displayName
        }
        
        <button onClick={() => {
        setUserData({});
      }}>Logout</button>
    </>
  );
}

export default App;
