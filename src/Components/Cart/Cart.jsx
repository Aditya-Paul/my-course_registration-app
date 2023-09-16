/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedCourse, totalCredit,totalPrice, Remaining}) => {
    return (
        <div className="cart_container bg-white w-[312px] h-fit p-[24px] text-start rounded-xl">
                <div className='mb-[15px]'>
                    <p className='text-lg font-bold text-[#2F80ED]'>Credit Hour Remaining <span>{Remaining}</span> hr</p>
                </div>
                <hr />

                <div className='mt-[15px]  mb-[15px] text-start'>
                            <h1 className='text-xl font-bold mb-[20px]'>Course Name</h1>
                {
                    selectedCourse.map((item,count)=>(
                            <div key={item.course_name}>
                                <p className='text-sm font-normal text-[#1C1B1B99]'><span>{count+1}</span>. {item.course_name}</p>
                            </div>
                        
                    ))
                }
                </div>
                <hr />
                
                <div className='mt-[15px]  mb-[15px]'>
                    <p className='text-base font-normal'>Total Credit Hour : <span>{totalCredit}</span></p>
                </div>
                <hr />

                <div className='mt-[15px]  mb-[20px]'>
                    <p className='text-base font-semibold'>Total Price : <span>{totalPrice}</span> USD</p>
                </div>
            </div>
    );
};

export default Cart;