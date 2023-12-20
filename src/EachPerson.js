

const EachPerson = ({name,age,image})=>{


    return(
        <article className="each-person">
<img src={image} alt={name}  width="50px" height={"50px"} />
<div>
    <h5>{name}</h5>
    <p>{age} years</p>
</div>
        </article>
    )
}

export default EachPerson