import React, { Component } from 'react';
import classes from './ContactForm.module.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinners/Spinner';
import Input from '../../components/UI/Input/Input';

class ContactForm extends Component {
    state = {
        loading: false,
        orderInfo: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'your name'
                    },
                    value: '',
                    validation: {
                        required: true,
                    },
                    valid: false,
                    touched: false,
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'street'
                    },
                    value: 'j',
                    validation: {
                        required: true,
                    },
                    valid: false,
                    touched: false,
                },
                phone: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'number',
                        placeholder: 'phone'
                    },
                    value: null,
                    validation: {
                        required: true,
                        maxLength: 10,
                    },
                    valid: false,
                    touched: false,
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'your email'
                    },
                    value: '',
                    validation: {
                        required: true,
                    },
                    valid: false,
                    touched: false,
                },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'},
                    ]
                },
                value: 'fastest',
                validation: {
                    required: false,
                },
                valid: true,
            }
        },
        formValid: false,
    }
    checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length >= rules.maxLength && isValid;
        }
        return isValid;
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {}
        for (let key in this.state.orderInfo) {
            order[key] = this.state.orderInfo[key].value
        }
        const formData ={
            ingredients: this.props.ingredients,
            price: this.props.price,
            order: order
        }
        axios.post('/orders.json', formData)
            .then(response => {
                this.setState({loading: false})
                this.props.history.replace('/orders')
            })
            .catch(error => {
                this.setState({loading: false})
            })
    }
    onChangedHandler = (event, id) => {
        let orderInfo = {
            ...this.state.orderInfo
        }
        let details = {
            ...orderInfo[id]
        }
        details.value = event.target.value;
        details.valid = this.checkValidity(details.value, details.validation);
        details.touched = true;
        orderInfo[id] = details;

        let isFormValid = true;
        for (let key in orderInfo) {
            isFormValid = orderInfo[key].valid && isFormValid;
        }

        this.setState({orderInfo: orderInfo, formValid: isFormValid})
    }
    render () {
        const inputArr = [];
        for (let key in this.state.orderInfo) {
            inputArr.push({
                id: key,
                config: this.state.orderInfo[key]
            })
        }
        let form = inputArr.map(input => {
            return (
                <Input elementType={input.config.elementType} 
                    elementConfig={input.config.elementConfig} 
                    value={input.config.value}
                    key={input.id}
                    id={input.id}
                    inValid={!input.config.valid}
                    touched={input.config.touched}
                    shouldValidate={input.config.validation.required}
                    changed={(e) => this.onChangedHandler(e, input.id)}/>
            )
        })
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactForm}>
                <h1>please,fill your details here</h1>
                <form onSubmit={this.orderHandler}>
                    {form}
                    <button disabled={!this.state.formValid}>order</button>
                </form>
            </div>
        )
    }
}
export default ContactForm;