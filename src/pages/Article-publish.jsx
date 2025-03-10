import {useState } from "react";
import Header from "../reptitives/Header";
import axios from "axios";
import './publish.css'
function ArticleMaking(){
    const [newArticle,setNewArticle]=useState({})
    function handleInput(e){
        setNewArticle((prevState)=>({
        ...prevState,
         [e.target.name]:e.target.value
        })); 
    }
    function postArticle(){
  axios.post('http://localhost:4000/data',newArticle)
    }
    return(
<>
<Header title='publish Article'/>
<h1 className="pageTitle">publish your Article here</h1>
<div className="formCon">
    <label htmlFor="title">Add the title for Article</label>
    <input className="inputs" name='title' type='text' onChange={handleInput}/> <br/>
    <label htmlFor="summary">Add the short summary for Article</label>
    <input className="inputs" name='summary' type='text' onChange={handleInput}/>  <br/>
    <label htmlFor="imgUrl">Add URL of feature image</label>
    <input className="inputs" name='imgUrl' type='text' onChange={handleInput}/>  <br/>
    <label htmlFor="ReadingTime">how much it takes to finish the Article</label>
    <input className="inputs" name='ReadingTime' type='text' onChange={handleInput}/>  <br/>
    <label htmlFor="main">now write main part</label>
    <input className="inputs" name='main' type='textarea' onChange={handleInput}/>
    <input className="subButton" type="submit" onClick={postArticle}/>
</div>
</>)
}

export default ArticleMaking ;