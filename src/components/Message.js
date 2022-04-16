import React from 'react'

const Message = (props) => {
    return (
        <>
            <div className="message"><span className='username'>{props.username}</span>{props.mensaje}<span className='time-message'>{props.time}</span></div>
        </>
    )
}

export default Message