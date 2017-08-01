import React from 'react';

import SearchResults from './SearchResults';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [],
            loading: false,
        };
    }
    getData(event) {
        // Flip state to make loading text appear
        this.setState({ loading: true });

        // Prevents reload
        event.preventDefault();

        // Grab the search term, encode it to be fetch-friendly, and attach it to the URI
        const dataUri = `http://localhost:3001/search/${encodeURIComponent(
            this.searchQuery.value
        )}`;

        // Fetch with new URI and put it on state
        fetch(dataUri)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data,
                    loading: false,
                });
            })
            .catch(err => console.error(err));
    }
    renderSearchResults() {
        if (this.state.data !== []) {
            return <SearchResults data={this.state.data} />;
        }
        return null;
    }
    render() {
        const LOADING_TEXT = this.state.loading ? 'Loading...' : null;

        return (
            <div className="search-box-container">
                <form
                    className="search-form"
                    onSubmit={event => this.getData(event)}
                >
                    <div className="form-group">
                        <h2> Search for a title! </h2>
                        <input
                            className="form-control search-bar"
                            type="text"
                            placeholder="All Quiet On The Western Front"
                            ref={input => {
                                this.searchQuery = input;
                            }}
                            required
                        />
                        <button type="submit" className="btn btn-primary">
                            Search!
                        </button>
                    </div>
                </form>
                <h3 className="spin">
                    {LOADING_TEXT}
                </h3>
                {this.renderSearchResults()}
            </div>
        );
    }
}

export default Search;
