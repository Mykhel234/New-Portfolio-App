import React from "react";
import styled from "styled-components";
import { ImageIcon } from "../Icons";
import ReactTypingEffect from "react-typing-effect";
import { HiArrowRight } from "react-icons/hi";

import { FaFacebook, FaGithub, FaWhatsappSquare } from "react-icons/fa";
import {
  AiFillInstagram,
  AiOutlineDribbble,
  AiFillLinkedin,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Left>
        <ImageHolder>
          <ImageIcon />
          <Content>
            <Image src="/images/Michael.jpeg" alt="loading" />
            <span>Hello I am</span>
            <Name>Michael Oyilawu</Name>
          </Content>
        </ImageHolder>
        <Icons>
          <a href="https://web.facebook.com/mykhel.oyilawu1" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://github.com/Mykhel234" target="_blank">
            <FaGithub />
          </a>
          <a href="https://wa.link/8ied4g" target="_blank">
            <FaWhatsappSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/michaeloyilawu"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </Icons>
      </Left>
      <Right>
        <Top>INTRODUCTION</Top>
        <Head>
          <ReactTypingEffect
            text={["Frontend Developer", "Backend Developer", "UI/UX Designer", "Fullstack Developer"]}
            speed={100}
            eraseDelay={1000}
            eraseSpeed={100}
            typingDelay={700}
          />
        </Head>
        <Line />
        <Text>
        A Meticulous and Innovative Software Engineer with years of experience, dedicated to achieving Excellence and Precision at all times with a passion for developing scalable web applications with clean, reliable and maintainable codes. And one who is enthusiastic about expanding His skill-set via targeted mentorship and challenging Projects.
        </Text>
        <ButtonHolder>
          <Button to="/about">
            <span>More About Me</span>
            <div>
              <HiArrowRight />
            </div>
          </Button>
        </ButtonHolder>
      </Right>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  height: auto;
  font-family: poppins;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 80px;
  }
`;

const Left = styled.div`
  width: 450px;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(54, 193, 87, 50%);
  @media screen and (max-width: 768px) {
    border: none;
    width: 100%;
    height: 100%;
    min-height: 70vh;
  }
`;

const ImageHolder = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  padding: 10px 0;
`;

const Content = styled.div`
  width: 250px;
  height: 320px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: 5px;
  }
`;
const Image = styled.img`
  height: 85%;
  width: 100%;
  object-fit: cover;
`;

const Name = styled.div`
  // margin-top: -5px;
  font-family: lobster two;
  font-size: 25px;
  font-weight: lighter;
  color: #7f7f7f;
  /* :before {
    content: "[";
    margin-right: 12px;
    color: #36c157;
    font-size: 35px;
    animation: blink infinite 1.2s linear;
    @keyframes blink {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
  :after {
    content: "]";
    margin-left: 12px;
    color: #36c157;
    font-size: 35px;
    animation: blink infinite 1.2s linear;
    @keyframes blink {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  } */
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

const Right = styled.div`
  margin-left: 50px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 1024px) {
    padding-bottom: 20px;
  }
  @media screen and (max-width: 320px) {
    padding-bottom: 20px;
  }
`;

const Top = styled.div`
  color: #fdbd05;
  margin-top: 80px;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const ButtonHolder = styled.div`
  margin-top: 40px;
`;

const Button = styled(NavLink)`
  outline: 1px solid rgba(54, 193, 87, 0.5);
  width: 195px;
  border-radius: 50px;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: flex-end;
  transition: 350ms;
  cursor: pointer;
  position: relative;
  margin-top: 20px;
  div {
    height: 50px;
    width: 50px;
    background: #36c157;
    border-radius: 25px;
    border: 1px solid #36c157;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 350ms;
    color: white;
    font-size: 20px;
  }
  span {
    font-size: 17px;
    color: #36c157;
    position: absolute;
    left: 15px;
  }
  :hover {
    color: white;
    div {
      padding-left: 155px;
    }
    span {
      color: white;
    }
  }
`;

const Head = styled.div`
  font-size: 60px;
  font-weight: normal;
  margin-top: 60px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-top: 50px;
  }
`;

const Line = styled.div`
  width: 30%;
  height: 1px;
  background: #36c157;
  margin-top: 12px;
`;

const Text = styled.div`
  max-width: 550px;
  margin-top: 30px;
  font-size: 18px;
  color: #707070;
  line-height: 1.7;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 17px;
    padding: 0px 10px;
  }
  @media screen and (max-width: 320px) {
    text-align: center;
    font-size: 1px;
    padding: 0px 10px;
  }
`;

const Icons = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  width: 70%;
  a {
    color: #36c157;
  }
`;
