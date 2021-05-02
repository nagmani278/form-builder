import React from "react";
import styled from "styled-components";
import { Input, message } from "antd";
import Controls from "./Controls";

const StyledText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  & .box {
    width: 100%;
    border: 1px solid black;
    display: flex;
    padding: 8px;
    gap: 16px;
    align-items: center;
    & .right {
      width: 100%;
      display: flex;
      flex-direction: column;
      & .input_box {
        width: 100%;
        border: 1px solid black;
      }
      & .characters_count {
        display: flex;
        gap: 16px;
        align-items: center;
      }
    }
  }
`;

const Text = ({ listTemp, setList, index, listObj }) => {
  const handleTitle = (e) => {
    const { value } = e?.currentTarget;
    listTemp[index].title = value;
    setList([...listTemp]);
  };

  const handleCount = (e) => {
    const { value } = e?.currentTarget;
    let valueTemp= parseInt(value, 10);
    if(Number.isNaN(valueTemp) && value !== ""){
        message.error("Please enter number");
        return;
    }
    listTemp[index].maximumCharacters = value;
    setList([...listTemp]);
  };

  return (
    <StyledText>
      <div className="box">
        <span>Text</span>
        <div className="right">
          <Input
            name="title"
            size="large"
            placeholder="Enter title text"
            value={listObj?.title}
            onChange={handleTitle}
            className="input_box"
          />
          <div className="characters_count">
            <span>Allowed Characters</span>
            <Input
              name="count"
              size="small"
              placeholder=""
              value={listObj?.maximumCharacters}
              onChange={handleCount}
            />
          </div>
        </div>
      </div>
      <Controls listTemp={listTemp} setList={setList} index={index} />
    </StyledText>
  );
};

export default Text;
