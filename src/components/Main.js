import '../styles/Main.css'
import note from '../images/note.png'
import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';


let Main = () => {
    const notes = useSelector(state => state.notes)
    // useSelector((state) => {

    // })


    let not = notes.map((item) => {
        return (
            <div className='main--card'>
                <img src={note} alt="" />
                <h2>{item.title}</h2>
            </div>
        )
    })

    return(
        <div className='main'>
            <h1>Recent Folders</h1>
             <div className='main--cards'>
             {not}
            </div> 
        </div>
    )
}

export default Main