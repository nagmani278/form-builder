import React from "react";
import styled from "styled-components";
import { Input } from "antd";
import Controls from "./Controls";

const StyledStatic = styled.div`
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
    & .input_box {
      width: 100%;
      border: 1px solid black;
    }
  }
`;

const Static = ({ listTemp, setList, index, listObj }) => {
  const handleInput = (e) => {
    const { value } = e?.currentTarget;
    listTemp[index].value = value;
    setList([...listTemp]);
  };

  return (
    <StyledStatic>
      <div className="box">
        <span>Static</span>
        <Input
          name="name"
          size="large"
          placeholder="Enter static text"
          value={listObj?.value}
          onChange={handleInput}
          className="input_box"
        />
      </div>
      <Controls listTemp={listTemp} setList={setList} index={index}/>
    </StyledStatic>
  );
};

export default Static;
