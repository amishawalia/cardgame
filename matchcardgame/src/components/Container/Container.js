import { useDispatch, useSelector } from 'react-redux';
import Game from '../Game/Game';
import './container.css'

const Container = () => {
    const {turns} = useSelector(state => state);
    const dispatch = useDispatch();
    let reset = false
    const resetHandler = () => {
        reset = true
        localStorage.setItem('match','');
        dispatch({type:'reset'});
    }
    return <>
        <div className='container'>
            <div className='heading'>
                <h2>Magic Match</h2>
                <div className='subheadings'>
                    <p className='turns'>{turns} turns</p>
                    <button onClick={resetHandler}>New Game</button>
                </div>
            </div>
            <Game reset={reset}/>      
        </div>
    </>

}

export default Container;