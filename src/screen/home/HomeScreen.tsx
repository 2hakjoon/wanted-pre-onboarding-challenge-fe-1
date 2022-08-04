import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section``;

function HomeScreen() {
  return (
    <Wrapper>
      <div>
        <input placeholder="할 일을 입력 해 주세요." />
        <button type="submit">저장</button>
      </div>
      <ul />
    </Wrapper>
  );
}

export default HomeScreen;
