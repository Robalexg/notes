import '../styles/profile.css'
import Navbar from '../components/Navbar.js'
import Sidebar from '../components/Sidebar.js'
import Main from '../components/Main.js'
import { Container,Row,Col } from 'react-bootstrap'



let Profile = () => {
    return(
        <Container fluid>
            <Row>
                <Navbar/>   
            </Row>
            <Row>
                <Col className='col-2'>
                    <Sidebar/>
                </Col>
                <Col className='col'>
                    <Main/>
                </Col>
            </Row>
        </Container>
    )
}


export default Profile