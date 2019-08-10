import React, { Component } from 'react';
import './Contact.css';
import Input from './contact/contact';
import Address from '../UI/address/address';
import SectionHeader from '../UI/sectionHeading/sectionHeading';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import Loader from '../Loader/Loader';

class Contact extends Component {
    state = {
        loading: false,
        status: null,
        location: {
            address: 'Choclate Factory Road, BTM, Bangalore',
            phone: '+918248742693',
            email: 'animesh.paulofficial@gmail.com',
        },
        isFormValid: false,
        contactInfo: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: null,
                validation: {
                    required: true,
                    minLength: 4,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: null,
                validation: {
                    required: true,
                    minLength: 5,
                },
                valid: false,
                touched: false,
            },
            message: {
                elementType: 'text-area',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Message'
                },
                value: null,
                validation: {
                    required: true,
                    minLength: 5,
                },
                valid: false,
                touched: false,
            }
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.setState({loading: true, status: null})
        const contactInfo = {
            ...this.state.contactInfo
        }
        let formData = {}
        for (let key in contactInfo) {
            formData[key] = contactInfo[key].value;
        }
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        }
        console.log(formData)
        axios.post('https://email-api-paul.herokuapp.com/mail/api', JSON.stringify(formData), axiosConfig)
        .then(res => {
            if (res.status == 200) {
                this.setState({status: +res.status})
            }
        })
        .catch(err => {
            if (err.message) {
                this.setState({status: 404, loading: false})
            }
        })
    }

    onChangedHandler = (e, id) => {
        let contactInfo = {
            ...this.state.contactInfo
        };
        const typedInput = {
            ...contactInfo[id]
        }
        typedInput.value = e.target.value;
        typedInput.valid = this.checkValidity(typedInput.value, typedInput.validation)
        typedInput.touched = true;
        contactInfo[id] = typedInput;

        let isFormValid = true;
        for (let key in contactInfo) {
            isFormValid = contactInfo[key].valid && isFormValid;
        }
        
        this.setState({contactInfo: contactInfo, isFormValid: isFormValid});
    }
    checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        return isValid;
    }


    render () {
        const inputArr = [];
        for (let key in this.state.contactInfo) {
            inputArr.push({
                id: key,
                config: this.state.contactInfo[key],
            })
        }
        const form = inputArr.map(input => {
            return (
                <Input elementType={input.config.elementType}
                    changed={(e) => this.onChangedHandler(e, input.id)}
                    elementConfig={input.config.elementConfig}
                    valid={input.config.valid}
                    touched={input.config.touched}
                    nowValid={!input.config.valid}/>
            )
        })
        
        let styles = {
            color: this.state.status == 200 ? '#21b759' : '#481616',
        }


        let loader =  null;
        if (this.state.loading) {
            loader = <Loader />
        }
        if (this.state.status == 200) {
            loader = <p className="error" style={styles}>Message Sent</p>
        }
        if (this.state.status == 404) {
            loader = <p className="error" style={styles}>Something went wrong! please try again</p>
        }
        return (
            <div className="contact">
                <div className="heading-wrapper">
                    <Fade><SectionHeader>Contact Me</SectionHeader></Fade>
                </div>
                <div className="form-wrapper">
                    <Fade left>
                        <div className="address">
                            <h3>Address</h3>
                            <Address address={this.state.location.address}
                                phone={this.state.location.phone}
                                email={this.state.location.email}/>
                        </div>
                    </Fade>
                    <div className="input-wrapper">
                       <form onSubmit={this.onSubmitHandler}>
                        {form}
                        <button disabled={!this.state.isFormValid}>{loader}submit</button>
                       </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;