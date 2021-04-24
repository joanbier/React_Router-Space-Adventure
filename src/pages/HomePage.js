import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "What is the theory of butterfly effect?",
    author: "John Smith",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, consectetur! Ex dolor odit, veniam neque animi consequatur laudantium non unde saepe soluta natus aut obcaecati delectus, necessitatibus numquam distinctio placeat."
  },
  {
    id: 2,
    title: "Dark matter and dark energy",
    author: "Hannah Kurtz",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, consectetur! Ex dolor odit, veniam neque animi consequatur laudantium non unde saepe soluta natus aut obcaecati delectus, necessitatibus numquam distinctio placeat."
  },
  {
    id: 3,
    title: "The Theory of everything and nothing",
    author: "Chloe Adams & George Newton",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, consectetur! Ex dolor odit, veniam neque animi consequatur laudantium non unde saepe soluta natus aut obcaecati delectus, necessitatibus numquam distinctio placeat."
  }
];

const mainBlog = articles.map(item => <Article {...item} key={item.id} />);

const HomePage = () => {
  return <div className="articles">{mainBlog}</div>;
};

export default HomePage;
