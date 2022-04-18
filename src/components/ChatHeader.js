import React from 'react'

const ChatHeader = (props) => {
  return (
    <nav>
        <div className="nav-container">
            <div className="user-image">
                <img src={props.userPhoto} alt="" />
            </div>
            <button className="pregunta">Pregunta</button>
            <button className="logout" onClick={props.logout}>Cerrar Sesión</button>
        </div>
    </nav>
  )
}

export default ChatHeader