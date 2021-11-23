import {useEffect, useState} from 'react';
import Login from './Login';
import WelcomeDashboard from './WelcomeDashboard';
import './App.css';

function App() {
  const [loginStatus,setLoginStatus] = useState(localStorage.getItem('isUserLoggedIn')?? false);
  useEffect(()=>{
    localStorage.setItem('isUserLoggedIn',false);
  },[])

  const handleLogin = ()=>{
    console.log('test here')
    localStorage.setItem('isUserLoggedIn',true);
    setLoginStatus(true);
  }
  const handleLogout = ()=>{
    localStorage.setItem('isUserLoggedIn',false);
    setLoginStatus(false);
  }
  console.log(loginStatus)
  return (
    <div>
       {!loginStatus?<Login handleLogin={handleLogin}/>:<WelcomeDashboard handleLogout={handleLogout}/>}
    </div>
  );
}

export default App;
