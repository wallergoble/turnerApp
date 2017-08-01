import React from 'react'

class Actors extends React.Component {
    
    constructor() {
        super()
        console.log('actors props', this.props)
    }
    // Actor section filterings
    // const actors = props.data.Participants.filter(actor => actor.RoleType === "Actor" && actor.IsOnScreen === true)
    // const director = props.data.Participants.filter(person => person.RoleType === "Director")
    // const others = props.data.Participants.filter(person => person.RoleType !== "Actor" && person.RoleType !== "Director")
    render() {
        return (
                
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
        )
    }
}

export default Actors