import {useState, useEffect} from 'react'
import { cardImages } from "./data"
import Card from "../Card/Card"
import './Game.css'
const Game = ({reset}) => {

    const [cards,setCards] = useState([]);
    const shuffleCards = () => {
        const numberOfCards = [...cardImages , ...cardImages ];
        const shuffledCards = numberOfCards
          .sort(() => Math.random() - 0.5 )
          .map(card => ({...card , id:Math.random()}))
        setCards(shuffledCards);
    }

    const clickHandler = (ids) =>{
        // console.log(ids);
        // let arr = [];
        // ids.map(id => {
        //     console.log('id',id);
        //    arr =  cards.map((card,index) => {
        //        console.log('index',index);
        //         if (index === id) {
        //             card.match = true;
        //         }
        //         return card
        //     })
        // })
        // console.log('cards',arr);
        // setCards(arr);
    }

    useEffect(() => {
        shuffleCards();
    }, [reset])

    return <>
        <div className='grid-container'>
            {cards.map((card, index)=> {
                return <Card src={card.src} unique={index} match={card.match} clickHandler={clickHandler}/>
            })}
        </div>
    </>
}
export default Game;