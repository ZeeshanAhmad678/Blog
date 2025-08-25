import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Button, Logo, Input} from './index'
import {useForm} from 'react-hook-form'
import authService from '../appwrite/auth'
import {useDispatch} from 'react-redux' 
import {login} from '../store/authSlice'

function Signup() {
    const dispatch = useDispatch()  
    const navigate = useNavigate()
    const [error, setError] = useState('')  
    const {register, handleSubmit, formState:{isSubmitting}} = useForm()
    
    const create = async (data) => {
        setError('')
        try {
            const userData = await authService.createAccount(data)
            if(userData){
                navigate('/login')
            }
            
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 `}>
            <div className='mb-2 flex justify-center'>
               <span className='inline-block w-full max-w-[100px]'>
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create account</h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Already have an account?
                    <Link to="/login" 
                    className='font-medium text-primary transition-all hover:underline duration-200'>
                    Login 
                </Link>
            </p>
            {error && <p className='mt-8 text-center text-red-500'>{error}</p>  }
            <form onSubmit={handleSubmit(create)}>
                <div className='space-y-4'>
                    <Input
                        type="text"
                        label="Name"
                        placeholder="Enter your name"   
                        {...register('name', {
                            required: true,
                        })}
                    />
                    <Input
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                        {...register('email', {
                            required: true,
                            
                        })}
                    />
                    <Input
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        {...register('password', {
                            required: true
                        })}
                    />
                    <Button type="submit" bgColor={"bg-[#38a3a5]"} className='w-full cursor-pointer'>   
                       {isSubmitting ? "Creating Account" : "Create Account"}     
                    </Button>        
                </div>

            </form>
        </div>
    </div>        
  )
}

export default Signup