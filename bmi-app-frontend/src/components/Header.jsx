import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
const Header = ()=>{
    return(
        <header className="w-full h-[7vh] relative justify-center items-center">
            <img src={logo} className="h-full absolute left-0" alt="logo" />
            <div className='w-full h-full flex items-center justify-end'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/bmi'>BMI</NavLink>
                <NavLink to='/exersice'>Exersice</NavLink>
                <NavLink to='/diet'>Diet</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </header>
    )       
}
export default Header