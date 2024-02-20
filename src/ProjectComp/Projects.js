import React from "react";
import styled from "styled-components";
import { AiOutlineDribbble, AiOutlineSearch } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
   .back{
    opacity: ${({ theme }) => (theme.myTheme === "dark" ? "0.3" : "0.1")};
   }
   .front{
    color: ${({ theme }) => (theme.myTheme === "dark" ? "white" : "gray")};
   }
   `;

const Projects = () => {
  return (
    <Container>
      <GlobalStyled />
      <Header>
        <Back className="back">PROJECTS</Back>
        <Front className="front">
          My <span>Works</span>
        </Front>
      </Header>
      <Top>Projects Worked On</Top>
      <Wrapper>
        <Card>
          <CardImg>
            <img src="sos.png" alt="loading" />
          </CardImg>
          <Disc>A distress call app </Disc>
          <A href="https://distress-cl.herokuapp.com">click to visit</A>
        </Card>
        <Card>
          <CardImg>
            <img src="callcare.png" alt="loading" />
          </CardImg>
          <Disc> A caregiven app for old </Disc>
          <A href="https://tendakare.vercel.app">click to visit</A>
        </Card>
        <Card>
          <CardImg1>
            <img src="/images/pigin11.png" alt="loading" />
          </CardImg1>
          <Disc>A User Generated pigin dictionary</Disc>
          <A href="https://pidgin-app.herokuapp.com">click to visit</A>
        </Card>
        <Card>
          <CardImg>
            <img src="skool1.png" alt="loading" />
          </CardImg>
          <Disc>An ERP software school management system </Disc>
          <A href="https://sckoolkod.vercel.app">click to visit</A>
        </Card>
        {/* <Card>
          <CardImg>
            <img src="ucare.png" alt="loading" />
          </CardImg>
          <Disc> app that allow user to njdjvn</Disc>
          <A href="https://ucare.versel.app">click to visit</A>
        </Card> */}
      </Wrapper>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: poppins;
  width: 100%;
  /* background: yellow; */
  height: 100%;
  min-height: 100vh;
  /* overflow: hidden; */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 70px;
  }
`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Back = styled.div`
  font-weight: 1000;
  font-size: 90px;
  opacity: 0.1;
  @media screen and (max-width: 425px) {
    font-size: 60px;
  }
  @media screen and (max-width: 368px) {
    font-size: 50px;
  }
`;

const Front = styled.div`
  position: absolute;
  color: black;
  font-weight: bold;
  font-size: 30px;
  top: 45px;
  text-transform: uppercase;
  span {
    color: #36c157;
  }
  @media screen and (max-width: 425px) {
    font-size: 25px;
    top: 25px;
  }
  @media screen and (max-width: 368px) {
    font-size: 25px;
    top: 20px;
  }
`;

const Top = styled.div`
  color: #fdbd05;
  font-size: 20px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    padding-bottom: 55px;
  }
  @media screen and (max-width: 425px) {
    padding-bottom: 55px;
  }
  @media screen and (max-width: 375px) {
    padding-bottom: 55px;
  }
  @media screen and (max-width: 320px) {
    padding-bottom: 55px;
  }
`;

const Card = styled.div`
  width: 320px;
  height: 240px;
  /* background: blue; */
  border: 1px solid grey;
  margin: 15px 10px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const CardImg = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: red; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CardImg1 = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: red; */

  img {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    object-fit: cover;
  }
`;

const Disc = styled.div`
  font-size: 16px;
  margin: 6px 0;
  text-align: center;
`;
const A = styled.a`
  font-size: 18px;
  color: grey;
  text-decoration: none;
  font-weight: 700;
`;
