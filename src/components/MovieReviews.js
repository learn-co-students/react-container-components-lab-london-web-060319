// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    return(
    
        <ul className="review-list">
            {reviews.map(rev => <li className="review"><a href={rev.link.url}>{rev.link.suggested_link_text}</a></li>)}
        </ul>
  
    )
}

export default MovieReviews