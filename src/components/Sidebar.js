
import '../styles/sidebar.css'
import trash from '../images/trash.png'
import add from '../images/plus (2).png'
import { Button,Modal} from 'react-bootstrap'
import { useState } from 'react';
import notes from '../db/notes'

let Sidebar = () => {
    const [show, setShow] = useState(false);
    const [title,setTitle] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const onAdd = (e) => {
        
        notes.push({title:{title},desc: ''})
        console.log(notes)
        handleClose(false)
    }

    const onChange = (e) => {
        setTitle(e.target.value)
    }

    return(
        <div className='sidebar'>
                <Button onClick={handleShow} className='sidebar--btn' variant='outline-none' size='sm'>
                    <img className='icon' src={add} alt="" />
                    <p>Add New</p>
                </Button>  
                {/* <Button className='sidebar--btn' variant='outline-none' size='sm'>
                    <img className='icon'd src={trash} alt="" />
                    <p>Trash</p>
                </Button>          */}
            <div className='footer'>
                <p>@robalexg</p>
            </div>  

            <Modal show={show} onHide={handleClose} >
                <Modal.Body>
                    <h1>Title</h1>
                    <input onChange={onChange} type="text" />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onAdd}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>       
        </div>

    )
}

export default Sidebar



 /* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            Woohoo, you are reading this text in a modal!
        </Modal.Body>


        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>

            <Button variant="primary" onClick={handleClose}>
            Save Changes
            </Button>

        </Modal.Footer>
    </Modal> */