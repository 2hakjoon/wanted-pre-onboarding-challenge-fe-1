import React from 'react';
import styled from 'styled-components';
import ButtonLogOut from '../button/ButtonLogOut';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  .inner-container {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  .text-header {
    display: block;
    font-size: 35px;
    font-weight: bold;
    margin-left: 20px;
  }
`;

const EmptyBox = styled.div`
  width: 100%;
  height: 60px;
`;

function Header() {
  return (
    <>
      <HeaderContainer>
        <div className="inner-container">
          <span className="text-header">Todo List</span>
          <ButtonLogOut />
        </div>
      </HeaderContainer>
      <EmptyBox />
    </>
  );
}

export default Header;
