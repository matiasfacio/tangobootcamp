import React from "react";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";

export interface ArrowPullDownProps {}

const ArrowPullDown: React.FC<ArrowPullDownProps> = () => {
  const [iconArrow, setIconArrow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = (e) => {
      console.log(e.scrollY);
      e.scrollY > 200 ? setIconArrow(true) : setIconArrow(false);
    };

    window.addEventListener("scroll", (e) => handleScroll(e));

    return window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      {iconArrow && (
        <ArrowDropDownCircleIcon
          fontSize="large"
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 999,
            transform: "rotateZ(180deg)",
            color: "rgb(247, 126, 126)",
          }}
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        />
      )}
    </>
  );
};

export default ArrowPullDown;
