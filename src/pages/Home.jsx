import { useEffect, useState } from "react";
import Header from "../reptitives/Header";
import ArticleCard from "../reptitives/ArticleCard";
import '../index.css'
import axios from "axios";
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
         {article.map(ArticleData=>(
            <ArticleCard key={ArticleData.id} Data={ArticleData} />
         ))}       
        </div>
        </>
    )
}
export default Home;