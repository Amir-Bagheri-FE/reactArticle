import Style from './ArticleCard.module.css'
function ArticleCard(props){
    return(
        <>
        <div className={Style.card}>
        <img src={props.Data.imgUrl} alt="" />
        <h2>{props.Data.title}</h2>
        <p className={Style.summary}>{props.Data.summary}</p>
        <p>{props.Data.ReadingTime}</p>
        </div>
        </>
    )
}
export default ArticleCard;