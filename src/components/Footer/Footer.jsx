import React from 'react'
import './Footer.scss';
import { logoF, reserved } from '../../assets/illustrations';

function Footer() {
    return (
        <div className='footer'>
            <div className='img'>
                    <img src={logoF} className='logoF' alt="" />
                    <span className='reserved'>© All right reserved 2020</span>
            </div>
        </div>
    )
}

export default Footer
