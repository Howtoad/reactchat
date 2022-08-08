/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InputBox from "./components/Inputbox";
import MessageContainer from "./modules/MessageContainer";
import { useContext, useState } from "react";
import MessageContext from "./context/MessageContext";

const styles = {
  chatbox: css`
    max-width: 400px;
    height: 500px;
    margin: 50px auto 10px;
    background-color: lightgray;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    && .MessageList {
      flex-grow: 1;
      overflow-y: scroll;
    }
  `,
};

const Home = () => {
  /* const { messageArray } = useContext(MessageContext); */
  const [messageArray, setMessageArray] = useState([]);
/*   const [messages, setMessages] = useState([]); */

  return (
    <div css={styles.chatbox}>
      <div className="MessageList">
        {messageArray.map((object, index) => (
          <MessageContainer
            key={index}
            message={object.message}
            position={object.position}
          />
        ))}
      </div>
      <p>test</p>
      <InputBox messageArray={messageArray} setMessageArray={setMessageArray} />
    </div>
  );
};

export default Home;
