import React from 'react'

import random from 'lodash/random'
// Props should be a singular title object

const Title = (props) => {
    // Actor section filterings
    const actors = props.data.Participants.filter(actor => actor.RoleType === "Actor" && actor.IsOnScreen === true)
    const director = props.data.Participants.filter(actor => actor.RoleType === "Director")
    const others = props.data.Participants.filter(actor => actor.RoleType !== "Actor" && actor.RoleType !== "Director")

    return (
        <div className="title-container"> 
            <h1> { props.data.TitleName } </h1>

            {/* Inline these as buttons to search by possibly*/}
            <p> Genres: { props.data.Genres.join(', ') } </p>
            
            {/* Choose a random story line, because there are sometimes duplicates */}
            <p> { props.data.Storylines[random(props.data.Storylines.length - 1)].Description } </p> 

            <div className="actors">
                <p> Director: {director.Name} </p>
                <h3> On Screen Actors </h3>
                <ul>
                    {
                    actors.map(actor => <li> {actor.Name} </li>)
                    }
                </ul>
                <h3> Other Staff </h3>
                <ul>
                    {
                        others.map(other => <li> {other.Name} - {other.RoleType} </li>)
                    }
                </ul>
                
            </div>
            <div className="awards">
                <h5> Awards </h5>
                {
                props.data.Awards.map(award => {
                    return (
                        <ul className="awards-list">
                            <li>{award.Participants ? `Who?: ${award.Participants.join(' ,')}` : null}</li>
                            <li>When?: {award.AwardYear}</li>
                            <li>What?: {award.Award}</li>
                            <li>Where?: {award.AwardCompany}</li>
                            <li>Did They Win?: {award.AwardWon ? 'Yes' : 'No'}</li>
                        </ul>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Title