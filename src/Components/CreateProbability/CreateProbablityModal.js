import './CreateProbabilityModal.css'

const CreateProbabilityModal = (props) => {
    const cancButtonClick = () =>{
        props.modalViewHandler()
    }
    const createButtonClick = () =>{
        props.addProbability()
        props.modalViewHandler()
    }

    return ( <form className='modal'>
        <label htmlFor="name">name</label>
        <input type="text" />
        <label htmlFor="percentage">percentage</label>
        <input type="number" />
        <button onClick={createButtonClick}>create</button>
        <button onClick={cancButtonClick}>cancel</button>
    </form> );
}
 
export default CreateProbabilityModal;