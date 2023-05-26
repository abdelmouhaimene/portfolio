import React from 'react'
import './styles/rating.css'

import star from '../../assets/star.png'
import vstar from '../../assets/vstar.png'

const setStars = (rate) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        stars.push(<img className='star' key={i} src={star} alt="star" />);
      } else {
        stars.push(<img className='star' key={i} src={vstar} alt="vstar" />);
      }
    }
    return stars;
  };

const Rating = ({rate}) => {
    


    return (
        <div className='rating'>
            {
                setStars(rate)
            }
        </div>
    )
}

export default Rating