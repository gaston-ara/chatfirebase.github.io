import React from 'react'
import Message from './Message'

const MessagesContainer = (props) => {
  return (
    <div className="messages-container">
      {props.allMessages.length > 0? (props.allMessages.map(data => {
       return (<Message mensaje={data.message} time={data.time} name={data.username} username={props.userName}/>)
      })):(null)}
      </div>
  )
}

export default MessagesContainer