import React, { useEffect, useState } from 'react'
import ChatContainer from './ChatContainer';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase'

const Chat = () => {
  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhoto, setUserPhoto] = useState('')
  const [userUid, setUserUid] = useState('')

  const handleAuth = async (e) => {
    e.preventDefault()
    const googleProvider = new GoogleAuthProvider();

    const signIn = async (googleProvider) => {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    await signIn(googleProvider)
  }
  const handleUserStateChanged = (user) => {
    if (user) {
      setUser(user)
      setUserName(user.displayName)
      setUserEmail(user.email)
      setUserPhoto(user.photoURL)
      setUserUid(user.uid)
      setLogged(true)
      console.log(user.displayName);
      console.log(logged);
    } else {
      setLogged(false)
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, handleUserStateChanged);
    console.log(logged);
  }, [])

  return (
    <>
      {logged ? (
        <ChatContainer userName={userName} />
      ) : (
        <button className='btn' onClick={(e) => handleAuth(e)}>Iniciar sesión con Google</button>
      )}
    </>
  )
}

export default Chat