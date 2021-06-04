import React from "react"
import {Field, reduxForm} from "redux-form"


const renderField = (props) => {
    const {input, type, placeholder, id, description, meta: { touched, error, warning }} = props

    const classes = ['sign-in__field']
    if (touched && error) {
        classes.push('sign-in__field--error')
    }

    return (
        <div className={classes.join(' ')}>
            <input {...input} className="sign-in__input" type={type} placeholder={placeholder}/>
            <label className="sign-in__label visually-hidden" htmlFor={id}>{description}</label>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    )
}


const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
const minLength8 = minLength(8)


const SingInForm = (props) => {
    const {handleSubmit, pristine, submitting, error} = props

    return (
        <form onSubmit={handleSubmit} className="sign-in__form">
            {error && <div className="sign-in__message">
                <p>{error}</p>
            </div>}

            <div className="sign-in__fields">

                <Field
                    type="text"
                    placeholder="Email address"
                    name="user-email"
                    id="user-email"
                    component={renderField}
                    description={"Email address"}
                    validate={[required, email]}
                />


                <Field
                    type="password"
                    placeholder="Password"
                    name="user-password"
                    id="user-password"
                    component={renderField}
                    description={"Password"}
                    validate={[required, minLength8]}
                />
            </div>
            <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit" disabled={pristine || submitting}>Sign in</button>
            </div>
        </form>
    )
}


export default reduxForm({
    form: 'authorisingUser',
})(SingInForm)