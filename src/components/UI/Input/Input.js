import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    const styles = [classes.InputElement];
    if (props.inValid && props.shouldValidate && props.touched) {
        styles.push(classes.Invalid)
    }
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className={styles.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}
                key={props.id}/>;
            break;
        case ('textarea'):
            inputElement = <input 
                className={styles.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}
                key={props.id}/>;
            break;
        default:
            inputElement = (<select className={styles.join(' ')}
            onChange={props.changed} key={props.id}>
                {
                    props.elementConfig.options.map(option => {
                        return (
                            <option value={option.value}>{option.displayValue}</option>
                        )
                    })
                }
            </select>)
            break;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.children}</label>
            {inputElement}
        </div>
        )
}

export default input;