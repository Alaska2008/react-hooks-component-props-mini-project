import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const artli = posts.map((post) =>{
        return(
            <main key={post.id} > 
               
                {post.title} <br/>
                {post.date}   <br/>
                {post.preview} <br/>
                {post.minutes} min  <br/>
                <br/>
                <br/>
            </main>
        );
    })

    return <div> {artli} </div>
}

export default ArticleList;