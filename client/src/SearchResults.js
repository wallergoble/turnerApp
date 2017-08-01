import React from 'react'

import { Link } from 'react-router-dom'

// Props should be an array of objects
const SearchResults = (props) => {
    return (
    <ul>
        { 
        props.data.map((details) => {
            return (
                <div className="search-results-container">
                    <Link 
                        to={{
                            pathname: `/title/${details.TitleId}`,
                            state: { details }
                        }}
                    > { details.TitleName } 
                    </Link>
                    <br/>
                </div>
            )
            
        })
        }
    </ul>
    )
}

export default SearchResults