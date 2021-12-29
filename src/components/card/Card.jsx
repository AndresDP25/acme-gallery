import React from 'react'
import { imgViajes, imgProfile } from '../../assets/illustrations';
import './Card.scss';



function Card() {
    return (
            <div className='card'>
                <div className='viaje'>
                    <img src={imgViajes} className="imgViaje" alt="imgViaje" />
                </div>
                <div className="card-body">
                    <img src={imgProfile} className="imgProfile" alt="imgProfile" />
                    <div>
                        <h5 className="card-title">Sam Jerremy</h5>
                        <p className="card-text">#dayAtTheBeach</p>
                    </div>
                </div>
            </div>
    )
}

export default Card
