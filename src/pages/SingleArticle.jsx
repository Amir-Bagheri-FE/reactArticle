import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Style from "./SingleArticle.module.css";
import Header from "../reptitives/Header";
function SingleArticle() {
  const Article = useParams();
  let id = useLocation();
  const [articleSingle, setArticleSingle] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:4000/data/${id.state.id}`)
      .then((result) => setArticleSingle(result.data));
  }, [id]);
  return (
    <>
    <Header title={Article.title}/>
      <div className={Style.featureimgCon}>
        <img className={Style.featureimg} src={articleSingle.imgUrl} alt="" />
      </div>
      <h1 className={Style.Title}>{Article.title}</h1>
      <p className={Style.main}>{articleSingle.main}</p>
    </>
  );
}
export default SingleArticle;
