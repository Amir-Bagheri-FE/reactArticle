import Style from './ArticleCard.module.css'
function ArticleCard(props){
    return(
        <>
        <div className={Style.card}></div>
        <img src={props.imgUrl} alt="" />
        <h2>{props.title}</h2>
        <p className={Style.summary}>{props.summary}</p>
        <p>{props.ReadingTime}</p>
        </>
    )
}
export default ArticleCard;