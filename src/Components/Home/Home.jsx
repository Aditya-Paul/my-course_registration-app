/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen ,faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Swal from 'sweetalert2';


const Home = () => {

    // use State
    const [courses, setcourse] = useState([])
    const [selectedCourse, setselectedCourse] = useState([])
    const [totalCredit, settotalCredit] = useState(0)
    const [totalPrice, settotalPrice] = useState(0)
    const [Remaining, setRemaining] = useState(0)

    // useEffect
    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setcourse(data))
    },[])

    // handleclick
    const handleSelet = (course) =>{
        const isExist = selectedCourse.find((Element) => Element.course_name == course.course_name)

        let count_credit = course.credit
        let Course_price = course.price
        

        if(isExist){
            return Swal.fire({
                text: 'You already select the course ',
                icon: 'success', // You can change the icon
              });
        }
        else{
            selectedCourse.forEach((item)=>{
                count_credit = count_credit + item.credit
                Course_price = Course_price + item.price
            })
            const remaining = 20 - count_credit

            if(count_credit>20){
                Swal.fire({
                    text: 'You can not purcase more then 20 credit couse',
                    icon: 'success', // You can change the icon
                  }); 
            }
            // else if(remaining<0){
            //     Swal.fire({
            //         text: 'You can not purcase any cousr because of you are out of credit',
            //         icon: 'success', // You can change the icon
            //       });
            // }
            else{
                setRemaining(remaining)
                settotalPrice(Course_price)
                settotalCredit(count_credit)
                setselectedCourse([...selectedCourse,course])
            }
        }
        console.log(typeof(course.credit))
    }


    return (
        <div className='container mt-[48px] flex gap-4 mx-auto'>

            {/* Card container */}
            <div className="card_container grid grid-cols-3  gap-3">
                {
                    courses.map(course =>(
                        <div className="card mb-[24px] p-[10px] w-[312px] h-[400px] rounded-lg gap-2 flex flex-col items-center justify-center text-left bg-white">
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
            <div>
                <Cart selectedCourse={selectedCourse} totalCredit={totalCredit} totalPrice={totalPrice} Remaining = {Remaining}></Cart>
            </div>
        </div>
    );
};

export default Home;