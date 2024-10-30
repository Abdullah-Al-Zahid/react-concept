import { useEffect, useState } from "react"

export default function users(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=>setUsers(data))
    },[])
    return(
        <div>
        </div>
    )
}