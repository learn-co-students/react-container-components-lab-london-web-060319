import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'PCGGQkehbUAqqIVEb5NItl9CrJbDd5vU';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
//a searchable interface allowing the user to enter a search term and then receive
// a list of reviews that match the search term(s).

export default class SearchableMovieReviewsContainer extends React.Component{
    
    state={
        searchTerm:'',
        reviews:[]
    }

    handleSearchInput=(event)=>{
this.setState({searchTerm:event.target.value})
    }

    handleSubmit=(event)=>{
        event.preventDefault()

        fetch(BASE_URL.concat(this.state.searchTerm))
        .then(resp=>resp.json())
        .then(res=>this.setState({reviews:res.results}))
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
              <label>Search Movie Reviews</label>
              <input
                id="search-input"
                type="text"
                onChange={this.handleSearchInput}
              />
              <button type="submit">Submit</button>
            </form>
              <h2>Movie Review By Search:</h2>}
            <MovieReviews reviews={this.state.reviews} />
          </div>
        )
    }
    }