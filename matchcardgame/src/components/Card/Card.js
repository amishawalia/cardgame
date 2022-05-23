import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Card.css'

const Card = ({src,match,unique}) => {
    const [rotate,setRotate] = useState(false)
    const [toggle,setToggle] = useState(false);
    const [open, setOpen] = useState(false);
    const imageRef = useRef();
    const {openedCards} = useSelector(state => state);
    const dispatch = useDispatch(); 
 
    function rotatingDone() {
        setToggle(!toggle);
        setRotate(false);
        setOpen(true);
        checkMatch();
    }

    const cardClickHandler = () => {
        if (!open && openedCards.length < 2) {
            setRotate(true);
            dispatch({type: 'opened', value:'open'});
            dispatch({type:'add'});
            dispatch({type:'matchingids',value:unique})
            // if (match == '') {
            //     dispatch({type:'match', value:src});
            //     localStorage.setItem('match',src);
            // }
        }
        
        // console.log('src',src);
        // console.log('match',match);

    }
    const checkMatch = () => {
        console.log('store',localStorage.getItem('match'));
        console.log('src',src);
        console.log(localStorage.getItem('match') === src);
        if (localStorage.getItem('match') !== '' && new String(src).valueOf() !== new String(localStorage.getItem('match')).valueOf()) {
            console.log('if');
            setTimeout(() => {
                setRotate(false)
                setToggle(false)
                setOpen(false)
                dispatch({type: 'closed'});
                
            }, 2000);
        } else if (localStorage.getItem('match') == '') {
            console.log('else if');
             localStorage.setItem('match',src);
        } else {
            console.log('else');
            dispatch({type:'matched'});
            localStorage.setItem('match','');

        }
    }
    useEffect(() => {
        if (imageRef && imageRef.current) {
            imageRef.current.addEventListener('animationend', rotatingDone);
        }
        return () => {
            imageRef.current.removeEventListener('animationend',rotatingDone);
        }
    }, []);
    // useEffect(() => {
    //     console.log('src',src);
    //      console.log('match',match);
    //     if (match!= '' && new String(src).valueOf() != new String(match).valueOf()) {
    //         console.log('if');
    //         setRotate(true)
    //         setToggle(false)
    //         setOpen(false)
    //     } else {
    //         console.log('else');
    //         dispatch({type:'match', value:src});
    //     }

    // }, [rotate,open,toggle]);
    

    return <>
        <div className='grid-item'>
            <img src={toggle ? src : '/img/cover.png'}
                ref={imageRef}
                onClick={cardClickHandler}
                className={rotate ? "rotate" : ""}
                alt='text'
            />
        </div>
    </>
}
export default Card;