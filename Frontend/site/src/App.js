import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';

function App() {
  return (
    <switch>
      <route path='/login' component={Login}/>
    </switch>
  );
}

export default App;
