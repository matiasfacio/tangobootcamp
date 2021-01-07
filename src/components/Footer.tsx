import * as React from "react";
import {useHistory} from "react-router-dom"

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  const history = useHistory()
  return (
    <section id="footer">
      <div className="footer-container">
          <div>www.tangobootcamp.net</div>
          <div>info@tangobootcamp.net</div>
          <div>impressum</div>
          <div style = {{cursor: 'pointer'}}onClick = {()=> history.push('/admin')}>admin</div>
      </div>
    </section>
  );
};

export default Footer;
