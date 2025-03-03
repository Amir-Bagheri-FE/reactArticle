import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";
 
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Article/:title" element={<SingleArticle />}/>
    </Routes>
    </>
  );
}

export default App;
