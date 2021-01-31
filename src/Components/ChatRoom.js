import React, { useState , useRef } from 'react';
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
//elements import
import ChatMessage from './ChatMessage'
import InputChat from './InputChat'
import Profile from './Profile'
//END of elements Impport

function ChatRoomTest(props) {
    const dummy = useRef()
    const messagesRef = props.content.firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)
    const [messages] = useCollectionData(query, { idField: 'id' })
    const [formValue, setFormValue] = useState('')
    const sendMessage = async(e) => {
      e.preventDefault()
  
      const {uid, photoURL} = auth.currentUser
      if(formValue === ""){
        return
      }
      await messagesRef.add ({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('')

      dummy.current.scrollIntoView({ behavior: 'smooth'})
    }
    /// replace that fuckking element back to place while done you coward
    const auth = firebase.auth()
    return (
      <div className="chatRoomContainer">
        {props.content.show ?
          <div>
            <div className="messagesOutput">
              {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} auth={auth} />)}
              <div ref={dummy}></div>
            </div>
            
            <InputChat content={{sendMessage: sendMessage,formValue: formValue,setFormValue: setFormValue}} />
          </div>
        : <Profile content={{auth: auth}} />}
      </div>
    )
  }
export default ChatRoomTest