import './components.css';
import { AmplifySignOut } from '@aws-amplify/ui-react';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-title"> 
        <h1>KTC Management Tool</h1>

      </div>
      <div className="header-signout"> 
        <AmplifySignOut />
      </div>


    </header>
  );
}

export default Header;