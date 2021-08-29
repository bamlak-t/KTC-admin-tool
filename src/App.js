import './App.css';
import { useState, useEffect } from 'react';
import {Header, TableNavigation} from './components'
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);



const App = () => {

  const [userInfo_, setUserInfo] = useState()

	useEffect(() => {
		const getUser = async () => {
			await Auth.currentUserInfo()
			.then((user) => setUserInfo(user))
			.catch((err) => console.log("error getting details", err))
		}
		getUser()
	}, [])

  const signOut = async () => {
		try {
			await Auth.signOut();
		} catch (error) {
			console.log('error signing out: ', error);
		}
	}

  if (userInfo_ !== undefined) {
    return (
      <div className="App">
        { userInfo_.attributes.sub === "09f70b2f-7b02-4890-a64d-1208f972d85b"
        ? <> <Header />
          <TableNavigation /> </>
        : <> <p> Please sign into the app instead</p> 
          <button onClick={signOut}> Signout </button> </>
        }
      </div>
    );
  } else {
    return <p>Loading</p>
  }


}

export default withAuthenticator(App);
