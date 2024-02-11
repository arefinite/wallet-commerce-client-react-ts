import axios, { AxiosError } from 'axios'
import { FormEvent } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

interface IFormData {
  email: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const formData: IFormData = {
      email: data.get('email')?.toString().toLocaleLowerCase() || '',
      password: data.get('password')?.toString() || '',
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/user/login`,
        formData
      )
      toast.success('Login successful')
        navigate('/')
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data?.message || 'An error occurred')
      }
    }
  }
  return (
    <main className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow p-8 w-5/6 md:w-96'>
      <div>
        <h2 className='text-dark text-center'>Login</h2>
        <form className='flex flex-col gap-4 mt-4' onSubmit={handleSubmit}>
          <div>
            <input
              type='email'
              className='border px-2 py-1 w-full'
              placeholder='Email'
              name='email'
            />
          </div>
          <div>
            <input
              type='password'
              className='border px-2 py-1 w-full'
              placeholder='Password'
              name='password'
            />
          </div>
          <div>
            <input
              type='submit'
              value='Login'
              className='bg-dark rounded text-white py-1 px-3 cursor-pointer'
            />
          </div>
        </form>
        <div className=' text-sm mt-4'>
          Do not have an account?{' '}
          <Link to='/register' className='underline'>
            Register
          </Link>{' '}
          here.
        </div>
      </div>
    </main>
  )
}
export default Login
