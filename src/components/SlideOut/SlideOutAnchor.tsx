import React from "react";
import styled from "styled-components";

export const slideOutAnchorId = "slide-out-anchor";

const StyledSlideOutAnchor = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const SlideOutAnchor = ({ children }: { children: JSX.Element }) => {
  return (
    <StyledSlideOutAnchor>
      <div id={slideOutAnchorId}></div>
      {children}
    </StyledSlideOutAnchor>
  );
};
