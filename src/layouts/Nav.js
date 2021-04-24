import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const list = [
  { name: "Start", path: "/", exact: true },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
  { name: "Admin Panel", path: "/login" }
];

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  @media (max-width: 500px) {
    justify-content: space-around;
  }
`;

const activeClassName = "nav-item-active";

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  display: block;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  color: whitesmoke;
  padding: 10px;
  font-size: 15px;
  transition: 0.2s;

  @media (max-width: 500px) {
    font-size: 12px;
  }

  &:hover {
    transform: translateY(-5px);
  }

  &.${activeClassName} {
    border-bottom: 3px green solid;
    transform: translateY(0);
  }
`;

const Li = styled.li`
  &:nth-child(2) ${StyledLink}.${activeClassName} {
    border-bottom: 3px solid orange;
  }
  &:nth-child(3) ${StyledLink}.${activeClassName} {
    border-bottom: 3px solid royalblue;
  }
  &:nth-child(4) ${StyledLink}.${activeClassName} {
    border-bottom: 3px solid tomato;
  }
`;

const Nav = () => {
  const menu = list.map((li, index) => (
    <Li key={`${index}-${li.name}`}>
      <StyledLink exact={li.exact ? li.exact : false} to={li.path}>
        {li.name}
      </StyledLink>
    </Li>
  ));
  return <Ul>{menu}</Ul>;
};

export default Nav;
