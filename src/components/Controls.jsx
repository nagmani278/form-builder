import React from "react";
import styled from "styled-components";
import { message } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  CloseOutlined,
} from "@ant-design/icons";

message.config({
  top: 100,
  duration: 2,
  maxCount: 1,
});

const StyledControls = styled.div`
  border: 1px solid black;
  & .controls {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

const Controls = ({ listTemp, setList, index }) => {
  const handleClose = () => {
    listTemp.splice(index, 1);
    setList([...listTemp]);
  };

  const handleArrowUp = () => {
    if (index === 0) {
      message.error("Item is already on the top");
      return;
    }
    const temp = listTemp[index - 1];
    listTemp[index - 1] = listTemp[index];
    listTemp[index] = temp;
    setList([...listTemp]);
  };

  const handleArrowDown = () => {
    if (index === listTemp.length - 1) {
      message.error("Item is already on the bottom");
      return;
    }
    const temp = listTemp[index + 1];
    listTemp[index + 1] = listTemp[index];
    listTemp[index] = temp;
    setList([...listTemp]);
  };

  return (
    <StyledControls>
      <div className="controls">
        <ArrowUpOutlined onClick={handleArrowUp} />
        <ArrowDownOutlined onClick={handleArrowDown} />
        <CloseOutlined onClick={handleClose} />
      </div>
    </StyledControls>
  );
};

export default Controls;
