import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../_firebase.init'
import Social from '../Social/Social';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, upError] = useUpdateProfile(auth);
    // const [user] = useAuthState(auth)
    console.log(user)
    if (loading) {
        <div className='w-full h-screen flex justify-center items-center'>
            <h1>Loading...</h1>
        </div>
    }
    const handleSubmit = async e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name)
        await updateProfile({ displayName: name })
        createUserWithEmailAndPassword(email, password)
        e.target.reset()
    }
    
    return (
        <div>
            <div className='flex justify-center items-center w-full h-screen mt-9'>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h1 className='text-center mb-9 text-xl text-primary'>Please Register</h1>
                        <form onSubmit={handleSubmit}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" required placeholder="Name" name='name' class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" required placeholder="Email" name='email' class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' required class="input input-bordered" />
                                <label class="label">

                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Sign Up</button>
                            </div>
                            <Social/>
                        </form>
                        <ToastContainer/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignUp;