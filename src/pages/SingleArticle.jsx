import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
function SingleArticle(){
    const Article=useParams()
    let id=useLocation();
    const [articleSingle,setArticleSingle]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:4000/data/${id.state.id}`).then(result=>setArticleSingle(result.data))
    },[id])
    return(
     <>
    <img src={articleSingle.imgUrl} alt="" />
    <h1>{Article.title}</h1>
    <p>{articleSingle.main}</p>
    </>)
}
export default SingleArticle;