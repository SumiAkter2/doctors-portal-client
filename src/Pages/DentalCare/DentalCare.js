import React from 'react';
import img from '../../assets/images/treatment.png'
import  './DentalCare.css';

const DentalCare = () => {
    return (
        <div className='px-12 pt-28'>
            <div class="card lg:card-side bg-base-100 shadow-xl ">
  <figure><img className='treatment-img' src={img} alt="Album"/></figure>
  <div class="card-body ">
    <h1 class="card-title pt-12">Exceptional Dental Care, On Your Terms!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur perspiciatis reiciendis accusantium delectus cum sapiente quibusdam repellendus molestias ab eligendi veniam ipsam quod voluptate accusamus, dolor nam iste modi!</p>
    <div class="card-actions justify-start  ">
      <button class="btn bg-gradient-to-r from-cyan-500 to-blue-500">Listen</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DentalCare;