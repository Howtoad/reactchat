/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Message from "./../components/Message";
import Status from "./../components/Status";

const MessageContainer = (props) => {
  let position = "row";
  if (props.position === "right") {
    position = "row-reverse";
  }

  const styles = {
    MessageContainer: css`
      display: flex;
      margin: 10px 10px 5px;
      flex-direction: ${position};
    `,
  };

  return (
    <div css={styles.MessageContainer}>
      <Status status={props.status} />
      <Message message={props.message} />
    </div>
  );
};

export default MessageContainer;
