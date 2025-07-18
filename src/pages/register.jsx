import { yupResolver } from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form' 
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Register = ({ onRegister }) => {
    const [typedPass, setPass] = useState('')

    const navigate = useNavigate()
    const checkPhone = (item) => {
        if (!item) return false

        if (item.slice(0,2) === '09' && item.length===11 && /^\d+$/.test(item.slice(2,11))) {
            return true
        } else if (item.slice(0,1) === '+' && item.length===13 && /^\d+$/.test(item.slice(1,13))) {
            return true
        } else {
            return false
        }
    }
    const checkPass = (item) => {
        if (!item) return false
        return item === typedPass ? true : false
    }
    const schema = yup.object({
        firstName: yup.string().required().min(3).max(255),
        lastName: yup.string().required().min(3).max(255),
        email: yup.string().required().email(),
        phone: yup.string().required().test('check-phone', 'Write phone number in correct form',checkPhone),
        username: yup.string().required().min(5).max(20),
        password: yup.string().required().min(8).matches(/[a-z]/,'Password should contain a letter in lower-case').matches(/[A-Z]/,'Password should contain a letter in upper-case').matches(/[@$&!%?*#{};()+-]/,'Password should contain a special character').matches(/[0-9]/,'Password should contain a number'),
        confirm: yup.string().test('checkPass', 'Inserted password is not the same!',checkPass)
    })
    const {handleSubmit , register, formState} = useForm({
        resolver: yupResolver(schema)
    })
    
    const Submitted = (data) => {
        alert(`Dear/Madam ${data.firstName}, Registeration Completed Successfully`)
        onRegister(data)
        navigate('/')
    }
    const homeButton = () => {
        navigate('/')
    }
    return (
        <section className='reg-sec'>
            <h1>Registeration Form</h1>
            <hr />
            <form className='form' onSubmit={handleSubmit(Submitted)}>
                <div className='form-item'>
                    <label>First Name:</label>
                    <input type="text" placeholder='Enter your first name' {...register('firstName')} />
                </div>
                <div>{formState.errors.firstName && formState.errors.firstName.message}</div>

                <div className='form-item'>
                    <label>Last Name:</label>
                    <input type="text" placeholder='Enter your last name' {...register('lastName')} />
                </div>
                <div>{formState.errors.lastName && formState.errors.lastName.message}</div>
                <div className='form-item'>
                    <label>Email:</label>
                    <input type="text" placeholder='Enter your E-mail address' {...register('email')} />
                </div>
                <div>{formState.errors.email && formState.errors.email.message}</div>
                <div className='form-item'>
                    <label>Phone:</label>
                    <input type="text" placeholder='09123456789 or +989123456789' {...register('phone')} />
                </div>
                <div>{formState.errors.phone && formState.errors.phone.message}</div>
                <div className='form-item'>
                    <label>Username:</label>
                    <input type="text" placeholder='At least 5 characters' {...register('username')} />
                </div>
                <div>{formState.errors.username && formState.errors.username.message}</div>
                <div className='form-item'>
                    <label>Password:</label>
                    <input type="password"  placeholder='Contain lower-upper-special char' {...register('password', {onChange: (e) => setPass(e.target.value)})} />
                </div>
                <div>{formState.errors.password && formState.errors.password.message}</div>
                <div className='form-item'>
                    <label>Confirm Password:</label>
                    <input type="password" placeholder='Re-Enter your password' {...register('confirm')} />
                </div>
                <div>{formState.errors.confirm && formState.errors.confirm.message}</div>
                <hr />
                <div className='button-wrapper'>
                    <button type='submit'>Register</button>
                    <button onClick={homeButton}>Back</button>
                </div>
            </form>
        </section>
    )
}

export default Register