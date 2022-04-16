import React from 'react'

const ChatInputs = (props) => {
  return (
    <>
    <form className='form' onSubmit={(e) => props.handleSubmit(e)}>
        <input className='enter-message' value={props.message} type="text" placeholder="Type a message..." onChange={(e) => props.setMessage(e.target.value)}/>
        <button className='btn' type="submit">Send</button>
    </form>
    </>
  )
}

export default ChatInputs