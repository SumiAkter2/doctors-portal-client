import React from 'react';


const InfoCards = ({ img,title ,bgclass}) => {
    return (
        <div >
            <div className={`card lg:card-side  shadow-xl  py-2 ${bgclass} text-white`}>
                <figure className='pl-5'><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCards;