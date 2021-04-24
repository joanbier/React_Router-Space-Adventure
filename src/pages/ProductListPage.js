import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import products from "../constants";

const ProductsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
`;

const ProductWrapperInList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  padding: 10px;
  margin-bottom: 50px;
`;

const StyledLinkInList = styled(Link)`
  display: block;
  text-decoration: none;
  color: whitesmoke;
  padding: 10px;
  transition: 0.2s;
  &:hover {
    color: royalblue;
    transform: scale(1.1);
  }
`;

const Img = styled.img`
  width: 300px;
  max-height: 200px;
  display: block;
  margin: 10px auto;
  @media (max-width: 500px) {
    width: 250px;
  }
`;

const Price = styled.span`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const productsList = products.map(item => (
  <ProductWrapperInList key={item.id}>
    <StyledLinkInList to={`/product/${item.id}`}>
      {item.name}
      <Img src={item.img} alt="" />
    </StyledLinkInList>
    <Price>{item.price}</Price>
  </ProductWrapperInList>
));

const ProductListPage = () => {
  return <ProductsContainer>{productsList}</ProductsContainer>;
};

export default ProductListPage;
