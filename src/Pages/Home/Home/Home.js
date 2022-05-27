import React from 'react';
import HomePay from '../../Dashboard/Payment/HomePay/HomePay';
import Reviews from '../../Reviews/Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Tools from '../Tools/Tools/Tools';


const Home = () => {
    return (
        <div className='px-2'>
            <Banner></Banner>
            <Tools></Tools>
            <HomePay></HomePay>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;