import React, { useState } from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Button, Modal, message } from "antd";
import Static from "./components/Static";
import Text from "./components/Text";
import Radio from "./components/Radio";

message.config({
  top: 100,
  duration: 2,
  maxCount: 1,
});

const StyledApp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & .container {
    background: #e9e9e9;
    padding: 16px;
    width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    & .list {
      width: 100%;
    }
  }
`;

const listTemp = [];

function App() {
  const [list, setList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const addElement = (element) => {
    setIsModalVisible(false);
    const tempObj = {
      type: element,
    };
    if(element === "static") {
      tempObj.value = "";
    }
    if(element === "text"){
      tempObj.title = "";
      tempObj.maximumCharacters = 20;
      tempObj.reply = "";
    }
    if(element === "radio"){
      tempObj.title = "";
      tempObj.options = [];
      tempObj.reply = -1;
    } 
    listTemp.push(tempObj);
    setList([...listTemp]);
  };

  return (
    <StyledApp>
      <div className="container">
        <div className="list">
          {list.map((listObj, index) => {
            if (listObj?.type === "static") {
              return <Static listTemp={listTemp} setList={setList} index={index} listObj={listObj} />;
            }
            else if (listObj?.type === "text"){
              return <Text listTemp={listTemp} setList={setList} index={index} listObj={listObj} />
            }
            else if (listObj?.type === "radio"){
              return <Radio listTemp={listTemp} setList={setList} index={index} listObj={listObj} />
            }
          })}
        </div>
        <Button
          size="large"
          type="primary"
          className="add_component_button"
          onClick={showModal}
        >
          Add components
        </Button>
        <Button size="large" type="primary" className="download_button">
          Download JSON
        </Button>
      </div>
      <Modal
        title="Choose Element"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
          <Button
            size="small"
            type="primary"
            onClick={() => {
              addElement("static");
            }}
          >
            Static
          </Button>
          <Button
            size="small"
            type="primary"
            onClick={() => {
              addElement("text");
            }}
          >
            Text
          </Button>
          <Button
            size="small"
            type="primary"
            onClick={() => {
              addElement("radio");
            }}
          >
            Radio
          </Button>
          <Button
            size="small"
            type="primary"
            onClick={() => {
              addElement("dropdown");
            }}
          >
            Drop down
          </Button>
        </div>
      </Modal>
    </StyledApp>
  );
}

export default App;
