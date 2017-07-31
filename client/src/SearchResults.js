import React from 'react'

// Props should be an array of objects
const SearchResults = (props) => {
    return (
    <ul>
        { props.data.map((details) => <li key={details.TitleId} > { details.TitleName } </li>) }
    </ul>
    )
}

export default SearchResults