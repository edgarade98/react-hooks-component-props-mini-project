import React from 'react';
import logo from '../assets/logo';

export default function About({ imageSrc = logo , about })
{
    return (
        <aside>
            <img src={imageSrc} alt='blog logo' />
            <p>
                {about}
            </p>
        </aside>
    )
}