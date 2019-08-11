import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'PCGGQkehbUAqqIVEb5NItl9CrJbDd5vU';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

//will fetch a list of the most recent reviews and display them.

export default class LatestMovieReviewsContainer extends React.Component{

    constructor() {
        super();
    
        this.state = {
          reviews: []
        };
      }
    
    componentDidMount(){
        fetch(URL)
        .then(resp=>resp.json())
        .then(res=>this.setState({reviews: res.results}))
    }


    render(){
    return(
        <div className="latest-movie-reviews">
            <h1>Reviews</h1>
            <MovieReviews reviews={this.state.reviews}/>
        </div>
    )
}
}



//this.state.movieReviews.map(review=>{ <h1>review.display_title</h1>})
