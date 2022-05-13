import React from 'react';
import ServiceInfo from './ServiceInfo';
import img1 from '../../assets/images/cavity.png'
import img2 from '../../assets/images/fluoride.png'
import img3 from '../../assets/images/whitening.png'
import DentalCare from '../DentalCare/DentalCare';


const Services = () => {
    return (
        <div>
           <div className='text-center pt-12'> 
           <p className='text-accent text-bold'>Our Services</p>
           <h4>Services We Provide</h4>
           </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-12 '>
            <ServiceInfo title='Cavity  Filling' img={img1}></ServiceInfo>
            <ServiceInfo title='Fluoride Treatment' img={img2}></ServiceInfo>
            <ServiceInfo title='Teeth Whitening' img={img3}></ServiceInfo>
        </div>
        <DentalCare></DentalCare>
        </div>
    );
};

export default Services;