import { yupResolver } from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form' 
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Register = () => {
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
        defaultValues: {
            firstName: 'name'
        },
        resolver: yupResolver(schema)
    })
    
    const Submitted = (data) => {
        alert('submit', data)
    }
    const homeButton = () => {
        navigate('/')
    }
    return (
        <>
            <form onSubmit={handleSubmit(Submitted)}>
                <div>
                    <label>First Name:</label>
                    <input type="text" {...register('firstName')} />
                    <div>{formState.errors.firstName && formState.errors.firstName.message}</div>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" {...register('lastName')} />
                    <div>{formState.errors.lastName && formState.errors.lastName.message}</div>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" {...register('email')} />
                    <div>{formState.errors.email && formState.errors.email.message}</div>
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" {...register('phone')} />
                    <div>{formState.errors.phone && formState.errors.phone.message}</div>
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" {...register('username')} />
                    <div>{formState.errors.username && formState.errors.username.message}</div>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" {...register('password', {onChange: (e) => setPass(e.target.value)})} />
                    <div>{formState.errors.password && formState.errors.password.message}</div>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" {...register('confirm')} />
                    <div>{formState.errors.confirm && formState.errors.confirm.message}</div>
                </div>
                <button type='submit'>Register</button>
                <button onClick={homeButton}>Back</button>
            </form>
        </>
    )
}

export default Register