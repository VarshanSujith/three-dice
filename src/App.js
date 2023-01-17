// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react'
import './App.css';
import diceOne from './dice-images/diceOne.png'
import diceTwo from './dice-images/diceTwo.png'
import diceThree from './dice-images/diceThree.png'
import diceFour from './dice-images/diceFour.png'
import diceFive from './dice-images/diceFive.png'
import diceSix from './dice-images/diceSix.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import Dices from './components/Dices';

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }


 var diceImages = [
  diceOne,
  diceTwo,
  diceThree,
  diceFour,
  diceFive,
  diceSix
 ]
 const [image,setimage]=useState(diceImages[0])
 const [image2,setimage2]=useState(diceImages[2])
 const [image3,setimage3]=useState(diceImages[4])
 const [count,setCount] = useState(1)
 const [grey,setGrey]= useState(0)
 const [lock,setLock]=useState(0)
const [lval,setlval]=useState('lock')
const [winValue, setWinvalue]=useState('YOU Lose')
// var img1=""
// var img2=""
// var img3=""
const [r1,setR1]=useState()
// const [r2,setR2]=useState()
// const [r3,setR3]=useState()

// var r1;
const rollDice=()=>{
if(count<2){  
if(lock==0){
  var randomNum=Math.floor(Math.random()*6);
setR1(randomNum)
  setimage(diceImages[randomNum]);
  console.log(diceImages[randomNum]);
console.log(randomNum);
  
}
else{
  setCount(count+1)
  var randomNum2=Math.floor(Math.random()*6);
  var randomNum3=Math.floor(Math.random()*6);
  console.log(image,randomNum);
  console.log(image2,randomNum2);
  console.log(image3,randomNum3);  
  console.log(r1,randomNum2,randomNum3);

  if((r1==randomNum2)&&(r1==randomNum3)){
    console.log("You Win")
    toast("You Win")
    setModalIsOpen(true)
    setWinvalue("You Win")
    
  }
  else{
    toast("You Lose")
    console.log("You Lose" )
    setModalIsOpen(true)
    setWinvalue("You Lose")
  }
  setimage2(diceImages[randomNum2]);
  setimage3(diceImages[randomNum3]);
}


}

}

const handleLock=()=>{
  if(lock==0){ 
    setLock(1)
    setlval('unlock')
  }
  else {
    setLock(0)
    setlval('lock')
  }
}
  return (
    <div className="App">
      <div className="DiceRoll">
      <div className='d-one' > 
      <button onClick={handleLock} className="lock">{lval}</button>
          <img className='square ' src={image} alt=""></img>
      </div>
      <div>
      <img className='square' src={image2} alt=""></img> 
       </div>
      <div> 
        <img className='square' src={image3} alt=""></img>
      </div>
    </div>
    <button type='button' className='btn' onClick={rollDice}> Roll Dice</button>
    <ToastContainer />
    {modalIsOpen && <Modal>
                <button onClick={()=>{setModalIsOpen(false)}}>x</button>
                <Dices winValue={winValue} />
        </Modal>}
  </div>
  );
}

export default App;
