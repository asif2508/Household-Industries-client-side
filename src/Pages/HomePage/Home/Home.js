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

      <section className='mb-32 mx-12'>
        <div>
          <h1 className=' text-3xl font-bold mb-5'>Stay connected with us</h1>
        </div>
        <div className='p-5 bg-primary rounded-md'>

          <form>
            <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs mb-5" />
            <br />
            <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs mb-5" />
            <br />
            <textarea className="textarea textarea-bordered w-full max-w-xs mb-5" placeholder="Your Message"></textarea>
            <br />
            <input type="submit" value="Send" className="input input-bordered w-50 max-w-xs mb-5 bg-secondary text-white font bold" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;