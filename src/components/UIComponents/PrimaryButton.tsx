import * as React from 'react';

 
const PrimaryButton: React.FunctionComponent = (props) => {
    const buttonStyle = {
        backgroundColor: "rgb(247, 126, 126)",
    }
    return ( 
        <button style = {buttonStyle}>
            {props.children}
        </button>
     );
}
 
export default PrimaryButton;