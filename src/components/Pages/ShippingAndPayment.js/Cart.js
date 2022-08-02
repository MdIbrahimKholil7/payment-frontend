import React from 'react';
import tshirt1 from '../../../assets/tshirt-images/tshirt-1.png'
import tshirt2 from '../../../assets/tshirt-images/tshirt-2.png'
import { MdOutlineLocalShipping } from 'react-icons/md';
const Cart = () => {
    return (
        <div>
            <h1 className='mb-7 text-xl'>Your Cart</h1>
            <div>
                <div className='flex justify-between items-center mb-9 pr-5'>
                    <div className='flex items-center'>
                        <div className=''>
                            <img className='w-[100px] rounded-full h-[90px]  object-cover' src={tshirt1} alt="" />
                        </div>
                        <div>
                            <h1 className='text-[17px]'>T-Shirt </h1>
                            <h1 className='text-[17px]'>Summer Vibes</h1>
                            <p className='text-[#a5a0a0]'>#261311</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[18px]'>$<span>89.99</span></p>
                    </div>
                </div>
                <div className='flex justify-between items-center pr-5'>
                    <div className='flex items-center'>
                        <div className=''>
                            <img className='w-[90px] rounded-full h-[90px]  object-cover' src={tshirt2} alt="" />
                        </div>
                        <div>
                            <h1 className='text-[17px]'>T-Shirt </h1>
                            <h1 className='text-[17px]'>Summer Vibes</h1>
                            <p className='text-[#a5a0a0]'>#261311</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[18px]'>$<span>69.99</span></p>
                    </div>
                </div>

                <div className='mt-16'>
                    <button className='flex px-5 text-[18px] py-3 rounded-[99px] bg-[#dad3d3] justify-between items-center'><span className='mr-9'>Total Cost</span> $<span>159.99</span></button>
                </div>

                <div>
                    <div className='flex gap-5 items-center mt-9'>
                        <span className='text-4xl'>
                            <MdOutlineLocalShipping/>
                        </span>
                        <p className='text-xl pr-40'>You are $30,02 away from free shipping</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;