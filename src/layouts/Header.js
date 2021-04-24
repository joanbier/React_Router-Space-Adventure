import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import video from "../images/bcg.mp4";

import img2 from "../images/earth.jpg";
import img3 from "../images/road.jpg";
import img4 from "../images/ufo.jpg";

const Video = styled.video`
  width: 100%;
  height: 40vh;
  object-fit: cover;
`;

const Img1 = styled.div`
  background-image: url(${img2});
  width: 100vw;
  height: 40vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Img2 = styled(Img1)`
  background-image: url(${img2});
`;
const Img3 = styled(Img1)`
  background-image: url(${img3});
`;
const Img4 = styled(Img1)`
  background-image: url(${img4});
  background-position: top;
`;

const Header = () => {
  return (
    <>
      <Route>
        <Switch>
          {/* <Img1 exact path="/"></Img1> */}
          <Video autoPlay controls={false} loop muted exact path="/">
            <source src={video} type="video/mp4" />
          </Video>
          <Img2 path="/products"></Img2>
          <Img3 path="/contact"></Img3>
          <Img4 path="/login"></Img4>
          <Img3></Img3>
        </Switch>
      </Route>
    </>
  );
};

export default Header;
