import  PropTypes  from 'prop-types';
import { Link, NavLink  } from 'react-router-dom';

function Header({text}) {
  return (
    <header>
         <div>{text}</div>
          <ul>
             <li>
               <Link to={"/"} className='Links'>Home</Link>
             </li>

             <li>
               <Link to={"/about"} className='Links'>About</Link>
             </li>

              <li>
                <NavLink to={"/"} className={"links"}>Home</NavLink>
              </li>

             <li>
              <NavLink to={"/about"} className= "links" >
                    About
              </NavLink>
             </li>
          </ul>
    </header>
  )
}
 Header.defaultProps = {
     text: "Feedback App"
    //  bgColor: "rgba(0,0,0,0,4)",
    //  textColor: "pink"
 }

 Header.prototype = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
 }
export default Header;

