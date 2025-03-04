import Style from './ArticleCard.module.css'
import { Link } from 'react-router-dom';
function ArticleCard(props){
    return(
        <>
        <div className={Style.card}>
        <img src={props.Data.imgUrl} alt="" />
        <Link to={`Article/${props.Data.title}`}>
        <h2>{props.Data.title}</h2>
         </Link>
        <p className={Style.summary}>{props.Data.summary}</p>
        <p>{props.Data.ReadingTime}</p>
        </div>
        </>
    )
}
export default ArticleCard;