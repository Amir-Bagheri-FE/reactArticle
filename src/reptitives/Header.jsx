import Style from './HeaderStyle.module.css'
import { Link } from 'react-router-dom'
function Header(props){
    return(
        <>
        <div className={Style.TitleWraper}><h1>{props.title}</h1></div>
        <div className={Style.menu}>
        <Link to="/"><li>Home</li></Link>
        <Link to='/article-publish'><li>publishing Article</li></Link>
        </div>
        </>
    )
}
export default Header