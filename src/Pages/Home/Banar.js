import React from 'react';
import chairs from '../../assets/images/chair.png'
import Cards from '../Cards/Cards';
const Banar = () => {
    return (
     <div>
          <div class="hero min-h-screen px-12">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chairs} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your New Smiles Starts Here!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn uppercase text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
    </div>
  </div>
</div>
<Cards></Cards>
     </div>
    );
};

export default Banar;