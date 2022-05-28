import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{
      backgroundImage: "url(https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870)", backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello and Welcome</h1>
          <p className="mb-5">Order and Buy your high quality household products.
            Now we manufracture the best household products. Our products includes hammer, drill machine, screwdriver,  shovel, electric saw, hacksaw etc. So What are you waiting for?
          </p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;