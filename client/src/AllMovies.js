import React from 'react';

import SearchResults from './SearchResults';

class AllMovies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
        };
    }
    componentDidMount() {
        const dataURI = 'http://localhost:3001/all';
        this.setState({ loading: true });
        fetch(dataURI)
            .then(res => res.json())
            .then(titles => titles.sort(sortHelper))
            .then(data =>
                this.setState({
                    data,
                    loading: false,
                })
            );
    }

    render() {
        if (this.state.data === []) return <h1 className="spin">Loading</h1>;
        return <SearchResults data={this.state.data} />;
    }
}

// Protocol to pass to .sort
const sortHelper = (a, b) => {
    return a.TitleNameSortable > b.TitleNameSortable
        ? 1
        : b.TitleNameSortable > a.TitleNameSortable ? -1 : 0;
};

export default AllMovies;
