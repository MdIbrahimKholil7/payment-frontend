import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../_firebase.init'
import Social from '../Social/Social';


const SignUp = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
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

        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(email,password)
        e.target.reset()
    }
    
    return (
        <div>
            <div className='flex justify-center items-center w-full h-screen mt-9'>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit}>
                            
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
                                <button class="btn btn-primary">Login</button>
                            </div>
                            <Social/>
                        </form>
                      
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignUp;