import Loader from "react-loader-spinner";
import styled from "styled-components";

export const LoaderSpinner = () => {
  return (
    <StyledLoader>
      <Loader
        type="ThreeDots"
        color="#146d6d"
        height={100}
        width={100}
        timeout={2000}
      />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  display: grid;
  place-content: center;
`;
