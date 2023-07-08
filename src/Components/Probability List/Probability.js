const Probability = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id)
    }

    return ( <div>
        <p>{props.name}  {props.value}</p>
        <button onClick={deleteHandler}>delete</button>
    </div> );
}
 
export default Probability;