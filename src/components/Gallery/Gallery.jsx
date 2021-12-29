import React from 'react'
import Card from '../card/Card';
import './Gallery.scss';

function Gallery({items}) {
    return (
        <div className='gallery container  '>
            <div className='cards'>
                {items.map(item => 
                <div key={item.id}>
                    <Card item={item} />
                </div>
                )}
            </div>
            <div className='loadContainer'>
                <button className='btn load'>Load More</button>
            </div>
        </div>
    )
}

export default Gallery
