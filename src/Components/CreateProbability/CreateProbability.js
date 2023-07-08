import "./CreateProbability.css";


const CreateProbablity = (props) => {
    
    const createProbabilityClick = () =>{
        props.modalViewHandler() 
    }

  return (
    <div className="createProbability">
      <p>current probabilities</p>
      <button onClick={createProbabilityClick}>create probability</button>
    </div>
  );
};

export default CreateProbablity;
