import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import styled from "styled-components";

const Title = styled.h2`
  text-align: center;
`;

const BackLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: whitesmoke;
  padding: 10px;
  &:hover {
    color: royalblue;
  }
`;

const ProductPage = ({ match }) => {
  return (
    <>
      <Title>Product Page</Title>
      <Product id={match.params.id} />
      <BackLink to="/products">
        {" "}
        <i className="fas fa-angle-left"></i> Back to list
      </BackLink>
    </>
  );
};

export default ProductPage;
