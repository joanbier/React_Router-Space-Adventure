import React from "react";
import styled from "styled-components";

const ArticleWrapper = styled.article`
  padding: 10px;
  margin: 30px 0;
  font-size: 12px;
  @media (max-width: 500px) {
    font-size: 10px;
    padding: 15px;
    margin: 0 auto;
  }
`;
const Title = styled.h2`
  text-transform: uppercase;
  font-size: 1.8em;
`;
const Author = styled.span`
  display: block;
  margin: 10px 0;
  font-size: 1.2em;
  color: #999;
`;
const Text = styled.p`
  font-size: 1.4em;
`;
const Article = ({ title, author, text }) => {
  return (
    <ArticleWrapper>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Text>{text}</Text>
    </ArticleWrapper>
  );
};

export default Article;
