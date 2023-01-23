import React,{useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import swal from 'sweetalert';

export default function LoginPage() {
    const navigate = useNavigate()

    useEffect(() => {
    if ((localStorage.getItem('LoginStatus') == 'Login')) {
      console.log('login')
      navigate('/DefaultLayout')
    }
    else{
        navigate('/')
    }
  }, [])
 
    const handleSubmit = (values) => {
        if (values.email == 'ranjana20@gmail.com' && values.password == "Ranjana@123") {
            localStorage.setItem('LoginStatus', 'Login')
            navigate('/DefaultLayout')
        }
        else {
            swal('Invalid User Login')
        }

    }

    var initVal = {
        email: "",
        password: ""
    }

    var ValidateSchema = yup.object({
        email: yup.string().required('Email is Required!'),
        password: yup.string().required('Password is Required!')
    })

    const handleChange = (e, setFieldValue) => {
        setFieldValue(e.target.name, e.target.value)

    }
    return (
        <div className='h-[100%] '>
            <div className='flex justify-center'>
                <div className='mt-10 grid lg:grid-cols-12 xs:grid-cols-12 md:grid-cols-12  bg-white sticky rounded-[5px]'>
                    <div className='lg:col-span-6  xs:none lg:block login-bg bg-center rounded-[5px]' >
                    </div>
                    <div className='lg:col-span-6 md:col-span-12  xs:col-span-12 sm:col-span-12'>
                        <div className='p-14'>
                            <div className='flex justify-center'>
                                <img src='https://suvidhacsp.com/img/logo_new.jpg' className='w-[200px] ' />
                            </div>
                            <div>
                                <div className=' '>
                                    <h2 className='text-[25px] text-center '>Welcome Back!</h2>
                                    <div className='flex justify-center '>
                                        <div className='border-b-2  mt-5 p-5 '>
                                            <Formik initialValues={initVal} validationSchema={ValidateSchema} onSubmit={handleSubmit}>
                                                {(props) => (
                                                    <Form>
                                                        <div>
                                                            <input name="email" onChange={(e) => handleChange(e, props.setFieldValue)} placeholder='Enter Your email ' className='rounded-[90px] min-w-[300px] border-2 border-gray-300 p-2 text-gray-300 ' />

                                                        </div>
                                                        <ErrorMessage className='text-start ' name="email">{msg => <div className='text-red-600'>{msg}</div>}</ErrorMessage>
                                                        <div>
                                                            <input name='password' onChange={(e) => handleChange(e, props.setFieldValue)} placeholder='Password' className='rounded-[90px] min-w-[300px] border-2 border-gray-300 p-2 text-gray-300  mt-2' />
                                                        </div>
                                                        <ErrorMessage className='text-start ' name="password">{msg => <div className='text-red-600'>{msg}</div>}</ErrorMessage>
                                                        <div>
                                                            <button className='rounded-[90px] bg-teal-500 text-white p-2 mt-2 min-w-[300px]' type="submit">Login</button>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </div>
                                    </div>
                                    <Link to='/'><h6 className='text-teal-500 mt-3  text-sm'>Forgot Password?</h6></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
