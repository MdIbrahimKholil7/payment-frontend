import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import Cart from '../Pages/ShippingAndPayment.js/Cart';
import PaymentMethods from '../Pages/ShippingAndPayment.js/PaymentMethods';
import ShippingInformation from '../Pages/ShippingAndPayment.js/ShippingInformation';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [amount, setAmount] = useState(0)
    const [user]=useAuthState(auth)
    const navigate=useNavigate()
    const handlePayment=async(amount)=>{
       

        if (!user){
            return navigate('/login')
        }
        // get key 
        const {data:{key}}=await axios.get(`https://powerful-headland-79331.herokuapp.com/api/key`)
    
        const {data}=await axios.post(`https://powerful-headland-79331.herokuapp.com/api/checkout`,{amount})
        console.log(data)
        console.log(window)
        
     
            var options = {
                key, 
                amount: data.amount, 
                currency: "INR",
                name: "Acme Corp",
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                order_id: data.id, 
                handler:async function (response){
                   const {data}=await axios.post("http://localhost:5000/api/payment-verification",{response})
                   console.log(data)
                },
                prefill: {
                    name: "Gaurav Kumar",
                    email: "gaurav.kumar@example.com",
                    contact: "9999999999"
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            var razor = new window.Razorpay(options);
            razor.on('payment.failed', function (response){
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
            });
        
                razor.open();
            
    }
    return (
        <div className='max-w-[1586px] mx-auto px-4'>
            <div >
                <div className='flex justify-between flex-col sm:flex-row  items-center pt-9'>
                    <h1 className='font-[500] text-xl mb-7 sm:mb-0  '>Shipping and Payment</h1>
                    <div className='flex items-center'>
                        <span
                            className='border-[1px] border-[#0bec59df] borde-solid rounded-full p-2'
                        >
                            <AiOutlineShoppingCart />
                        </span>
                        <div className='h-[2px] mx-9 bg-slate-400 w-[90px]'></div>

                        <span
                            className='bg-[#0bec59df] rounded-full text-white p-2'
                        >
                            <MdOutlineLocalShipping />
                        </span>
                    </div>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:gap-6 xl:gap-9 gap-7 mt-7'>
                    <ShippingInformation />
                    <PaymentMethods />
                    <Cart 
                    setAmount={setAmount}
                    />
                </div>

                <div className='flex justify-between flex-col sm:flex-row items-center mt-16 mb-7'>
                    <div className='flex items-center'>
                        <BiArrowBack
                        className='text-2xl mr-9'
                        />
                        <p>Back</p>
                    </div>
                    <div className='text-left flex gap-3 mt-7 sm:mt-0'>
                        <button className='border-[1px] border-[#0bec59df] border-solid rounded-[99px] sm:py-2 py-3 text-[14px] sm:px-6 uppercase px-4'>Continue Shopping</button>
                        <button onClick={()=>handlePayment(amount)} className='bg-[#0bec59df] sm:py-2 py-3 sm:px-6 px-4 rounded-[99px] text-white text-[14px] uppercase' >Proceed to Payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;