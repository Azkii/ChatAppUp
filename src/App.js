import React from 'react';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
//
import { useAuthState } from 'react-firebase-hooks/auth'
//elements import
import SignUp from './Components/SignUp'
import NavBar from './Components/NavBar'
import ChatRoom from './Components/ChatRoom'

//END of elements Impport

firebase.initializeApp ({
  //config
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  const [user] = useAuthState(auth)
  const [show, toggleShow] = React.useState(true)
  return (
    <div className="App">
      <div >{user ? <NavBar content={{auth: auth, show: show, toggleShow: toggleShow}} /> : ""}</div>
      <section>
        {user ? <ChatRoom  content={{ auth: auth, firestore: firestore, show: show}} /> : <SignUp content={{ GoogleAuth: new firebase.auth.GoogleAuthProvider(), GoogleAuth2: auth }}  />}
      </section>
    </div>
  );
}
/// DONE HERE ---------------------------------------------------------------------------------------------------------------------
export default App;
