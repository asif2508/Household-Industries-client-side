import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <section className='mb-32 mt-32'>
          <Tools></Tools>
          </section>
          <section className='mb-32 mx-12'>
          <Summary></Summary>
          </section>
          <section className='mb-32 mx-12'>
          <Reviews></Reviews>
          </section>
        </div>
    );
};

export default Home;