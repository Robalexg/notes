import '../styles/Main.css'
import note from '../images/note.png'
import notes from '../db/notes.js'


let Main = () => {

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