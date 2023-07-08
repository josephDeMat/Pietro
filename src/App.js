import React,{useState}from 'react';
import './App.css';
import Header from './Components/topNav/Header';
import CreateProbablity from './Components/CreateProbability/CreateProbability';
import CreateProbabilityModal from './Components/CreateProbability/CreateProbablityModal';
import Probabilities from './Components/Probability List/ProbabilityList';
import Probability from './Components/Probability List/Probability';

function App() {


  const [modalView,setModalView] = useState(false);
  const [probabilities,setProbabilities] = useState([
    {name:'i make poop',value:20,id:2},
    {name:'i pee',value:80,id:1}
  ])

  const modalViewHandler = () =>{
      setModalView(prevView =>{
        return !prevView
      })
  }
  
  const deleteProbabilityHandler = (id) =>{
    setProbabilities(prevProbabilities => {
      return(prevProbabilities.filter(
        p =>(p.id!==id)
      ))
    })
  }


  return (
      <React.Fragment>
        <Header />
        {!modalView && <CreateProbablity modalViewHandler={modalViewHandler}/>}
        {modalView && <CreateProbabilityModal modalViewHandler={modalViewHandler}/>}
        <Probabilities probabilities={probabilities} onDeleteProbability={deleteProbabilityHandler}/>
      </React.Fragment>
  );
}

export default App;
