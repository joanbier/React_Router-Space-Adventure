import React from "react";
import products from "../constants";
import styled from "styled-components";

const ProductWrapper = styled.div`
  text-align: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  width: 80%;
  padding: 20px;
  margin: 20px auto;
  font-size: 18px;
`;

const ProductImage = styled.img`
  width: 100%;
  display: block;
  margin: 15px auto;
`;

const Text = styled.p`
  margin: 10px auto;
  font-size: 0.9em;
`;

const Product = props => {
  const product = products.find(item => item.id === props.id);
  const { name, img, price } = product;

  return (
    <ProductWrapper>
      <h2>{name}</h2>
      <ProductImage src={img} alt={name} />
      <h3>{price}</h3>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem possimus
        aut ipsum totam nulla vel impedit eaque molestiae nobis delectus quis
        rerum natus non ab dolorem, facilis aspernatur tempore fuga.
      </Text>
    </ProductWrapper>
  );
};

export default Product;
