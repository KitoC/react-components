import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom";
import clsx from "clsx";
import { slideOutAnchorId } from "./SlideOutAnchor";
import styled from "styled-components";

const slideOutOrigins = ["left", "right", "bottom", "top"] as const;

export type SlideOutOrigin = typeof slideOutOrigins[number];

export type TriggerComponent = React.FC<{ onClick: () => void }>;
export type ContentComponent = React.FC<{ closeSlideOut: () => void }>;

export interface ISlideOutProps {
  Trigger: TriggerComponent;
  Content: ContentComponent;
  origin: SlideOutOrigin;
}

const StyledSlideOut = styled.div`
  position: relative;

  .slide-out-trigger {
  }

  .slide-out-content {
    position: absolute;
    height: 100%;
    width: 100%;
    left: -100%;
    transition: all 0.5s;

    &.is-open {
      left: 0;
    }
  }
`;

const StyledSlideOutContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transition: all 0.3s;
  z-index: 100;

  ${slideOutOrigins.map(
    (origin) => `
  &.origin-${origin} {
    ${origin}: -100%;

    &.is-open {
      ${origin}: 0;
    }
  }
  `
  )}
`;

const SlideOut = (props: ISlideOutProps) => {
  const { Trigger, Content, origin = "bottom" } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [targetNode, setTarget] = useState<null | HTMLElement>(null);

  const toggleIsOpen = () => setIsOpen(!isOpen);
  const closeSlideOut = () => setIsOpen(false);

  useEffect(() => {
    setTarget(document.getElementById(slideOutAnchorId));
  }, []);

  return (
    <StyledSlideOut>
      <div className="slide-out-trigger">
        {Trigger && <Trigger onClick={toggleIsOpen} />}
      </div>

      {targetNode &&
        ReactDOM.createPortal(
          <StyledSlideOutContent
            className={clsx(`origin-${origin}`, { "is-open": isOpen })}
            onClick={closeSlideOut}
          >
            {Content && <Content closeSlideOut={closeSlideOut} />}
          </StyledSlideOutContent>,
          targetNode
        )}
    </StyledSlideOut>
  );
};

export default SlideOut;
