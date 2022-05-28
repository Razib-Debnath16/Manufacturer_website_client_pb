import React from 'react';
import doctor from '../../../Assets/Images/cmnt/doctor.png';
import bg from '../../../Assets/Images/cmnt/appointment.png';
const BestComment = () => {
    return (
        <div className='mt-6'>
            <h2 className='text-center text-primary text-3xl '>Best Comment</h2>
            <section className='flex justify-center items-center my-24'
                style={{ background: `url(${bg})` }}>
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-100px]' src={doctor} alt="" />
                </div>
                <div className='flex-1'>
                    <h3 className='text-primary text-xl'>Doctor's Comment</h3>

                    <p className='text-white'>I am John Sina.I am a Cardiologist. For My lab purpose, i need to build some high configurational  pc.I am searching for a trusted supplier.My Friend suggested me their server.I ordered many computer parts from their site.All the products i received was authentic.I am really very happy for their service.Very much Recommended. </p>

                </div>
            </section>
        </div>
    );
};

export default BestComment;