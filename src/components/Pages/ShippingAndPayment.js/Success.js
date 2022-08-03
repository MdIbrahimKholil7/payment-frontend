import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../_firebase.init';

const Success = () => {

    const [paymentId, setPaymentId] = useState('')
    const [loading, setLoading] = useState(false)
    const [user] = useAuthState(auth)
    useEffect(() => {
        (async () => {
            setLoading(true)
            const { data } = await axios.get(`http://localhost:5000/api/get-transaction?email=${user?.email}`)

            console.log(data)
            setPaymentId(data.transactionId)

            setLoading(false)
        })()
    }, [])
    return (
        <div className='flex justify-center items-center h-screen w-full'>

            {
                loading && <h1 className='text-center text-xl'>Loading...</h1>
            } 

            {
                paymentId && <div>

                    <h1 className='text-center mb-7 text-2xl text-green-600 font-bold'>Payment Success</h1>
                    <p className='text-center'>TransactionID:{paymentId}</p>
                </div>
            }
        </div>
    );
};

export default Success;