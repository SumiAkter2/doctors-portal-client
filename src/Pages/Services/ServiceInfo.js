import React from 'react';

const ServiceInfo = ({img,title}) => {
    return (
        <div>
            <div class="card  bg-base-100 shadow-xl px-12">
  <figure class="px-6 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
        </div>
    );
};

export default ServiceInfo;