import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { deflateRawSync } from 'zlib';

const NYT_API_KEY = '5s6aJeSK7rea8cSVDj7RLwNbPn76bxAM';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
// https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=5s6aJeSK7rea8cSVDj7RLwNbPn76bxAM?query=<search-term>

class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    fetchData = () => {
        return fetch(URL)
        .then(resp => resp.json())
    }

    componentDidMount() {
        this.fetchData()
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            })
        })
    }
    render() {
        return(
            <div className={"latest-movie-reviews"}>
            <MovieReviews 
                reviews={this.state.reviews}
            />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer