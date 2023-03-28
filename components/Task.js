import React from 'react';
import styled from 'styled-components';
import randomEmoji from 'random-emoji';

const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TaskText = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const TaskEmoji = styled.div`
  font-size: 20px;
`;

const Task = ({ text }) => {
  const emoji = randomEmoji.random({ count: 1 })[0].character;
  
  return (
    <TaskWrapper>
      <TaskEmoji>{emoji}</TaskEmoji>
      <TaskText>{text}</TaskText>
    </TaskWrapper>
  );
};

export default Task;
