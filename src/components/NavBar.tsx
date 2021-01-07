import * as React from 'react';
import {HashLink} from 'react-router-hash-link'
 
const NavBar: React.FunctionComponent = () => {
    return ( 
        <nav>
        <ul>
          <HashLink to = '/#'>home</HashLink>
          <HashLink to = '/#what-is'>the bootcamp</HashLink>
          <HashLink to = '/#section-sample'>demo</HashLink>
          <HashLink to = '/#instructors'>instructors</HashLink>
          <HashLink to = '/'>Pricing</HashLink>
          <HashLink to = '/#vision'>vision</HashLink>
          <HashLink to = '/#contact'>contact</HashLink>
          <HashLink to = '/login'>Login</HashLink>
        </ul>
      </nav>
     );
}
 
export default NavBar;