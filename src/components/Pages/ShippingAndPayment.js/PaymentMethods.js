import React from 'react';
import paypal from '../../../assets/images/paypal.png'
import visa from '../../../assets/images/visa.png'
import masterCard from '../../../assets/images/master-card.png'
import mastero from '../../../assets/images/mastero.png'
import discover from '../../../assets/images/discover.png'
import ideal from '../../../assets/images/ideal.png'
import inpost from '../../../assets/images/inpost.png'
import dpd from '../../../assets/images/dpd.png'
import dhl from '../../../assets/images/dhl.png'
import fedx from '../../../assets/images/fedx.png'
const PaymentMethods = () => {
    return (
        <div>
            <div>
                {/* payment method container  */}
                <div className=''>
                    <div className='mb-2 text-[18px] '>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='grid grid-cols-3 gap-3 gap-y-7'>
                        <div className='border-gray-400 border-[1px] border-solid rounded-[99px] px-4 py-2 flex justify-center items-center'>
                            <img className='w-[70px] mx-auto object-cover' src={paypal} alt="" />
                        </div>
                        <div className='border-gray-400 border-[1px] border-solid rounded-[99px] px-4 py-2 justify-center items-center'>
                            <img className='w-[40px] mx-auto object-cover' src={visa} alt="" />
                        </div>
                        <div className='border-gray-400 border-[1px] border-solid rounded-[99px] px-4 py-2 justify-center items-center'>
                            <img className='w-[40px] mx-auto object-cover' src={masterCard} alt="" />
                        </div>
                        <div className='border-gray-400 border-[1px] border-solid rounded-[99px] px-4 py-2 justify-center items-center'>
                            <img className='w-[70px] mx-auto object-cover' src={mastero} alt="" />
                        </div>
                        <div className='border-gray-400 border-[1px] border-solid rounded-[99px] px-4 py-2 justify-center items-center'>
                            <img className='w-[70px] mx-auto object-cover' src={discover} alt="" />
                        </div>
                        <div className='border-gray-400 border-[1px] border-solid rounded-[99px] px-4 py-2 justify-center items-center'>
                            <img className='w-[60px] mx-auto object-cover' src={ideal} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PaymentMethods;