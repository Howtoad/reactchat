/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useState } from "react";
import MessageContext from "./../context/MessageContext";

const styles = {
  inputBox: css`
    width: 100%;
    height: 40px;
    && input {
      width: 96%;
      height: 40px;
      margin: 0 2% 10px;
      border: 1px solid black;
      border-radius: 5px;
      padding-left: 4px;
    }
  `,
};

const InputBox = ({ messageArray, setMessageArray }) => {
  /* const { messageArray, setMessageArray } = useContext(MessageContext); */
  console.log(messageArray);

  let position = "left";

  const sendMessage = (e) => {
    if (messageArray.length > 0) {
      if (messageArray[messageArray.length - 1].position === "right") {
        position = "left";
      } else {
        position = "right";
      }
    }

    let messageObject = {
      position: position,
      message: e.target.value,
    };
    let newMessageArray = messageArray;
    newMessageArray.push(messageObject);
    setMessageArray(newMessageArray);
    e.target.value = "";
    console.log(messageArray);
  };

  return (
    <div css={styles.inputBox}>
      <input
        type="text"
        placeholder="Type a message..."
        onKeyPress={(e) => e.key === "Enter" && sendMessage(e)}
      />
    </div>
  );
};

export default InputBox;
