/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const bgcolor = "#660066";

const Box1 = css`
  width: 200px;
  height: 100px;
  background-color: ${bgcolor};
  color: white;
`;

export const Css = () => {
  return <div css={Box1}>box1</div>;
};
