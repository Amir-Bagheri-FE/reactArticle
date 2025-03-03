import { useEffect, useState } from "react";
import Header from "../reptitives/Header";
import ArticleCard from "../reptitives/ArticleCard";
import '../index.css'
import axios from "axios";
import { Link } from "react-router-dom";
function Home(){
 const [article,setArticle]=useState([]);
 useEffect(()=>{
axios.get('http://localhost:4000/data').then(
    Result=>{setArticle(Result.data);
    }).catch(Error=>{console.error(Error)})
 },[])
    return(
        <>
        <Header title='HomePage'/>
        <div className="sectionMain">
         {article.map((ArticleData,index)=>(
            <Link to={`Article/${ArticleData.title.replace(/ /g, "")}`}> 
            <ArticleCard key={index} Data={ArticleData} />
            </Link>
         ))}       
        </div>
        </>
    )
}
export default Home;