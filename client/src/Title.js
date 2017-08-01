import React from 'react';

// Because Math.random is more typing
import random from 'lodash/random';

// Props should be a singular title object
const Title = props => {
    // Reassigning props to a variable doesn't feel right, but this improves readability by miles
    const data = props.location.state.details;

    // Actor section filterings
    const actors = data.Participants.filter(
        actor => actor.RoleType === 'Actor' && actor.IsOnScreen === true
    );
    const director = data.Participants.filter(
        person => person.RoleType === 'Director'
    );
    const others = data.Participants.filter(
        person => person.RoleType !== 'Actor' && person.RoleType !== 'Director'
    );
    // Handle header in case there are no awards
    const AWARDS_HEADER = data.Awards === [] ? '' : 'Awards';
    return (
        <div className="title-container">
            <h1>
                {data.TitleName} - <em>{data.ReleaseYear}</em>
            </h1>

            {/* Inline these as buttons to link to a search of all movies of that genre*/}
            <p>
                Genres: {data.Genres.join(', ')}
            </p>
            <p>
                Director: {director[0].Name}
            </p>

            {/* Choose a random story line, because there are sometimes duplicates */}
            <p className="text-align-left">
                {
                    data.Storylines[random(data.Storylines.length - 1)]
                        .Description
                }
            </p>
            {/* I wanted to filter by isKey here but I wasn't exactly sure what it means to be iskey */}
            <div className="actors">
                <h3> On Screen Actors </h3>
                <ul className="cast-list">
                    {actors.map(actor =>
                        <li>
                            {actor.Name}
                        </li>
                    )}
                </ul>
                <h3> Other Staff </h3>
                <ul className="cast-list">
                    {others.map(other =>
                        <li>
                            {other.Name} - {other.RoleType}
                        </li>
                    )}
                </ul>
            </div>
            <div>
                <h2>
                    {' '}{AWARDS_HEADER}{' '}
                </h2>
                <div className="awards-container">
                    {data.Awards.map(award => {
                        return (
                            <section className="awards-card card">
                                <p className="card-text">
                                    {award.Participants
                                        ? `Who?: ${award.Participants.join(
                                              ' ,'
                                          )}`
                                        : null}
                                </p>
                                <p className="card-text">
                                    When?: {award.AwardYear}
                                </p>
                                <p className="card-text">
                                    What?: {award.Award}
                                </p>
                                <p className="card-text">
                                    Where?: {award.AwardCompany}
                                </p>
                                <p className="card-text">
                                    Did They Win?:{' '}
                                    {award.AwardWon ? 'Yes' : 'No'}
                                </p>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Title;
