import React from 'react'

const Toast = ({ msg, handleShow, bgColor }) => {
    return (
        <div className={`toast show position-fixed text-light ${bgColor}`}
            style={{ top: '5px', right: '5px', minWidth: '200px', zIndex: 50 }}>
            <div className={`toast-header text-light ${bgColor}`}>
                <strong className="mr-auto text-light">{msg.title}</strong>
                <button
                style={{  marginLeft:'250px' ,border:'0px'}}
                    data-dismiss="toast"
                    onClick={handleShow}>
                    &times;
                </button>
            </div>
            <div className="toast-body">
                {msg.body}
            </div>
        </div>
    )
}

export default Toast