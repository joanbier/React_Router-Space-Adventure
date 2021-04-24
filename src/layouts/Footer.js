import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <i className="fab fa-facebook-square"></i>
      <i className="fab fa-instagram-square"></i>
      <i className="fab fa-linkedin"></i>
      <i className="fas fa-rocket"></i>
    </FooterWrapper>
  );
};

export default Footer;
