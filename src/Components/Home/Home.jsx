/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen ,faDollarSign } from '@fortawesome/free-solid-svg-icons'


const Home = () => {

    // use State
    const [courses, setcourse] = useState([])

    // useEffect
    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setcourse(data))
    },[])

    // handleclick
    const handleSelet = (course) =>{
        console.log(course)
    }


    return (
        <div className='container mt-[48px]'>

            {/* Card container */}
            <div className="card_container grid grid-cols-3 ">
                {
                    courses.map(course =>(
                        <div className="card  p-[16px] w-[312px] h-[400px] rounded-lg gap-2 flex flex-col items-center justify-center text-left bg-white">
                            <img className='mt-[12px] w-[250px] h-[140px] rounded-lg' src={course.image} alt="" />

                            <div className='flex flex-col gap-2'>
                                <h5 className='font-semibold text-lg '>{course.course_name}</h5>

                                <h5 className='text-[#1C1B1B99] font-normal text-sm w-[250px] h-[40px]'>{course.course_details}</h5>
                            </div>
                            
                            <div className='flex gap-[16px] mt-[20px]'>
                                {/* price */}
                                <div className='flex gap-[10px]'>
                                    <FontAwesomeIcon icon={faDollarSign}  className='w-5 h-5'/>
                                    <h4 className='text-base font-medium text-[#1C1B1B99]'>Price: {course.price}</h4>
                                </div >
                                
                                <div className='flex gap-[10px]'>
                                    <FontAwesomeIcon icon={faBookOpen} className='w-5 h-5'/>
                                    <h4 className='text-base font-medium text-[#1C1B1B99] '>Credit: {course.credit}hr</h4>
                                </div>
                                
                            </div>

                            <button onClick={()=>handleSelet(course)}  className='bg-[#2F80ED] w-[250px] h-[40px] mt-[20px] rounded-lg text-lg font-semibold text-white'>Select</button>
                        </div>
                    ))
                }
            </div>

            {/* Cart container */}
            <div className="cart_container">
                <div>
                    <p>Credit Hour Remaining <span>7</span> hr</p>
                </div>
                <hr />

                <div>
                    <h1>Course Name</h1>
                    <div>

                    </div>
                </div>
                <hr />
                
                <div>
                    <p>Total Credit Hour : <span>13</span></p>
                </div>
                <hr />

                <div>
                    <p>Total Price : <span>0</span> USD</p>
                </div>
            </div>
        </div>
    );
};

export default Home;