import Probability from './Probability'


const Probabilities = (props) => {

    const deleteProbabilityHandler =(id) =>{
        console.log('clicked',id)
        props.onDeleteProbability(id)
    }

    return ( 
    <div>
        {props.probabilities.map(prob =>{
            return (<Probability name={prob.name} value={prob.value} id={prob.id} onDelete={deleteProbabilityHandler}/>)
        })}
    </div> );
}
 
export default Probabilities;