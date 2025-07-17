import {useForm} from 'react-hook-form' 
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate()
    const {handleSubmit , register} = useForm() 
    const Submitted = (data) => {
        console.log('submit', data)
    }
    const homeButton = () => {
        navigate('/')
    }
    return (
        <>
            <form onSubmit={handleSubmit(Submitted)}>
                <div>
                    <label>First Name :</label>
                    <input type="text" {...register('firstName')} />
                </div>
                <div>
                    <label>Last Name :</label>
                    <input type="text" {...register('lastName')} />
                </div>
                <div>
                    <label>Email :</label>
                    <input type="text" {...register('email')} />
                </div>
                <div>
                    <label>Phone :</label>
                    <input type="text" {...register('phone')} />
                </div>
                <div>
                    <label>Username :</label>
                    <input type="text" {...register('username')} />
                </div>
                <div>
                    <label>Password :</label>
                    <input type="text" {...register('password')} />
                </div>
                <div>
                    <label>Confirm Password :</label>
                    <input type="text" {...register('confirm')} />
                </div>
                <button type='submit'>Register</button>
                <button onClick={homeButton}>Back</button>
            </form>
        </>
    )
}

export default Register