import './App.css';
import {Header, TableNavigation} from './components'
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);



const App = () => {
  return (
    <div className="App">
      <Header />
      <TableNavigation />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />




      </header> */}
    </div>
  );
}

export default withAuthenticator(App);
