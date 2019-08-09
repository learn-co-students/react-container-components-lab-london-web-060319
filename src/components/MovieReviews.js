import React from 'react';

const Review = ({
    headline,
    byline, 
    multimedia,
    link,
    summary_short
}) => {
    return (
        <div key={headline} className="review" >
            <header>
                <a className="review-link" href={link.url} >{headline}</a>
                <br/>
                <span className="author">{byline}</span>
            </header>
            <img src={multimedia.src} alt="movie"></img>
            <blockquote>{summary_short}</blockquote>
        </div>
    );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
    reviews: []
};

export default MovieReviews;