import React from 'react'

class SearchBar extends React.Component {
    constructor() {
        super()

        this.getData = this.getData.bind(this)
    }
    getData(event) {
        event.preventDefault()
        // Grab the search term, encode it to be fetch-friendly, and attach it to the URI
        const dataUri = `http://localhost:3001/search/${encodeURIComponent(this.searchQuery.value)}`
        const options = {
            mode: 'no-cors'
        }

        fetch(dataUri)
            .then( res => res.json())
            .then( data => console.log(data))
            .catch( err => console.error(err))
    }
    render() {
        return (
            <form 
                className="search-bar"
                onSubmit={(event) => this.getData(event)}
            >
                <h2> Search for a title! </h2>
                <input 
                    type="text" 
                    placeholder="All Quiet On The Western Front"
                    ref={ (input) => {this.searchQuery = input}} 
                    required
                />
                <button 
                    type="submit"
                    className="search-button"
                >
                    Search!
                </button>
            </form>
        )
    }
}

export default SearchBar