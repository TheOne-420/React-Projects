import { useEffect, useState } from "react"
import "./style.css"
import Single from "./Single"
function Game()
{

    const cardImg = [
        
        { "src" : "/imgs/ring-1.png",matched: false},
        {"src" : "/imgs/helmet-1.png",matched: false},
        { "src" : "/imgs/scroll-1.png",matched: false},
        { "src" : "/imgs/shield-1.png",matched: false},
        { "src" : "imgs/sword-1.png",matched: false},
        { "src" : "imgs/potion-1.png",matched: false}
       ]
       const [cards, setCards] = useState([])
       const [turns, setTurns] = useState(0)
       const [choiceOne, setChoiceOne] = useState(null)
       const [choiceTwo, setChoiceTwo] = useState(null)
       const [disabled, setDisabled] = useState(false)
       const handleChoice = (card) =>
       {
         choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
       }
       useEffect(()=>
       {
        
        if(choiceOne && choiceTwo)
        {
          setDisabled(true)
          if(choiceOne.src === choiceTwo.src)
          {
           setCards(prevCards => {
            return prevCards.map(card => 
              {
                if(card.src === choiceOne.src)
                {
                  return{...card, matched: true}
                }
                else
                {
                  return card;
                }
              })
           })

            resetChoice();
          }
          else
          {
            setTimeout(() =>  resetChoice(),700);
           
          }
        }
       }
       ,[choiceOne,choiceTwo])
       function resetChoice()
       {

          setChoiceOne(null)
          setChoiceTwo(null)
          setTurns(prevTurns => prevTurns+1)
          setDisabled(false)
       }
       function  shuffleCards() 
       {
            const shuffledCards = [...cardImg, ...cardImg]
            .sort(() => Math.random() - .5)
            .map((card) =>({...card , id: Math.random()}) )
            setCards(shuffledCards)
            setTurns(0) 
           
       }
    
  return(
    
    
    <>
      <div className="App">
          <h1>Magic Cards</h1>
         
          <button onClick={shuffleCards}>New Game</button>

          
      <div className="card-grid">
          
              {cards.map(card => (
                <Single  
                 key={card.id}
                 card={card}
                 handleChoice={handleChoice}
                 flipped={card === choiceOne || card === choiceTwo || card.matched }
                 disabled={disabled}
                />
                
              ))}
          </div>
          </div>
          <p>{turns}</p>
    </>
  )
}
export default Game;