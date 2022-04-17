import React from 'react'

const Message = (props) => {
    return (
        <>
        {console.log(props.name, props.username)}
            <div className={props.name !== props.username? "message" : "my-message"}><span className='username'>{props.name}</span><p>{props.mensaje}</p><span className='time-message'>{props.time}</span></div>
        </>
    )
}

export default Message