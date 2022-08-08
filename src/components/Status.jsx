/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  isWriting: css`
    width: 15px;
    height: 15px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: green;
    align-self: center;
  `,
};

const Status = () => {
  return <div css={styles.isWriting}></div>;
};

export default Status;
