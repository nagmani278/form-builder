import React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import Controls from "./Controls";

const StyledRadio = styled.div`
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
      & .options {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
        padding: 16px 0px;
      }
    }
  }
`;

const Radio = ({ listTemp, setList, index, listObj }) => {
  const handleTitle = (e) => {
    const { value } = e?.currentTarget;
    listTemp[index].title = value;
    setList([...listTemp]);
  };

  const handleOption = (e, ind) => {
    const { value } = e?.currentTarget;
    listTemp[index].options[ind] = value;
    setList([...listTemp]);
  };

  const addOption = () => {
    listTemp[index].options.push("");
    setList([...listTemp]);
  };

  return (
    <StyledRadio>
      <div className="box">
        <span>Radio</span>
        <div className="right">
          <Input
            name="title"
            size="large"
            placeholder="Enter title text"
            value={listObj?.title}
            onChange={handleTitle}
            className="input_box"
          />
          <div className="options">
            {listObj?.options?.map((option, ind) => {
              return (
                <Input
                  name="option"
                  size="small"
                  placeholder=""
                  value={option}
                  onChange={(e) => {
                    handleOption(e, ind);
                  }}
                />
              );
            })}
          </div>
          <Button
            size="small"
            type="primary"
            onClick={() => {
              addOption();
            }}
          >
            Add
          </Button>
        </div>
      </div>
      <Controls listTemp={listTemp} setList={setList} index={index} />
    </StyledRadio>
  );
};

export default Radio;
