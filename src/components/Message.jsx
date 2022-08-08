/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Message = (props) => {
  const styles = {
    message: css`
      max-width: 60%;
      background-color: #80008050;
      border: 1px solid black;
      border-radius: 5px;
      margin: 0 5px;
      display: inline-block;
      && p {
        margin: 2px;
        font-size: 16px;
        overflow-wrap: break-word;
      }
    `,
  };

  return (
    <div css={styles.message}>
      <p>{props.message}</p>
    </div>
  );
};

export default Message;
