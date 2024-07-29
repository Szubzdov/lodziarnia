import './Header.module.css'
import logo from '../assets/Group 42.png'
import search from '../assets/search(2) 1.png'
import btne from '../assets/Group 41.png'

const Header = ()=>{
    return(
        <header>
            <img src={logo} alt=''/>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Know Us</a>
                </li>
                <li>
                    <a href="">Close By</a>
                </li>
                <li>
                    <a href=""><img src={search} alt=''/></a>
                </li>
            </ul>
            <button class="btn">
                <img src={btne} alt='' />

            </button>
        </header>
    )
}

export default Header