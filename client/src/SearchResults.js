import React from 'react';

import { Link } from 'react-router-dom';

// Props should be an array of objects
const SearchResults = props => {
    return (
        <div className="search-results-container">
            {props.data.map(details => {
                return (
                    <div className="search-results-item">
                        <Link
                            to={{
                                pathname: `/title/${details.TitleId}`,
                                state: { details },
                            }}
                        >
                            {details.TitleNameSortable}
                        </Link>
                        <br />
                    </div>
                );
            })}
        </div>
    );
};

export default SearchResults;
