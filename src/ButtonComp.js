import React from "react";
import styled from "styled-components";
import { HiArrowRight } from "react-icons/hi";

const ButtonComp = ({ text }) => {
  return (
    <Container>
      <span>{text}</span>
      <div>
        <HiArrowRight />
      </div>
    </Container>
  );
};

export default ButtonComp;

const Container = styled.div`
  border: 1px solid #36c157;
  width: 195px;
  border-radius: 50px;
  display: flex;
  height: 50px;
  align-items: center;
  font-family: poppins;
  justify-content: flex-end;
  transition: 350ms;
  cursor: pointer;
  position: relative;
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
