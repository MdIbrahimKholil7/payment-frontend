import React from 'react';

const ShippingInformation = () => {
    return (
        <div className=''>
            <div>
                <div>
                    <div className='text-left flex gap-3'>
                        <button className='bg-[#0bec59df] py-2 px-6 rounded-[99px] text-white'>Log In</button>
                        <button className='border-[1px] border-[#0bec59df] border-solid rounded-[99px] py-2 px-6'>Sign Up</button>
                    </div>
                    <div className='mt-9'>
                        <h1 className='mb-5'>Shipping Information</h1>
                        <form >
                            <div className='flex mb-5    gap-2 items-center ' >
                                <input type="text" placeholder="Email" class="input input-bordered w-full rounded-[99px] max-w-xs" />
                                <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs rounded-[99px]" />
                            </div>
                            <div className='flex mb-5    gap-2 items-center '>
                                <input type="text" placeholder="First Name" class="input input-bordered w-full rounded-[99px] max-w-xs" />
                                <input type="text" placeholder="City" class="input input-bordered w-full max-w-xs rounded-[99px]" />
                            </div>
                            <div className='flex mb-5  gap-2 items-center '>
                                <input type="text" placeholder="Last Name" class="input input-bordered w-full rounded-[99px] max-w-xs" />
                                <input type="text" placeholder="Postal Code/ZIP" class="input input-bordered w-full max-w-xs rounded-[99px]" />
                            </div>
                            <div className='flex mb-5    gap-2 items-center '>
                                <input type="text" placeholder="Phone Number" class="input input-bordered w-full rounded-[99px] max-w-xs" />
                                <input type="text" placeholder="Poland" class="input input-bordered w-full max-w-xs rounded-[99px]" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingInformation;