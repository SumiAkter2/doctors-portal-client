import React from 'react';
import chairs from '../../assets/images/chair.png'
const Banar = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chairs} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your New Smiles Starts Here!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banar;