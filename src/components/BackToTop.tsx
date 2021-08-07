import React from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const BackToTop = () => {
  const [visibility, setVisibility] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handler = () => {
      window.pageYOffset > 200 ? setVisibility(true) : setVisibility(false);
    };
    window.addEventListener("scroll", () => handler());

    return window.removeEventListener("scroll", handler);
  }, [visibility, setVisibility]);

  return (
    <StyledArrowUp
      theme={visibility.toString()}
      style={{ position: "fixed", bottom: "50px", right: "50px" }}
      onClick={() => window.scrollTo(0, 0)}
    />
  );
};

const StyledArrowUp = styled(ArrowUpOutlined)`
  background-color: var(--pink);
  border-radius: 50%;
  padding: 10px;
  .ant-icon {
  }
  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
  ${({ theme }) => (theme === "true" ? "display: block" : "display: none")}
`;
