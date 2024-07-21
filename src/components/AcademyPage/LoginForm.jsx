import axios from 'axios';
import React, { useState } from 'react'
import { Container, Placeholder, Row } from 'react-bootstrap'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({ state }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate();
    const handdleSendData = (e) => {
        e.preventDefault()
        if (state === 'registeration') {
            if (!name || !email || !password) {
                toast.error('برجائ ملاء جميع الحقول')
            } else {
                const formData = new FormData();
                formData.append('email', email);
                formData.append('password', password);
                formData.append('name', name);

                axios.post(`https://cocacademy-com.preview-domain.com/api/auth/register`, formData)
                    .then(response => {
                        //   setData(response.data);
                        //   setLoading(false);
                        navigate('/login')

                    })
                    .catch(error => {
                        toast.error(error.response.data.error);
                    });


            }
        } else {
            if(!email|| !password){
                toast.error('برجائ ملاء جميع الحقول')
            }else{
            axios.post(`https://cocacademy-com.preview-domain.com/api/auth/login?email=${email}&password=${password}`)
            .then(response => {
                localStorage.setItem('id', response.data.user.id);
                navigate('/')

            })
            .catch(error => {
                toast.error(error.response.data.error);
            });

            }

        }
        // if (!email || !password) {
        //     toast.error('برجائ ملاء جميع الحقول')
        // } else {
        //     axios.post(`https://cocacademy-com.preview-domain.com/api/auth/login?email=${email}&password=${password}`)
        //     .then(response => {
        //         //   setData(response.data);
        //         //   setLoading(false);
        //         localStorage.setItem('token', response.data.access_token);
        //         navigate('/')

        //     })
        //     .catch(error => {
        //         toast.error(error.response.data.error);
        //     });
        //     // if (state === 'registeration') {
        //     //     const formData = new FormData();
        //     //     formData.append('email', email);
        //     //     formData.append('password', password);

        //     //     axios.post(`https://cocacademy-com.preview-domain.com/api/auth/register`, formData)
        //     //         .then(response => {
        //     //             //   setData(response.data);
        //     //             //   setLoading(false);
        //     //             navigate('/login')

        //     //         })
        //     //         .catch(error => {
        //     //             toast.error(error.response.data.error);
        //     //         });

        //     // } else {

        //     // }

        // }
    }
    return (
        <div className='py-4'>
            <Toaster />

            <Container>
                <Row>
                    <form onSubmit={handdleSendData}>
                        {state === 'registeration' &&
                            <div className='my-4'>
                                <label className='text-right w-100 mb-3'> الاسم</label>
                                <input className='form-control text-right'
                                    Placeholder={'برجاء ادخال الاسم '}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'

                                />
                            </div>

                        }
                        <div>
                            <label className='text-right w-100 mb-3'>البريد الالكتروني</label>
                            <input className='form-control text-right'
                                Placeholder={'برجاء ادخال البريد الالكتروني'}
                                onChange={(e) => setEmail(e.target.value)}
                                type='email'

                            />
                        </div>
                        <div className='my-4'>
                            <label className='text-right w-100 mb-3'>كلمة المرور</label>
                            <input className='form-control text-right'
                                Placeholder={'برجاء ادخال كلمة المرور'}
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                            />
                        </div>
                        <div className='text-center'>
                            <button className='w-50 py-3' type='submit'>
                                {state === 'registeration' ?
                                    <p className='mb-0'>                                تسجيل الدخول
                                    </p>
                                    :
                                    <p className='mb-0'>تسجيل</p>

                                }


                            </button>
                        </div>
                        {state === 'registeration' ?
                            <div className='d-flex py-3 justify-content-center'>
                                <Link to='/login'>نسجيل </Link>
                                <p className='mb-0'> لديك حساب ؟</p>

                            </div>

                            :

                            <div className='d-flex py-3 justify-content-center'>
                                <Link to='/registeration'>نسجيل دخول</Link>
                                <p className='mb-0'>ليس لديك حساب ؟</p>

                            </div>
                        }

                    </form>
                </Row>
            </Container>
        </div>
    )
}

export default LoginForm