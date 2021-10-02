import React from "react";
import styled from "styled-components";
import cancelIcon from "../../images/cancel.svg";

export interface CookieProps {}

export const Cookie: React.FC<CookieProps> = () => {
  const [cookie, setCookie] = React.useState(() =>
    localStorage.getItem("cookieAccepted")
  );

  const saveCookie = () => {
    localStorage.setItem("cookieAccepted", "yes");
    setCookie(() => localStorage.getItem("cookieAccepted"));
  };

  return (
    <>
      {!cookie && (
        <CookieContainer theme={!!cookie}>
          This website uses cookies, if you continue to navigate you accept the
          use of them.
          <CookieIcon onClick={() => saveCookie()} />
        </CookieContainer>
      )}
    </>
  );
};

const CookieContainer = styled.div`
  position: fixed;
  left: 50%;
  padding: 10px;
  bottom: 0;
  max-width: 90vw;
  background-color: var(--pink);
  color: white;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: ${({ theme }) => (theme === true ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
  z-index: 1;
`;

const CookieIcon = styled.div`
  content: url(${cancelIcon});
  width: 25px;
  height: 25px;
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: pointer;
  z-index: 2;
  background-color: white;
  border-radius: 50%;
`;
