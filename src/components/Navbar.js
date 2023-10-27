import '../styles/navbar.css'
import logo from '../images/Minimalist Typography Simple Modern Brand Logo.png'; 
import pic  from '../images/brooke-cagle-Nm70URdtf3c-unsplash.jpg'
import lookup  from '../images/lookup.png'
import menu  from '../images/menu.png'



let Navbar = () => {
    return(
        <div className='navbar'>
            <img id='navbar--logo' src={logo} alt="" />
            <div id='navbar--search'>
                <img src={lookup} alt="" />
                <input id='navbar--input' placeholder='search' type="text" />
            </div>
            <p id='navbar--name'>Robert</p>
            <img id='navbar--pic' src={pic} alt="" />
            <img id='navbar--menu' src={menu} alt="" />
        </div>
    )
}


export default Navbar