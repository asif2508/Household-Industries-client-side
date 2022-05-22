import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{backgroundImage: "url(https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870)", backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',} }>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello and Welcome</h1>
      <p class="mb-5">Order and Buy your high quality household products.
        Now we manufracture the best household products. Our products includes hammer, drill machine, screwdriver,  shovel, electric saw, hacksaw etc. So What are you waiting for?
      </p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;