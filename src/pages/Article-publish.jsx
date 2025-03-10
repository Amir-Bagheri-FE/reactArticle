import {useState } from "react";
import Header from "../reptitives/Header";
function ArticleMaking(){
    const [newArticle,setNewArticle]=useState({})
    function handleInput(e){
        setNewArticle((prevState)=>({
        ...prevState,
         [e.target.name]:e.target.value
        })); 
    }
    return(
<>
<Header title='publish Article'/>
<h1>publish your Article here</h1>
<div>
    <label htmlFor="title">Add the title for Article</label>
    <input name='title' type='text' onChange={handleInput}/> <br/>
    <label htmlFor="summary">Add the short summary for Article</label>
    <input name='summary' type='text' onChange={handleInput}/>  <br/>
    <label htmlFor="imgUrl">Add URL of feature image</label>
    <input name='imgUrl' type='text' onChange={handleInput}/>  <br/>
    <label htmlFor="ReadingTime">how much it takes to finish the Article</label>
    <input name='ReadingTime' type='text' onChange={handleInput}/>  <br/>
    <label htmlFor="main">now write main part</label>
    <input name='main' type='textarea' onChange={handleInput}/>
    <input type="submit"/>
</div>
</>)
}

export default ArticleMaking ;