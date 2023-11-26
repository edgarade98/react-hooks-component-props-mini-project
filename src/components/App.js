import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
console.log(blogData);

function App() {

  const name = "Overreacted";
  const about = "Personal Blog by Dan Abramov\nI explain with words and code";
  const posts = [
  { title: "The WET Codebase", date: "", preview:"Come Waste your time with me", minutes: "1"},
  { title: "Goodbye, Clean Code", date: "January 11, 2020", preview: "Let Clean code guide you. Then let it go", minutes: "5"},
  { title: "My Decade in Review", date: "January 1, 2020", preview: "A personal reflection", minutes: "26"},
];

 return (
    <>
      <div className="App">
        <Header name={name} />
        <About imageSrc={"https://via.placeholder.com/215"} about={about} />
        <ArticleList posts={posts} />
      </div>

    </>
  );
}

export default App;