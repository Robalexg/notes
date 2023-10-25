import '../styles/navbar.css'
import logo from '../images/Minimalist Typography Simple Modern Brand Logo.png'; 
import pic  from '../images/brooke-cagle-Nm70URdtf3c-unsplash.jpg'

let Navbar = () => {
    return(
        <div className='navbar'>
            <img id='navbar--logo' src={logo} alt="" />
            <input id='navbar--search' type="text" />
            <p id='navbar--name'>Robert</p>
            <img id='navbar--pic' src={pic} alt="" />
            
        </div>
    )
}


export default Navbar