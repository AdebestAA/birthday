
import { useState } from "react"
import { data } from "./data"
import Header from "./header"
import EachPerson from "./EachPerson"

const Container = ()=>{
    const [users,setUsers] = useState(data)
    let check = []

return(
    <main className="main">
        <Header users={users}/>
{users ?<section>
        {users.map(user =>{
        return <EachPerson key={user.id}   {...user}/>
        })}
      </section> : <></>}
      <button onClick={()=>{
        if (users.length) {
            setUsers([])
            return
        }
  
    setUsers(data)
      }}>{users.length ? <>
      clear All</> : <>Add all </>}</button>
    </main>
)
}

export default Container

