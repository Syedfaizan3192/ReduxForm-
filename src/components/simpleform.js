import React from "react";
import { Field, reduxForm } from 'redux-form';
import '../components/App.css'
import about from '../components/images/about.png'

const validate = Values => {
    const errors = {}
    if (!Values.firstname) {
        errors.firstname = 'Required'
    } else if (Values.firstname.length > 15) {
        errors.firstname = 'only 15 words are allowed'
    }
    if (!Values.lastname) {
        errors.lastname = "Required";
    } else if (Values.lastname.length > 15) {
        errors.lastname = "only 15 words are allowed"
    }
    if (!Values.email) {
        errors.email = 'Email is not valid'
    } else if (Values.email.length > 25) {
        errors.email = 'only 15 words are allowed'
    }
    if (!Values.age) {
        errors.age = 'Required'
    } else if (Values.age.length > 3) {
        errors.age = 'Check Age'
    }
    if (!Values.Qualification) {
        errors.Qualification = "Required"
    } else if (Values.Qualification.length > 25) {
        errors.Qualification = "Please input valid Qualification"
    }
    if (!Values.Message) {
        errors.Message = "Req"
    } else if (Values.Message.length > 100) {
        errors.Message = "Max 100 words are allowed"
    }

    return errors
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="ui form">
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            <div className="error">
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    </div>
)

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div className="section ui grid">
            <div className="eight wide column">
                <img className="image_side" src={about} />
            </div>

            <div className="eight wide column">
                <form onSubmit={handleSubmit}>
                    <Field className='error' name="firstname" type="text" component={renderField} label="Firstname" />
                    <Field className='error' name="lastname" type="text" component={renderField} label="Lastname" />
                    <Field className='error' name="email" type="email" component={renderField} label="Email" />
                    <Field className='error' name="age" type="number" component={renderField} label="Age" />
                    <Field className='error' name="Qualification" type="text" component={renderField} label="Qualification" />
                    <Field className='error' name="Message" type="text" component={renderField} label="Message" />

                    <div className="ui btn">
                        <button type="submit" disabled={submitting} className='ui secondary button'>Submit</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset} className='ui button'>Clear Values</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default reduxForm({
    form: 'syncValidation',
    validate,

    // a unique identifier for this form
})(SimpleForm);