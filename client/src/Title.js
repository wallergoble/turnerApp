import React from 'react'

// Because Math.random is more typing
import random from 'lodash/random'

// Props should be a singular title object
const Title = (props) => {

    // Reassigning props to a variable doesn't feel right, but this improves readability by miles
    const data = props.location.state.details

    // Actor section filterings
    const actors = data.Participants
        .filter(actor => actor.RoleType === "Actor" && actor.IsOnScreen === true)
    const director = data.Participants
        .filter(person => person.RoleType === "Director")
    const others = data.Participants
        .filter(person => person.RoleType !== "Actor" && person.RoleType !== "Director")

    return (
        <div className="title-container"> 
            <h1> { data.TitleName } - <em>{data.ReleaseYear}</em> </h1>

            {/* Inline these as buttons to link to a search of all movies of that genre*/}
            <p> Genres: { data.Genres.join(', ') } </p>
            
            {/* Choose a random story line, because there are sometimes duplicates */}
            <p> { data.Storylines[random(data.Storylines.length - 1)].Description } </p> 

            <div className="actors">
                <p> Director: { director[0].Name } </p>
                <h3> On Screen Actors </h3>
                <ul>
                    {
                    actors.map(actor => <li key={actor.ParticipantId}> {actor.Name} </li>)
                    }
                </ul>
                <h3> Other Staff </h3>
                <ul>
                    {
                    others.map(other => <li key={other.ParticipantId}> {other.Name} - {other.RoleType} </li>)
                    }
                </ul>
                
            </div>
            <div className="awards">
                <h5> Awards </h5>
                {
                data.Awards.map(award => {
                    return (
                        <section className="awards-list">
                            <p>{award.Participants ? `Who?: ${award.Participants.join(' ,')}` : null}</p>
                            <p>When?: {award.AwardYear}</p>
                            <p>What?: {award.Award}</p>
                            <p>Where?: {award.AwardCompany}</p>
                            <p>Did They Win?: {award.AwardWon ? 'Yes' : 'No'}</p>
                        </section>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Title