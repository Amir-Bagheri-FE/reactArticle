import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";
import ArticleMaking from "./pages/Article-publish";
 
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Article/:title" element={<SingleArticle />}/>
      <Route path="/article-publish" element={<ArticleMaking />}></Route>
    </Routes>
    </>
  );
}

export default App;
