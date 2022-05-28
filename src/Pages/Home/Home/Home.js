import React from 'react';
import HomePay from '../../Dashboard/Payment/HomePay/HomePay';
import BestComment from '../../Reviews/BestComment/BestComment';
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
            <BestComment></BestComment>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;