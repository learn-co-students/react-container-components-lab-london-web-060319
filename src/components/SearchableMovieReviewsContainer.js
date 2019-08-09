import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5s6aJeSK7rea8cSVDj7RLwNbPn76bxAM';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: "",
        reviews: []
    }
    fetchData = (query) => {
        return fetch(URL + query)
        .then(resp => resp.json())
    }

    searchHandler = (event) => {
        event.preventDefault()
        const query = 
        this.fetchData(this.state.searchTerm)
        .then(revs => {
            this.setState({
                reviews: revs.results
            })
        })
    }

    searchState = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.searchHandler} >
                    <input id="query" type="search" placeholder="search review" ></input>
                    <br></br>
                    <button type="submit">Search</button>
                </form>
                <div className="latest-movie-reviews">
                <MovieReviews 
                    reviews={this.state.reviews}
                />
                </div>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer