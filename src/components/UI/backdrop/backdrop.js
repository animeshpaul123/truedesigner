import React from 'react'

const backdrop = (props) => {
    let styles = {
        background: props.color,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }
    return (
        <div style={styles}></div>
    )
}

export default backdrop;