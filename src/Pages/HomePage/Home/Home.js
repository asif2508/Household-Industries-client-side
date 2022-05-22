import React from 'react';
import Banner from '../Banner/Banner';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <section className='mb-32 mt-32'>
          <Tools></Tools>
          </section>
        </div>
    );
};

export default Home;