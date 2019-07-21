import React from 'react';
import './contact.css';

const input = (props) => {
    let styles = ['input-field']
    if (!props.valid && props.touched) {
        styles.push('invalid')
    }
    else if(!props.nowValid && props.touched) {
        styles.push('valid')
    }
    let inputElement = null;
    switch (props.elementType) {
        case ('input'): 
            inputElement = <input {...props.elementConfig} onChange={props.changed} value={props.value} className={styles.join(' ')}/>
            break;
        case ('text-area'): 
            inputElement = <textarea onChange={props.changed} {...props.elementConfig} value={props.value} className={styles.join(' ')}/>
            break;
        default:
            inputElement = <input {...props.elementConfig} className={styles.join(' ')}/>
    }
    return (
        <div className="contact-input">
            {inputElement}
        </div>
    )
}

export default input;