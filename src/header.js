

const Header = ({users})=>{

return (
    <header>
      {users.length ? <>
       {users.length} Birthday today</> :
       <>no birthday today</>}
    </header>
)
}

export default Header