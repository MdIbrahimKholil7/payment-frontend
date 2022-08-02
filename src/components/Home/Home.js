import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import Cart from '../Pages/ShippingAndPayment.js/Cart';
import PaymentMethods from '../Pages/ShippingAndPayment.js/PaymentMethods';
import ShippingInformation from '../Pages/ShippingAndPayment.js/ShippingInformation';
const Home = () => {
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

                <div className='grid grid-cols-3 gap-6 mt-7'>
                    <ShippingInformation />
                    <PaymentMethods />
                    <Cart />
                </div>

                <div className='flex justify-between items-center mt-16'>
                    <div className='flex items-center'>
                        <BiArrowBack
                        className='text-2xl mr-9'
                        />
                        <p>Back</p>
                    </div>
                    <div className='text-left flex gap-3 '>
                        <button className='border-[1px] border-[#0bec59df] border-solid rounded-[99px] py-2 px-6 uppercase'>Continue Shopping</button>
                        <button className='bg-[#0bec59df] py-2 px-6 rounded-[99px] text-white uppercase'>Proceed to Payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;