
import { useState } from "react"
export default function Team(){
    const [team, setTeam] = useState(11)

    const newPlayer = () =>{
        const newTeam = team + 1
       setTeam(newTeam) 
    }
    const sellPlayer = () => {
        setTeam(team-1)
    }

    const teamStyle = {
        border: '2px solid red',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return(
        <div style={teamStyle}> 
            <h2>players: {team}</h2>
            <button onClick={newPlayer}>new player</button>
            <button onClick={sellPlayer}>sell him</button>
        </div>
    )
}