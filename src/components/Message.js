import React from 'react'

const Message = (props) => {
    return (
        <>
            <div className={props.name !== props.username && props.name !== 'Bot'? "message" : "my-message"}><span className='username'>{props.name}</span><p>{props.mensaje}</p><span className='time-message'>{props.time}</span></div>
        </>
    )
}

export default Message