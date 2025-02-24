import Style from './HeaderStyle.module.css'
function Header(props){
    return(
        <>
        <div className={Style.TitleWraper}><h1>{props.title}</h1></div>
        <div className={Style.menu}>
        <li>Home</li>
        <li>publishing Article</li>
        </div>
        </>
    )
}
export default Header