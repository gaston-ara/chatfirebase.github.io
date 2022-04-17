import React from 'react'
import Message from './Message'

const MessagesContainer = (props) => {
 const utcToLocalTime = (utc) => {
  return new Date(utc).getHours() + ':' + String(new Date(utc).getMinutes()).padStart(2, '0');
 }
  return (
    <div className="messages-container">
      {props.allMessages.length > 0? (props.allMessages.map(data => {
       return (<Message mensaje={data.message} time={utcToLocalTime(data.time)} name={data.username} username={props.userName}/>)
      })):(null)}
      </div>
  )
}

export default MessagesContainer