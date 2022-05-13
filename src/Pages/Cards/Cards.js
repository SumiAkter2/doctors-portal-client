import React from 'react';
import icon1 from '../../assets/icons/clock.svg';
import icon2 from '../../assets/icons/marker.svg';
import icon3 from '../../assets/icons/phone.svg';
import InfoCards from './InfoCards';


const Cards = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
           
           <InfoCards bgclass="bg-gradient-to-r from-cyan-500 to-blue-500" title="Opening hour" img={icon3}></InfoCards>
           <InfoCards bgclass="bg-primary" title="Visit our location" img={icon2}></InfoCards>
           <InfoCards bgclass="bg-gradient-to-r from-cyan-500 to-blue-500" title="Contact us now" img={icon1}></InfoCards>
            
        </div>
    );
};

export default Cards;