import React from 'react';
import tshirt1 from '../../../assets/tshirt-images/tshirt-1.png'
import tshirt2 from '../../../assets/tshirt-images/tshirt-2.png'
import { MdOutlineLocalShipping } from 'react-icons/md';
const Cart = ({setAmount}) => {

    setAmount(159.99)
    return (
        <div>
            <h1 className='mb-7 text-xl'>Your Cart</h1>
            <div>
                <div className='flex justify-between items-center mb-9 pr-5'>
                    <div className='flex items-center'>
                        <div className=''>
                            <img className='sm:w-[100px] w-[70px] rounded-full h-[90px]  object-cover' src={tshirt1} alt="" />
                        </div>
                        <div>
                            <h1 className='sm:text-[17px] text-[14px]'>T-Shirt </h1>
                            <h1 className='sm:text-[17px] text-[14px]'>Summer Vibes</h1>
                            <p className='text-[#a5a0a0] text-[14px]'>#261311</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[18px]'>$<span>89.99</span></p>
                    </div>
                </div>
                <div className='flex justify-between items-center pr-5'>
                    <div className='flex items-center'>
                        <div className=''>
                            <img className='sm:w-[90px] w-[70px] rounded-full h-[90px]  object-cover' src={tshirt2} alt="" />
                        </div>
                        <div>
                            <h1 className='sm:text-[17px] text-[14px]'>T-Shirt </h1>
                            <h1 className='sm:text-[17px] text-[14px]'>Summer Vibes</h1>
                            <p className='text-[#a5a0a0] text-[14px]'>#261311</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[18px]'>$<span>69.99</span></p>
                    </div>
                </div>

                <div className='mt-16 flex justify-center sm:justify-start'>
                    <button className='flex px-5 sm:text-[18px] text-[15px] py-3 rounded-[99px] bg-[#dad3d3] justify-between items-center'><span className='mr-9'>Total Cost</span> $<span>159.99</span></button>
                </div>

                <div>
                    <div className='flex gap-5 items-center mt-9'>
                        <span className='text-4xl'>
                            <MdOutlineLocalShipping/>
                        </span>
                        <p className='sm:text-xl text-[15px] pr-40'>You are $30,02 away from free shipping</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;