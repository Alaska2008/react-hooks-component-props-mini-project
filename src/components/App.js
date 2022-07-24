import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from  "./About";
import Article from "./Article";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image ={blogData.image= "https://via.placeholder.com/215"} about= {blogData.about}/>
      <ArticleList posts={blogData.posts} />
      <Article/>
    </div>
  );
}

export default App;
