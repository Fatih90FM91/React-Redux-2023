import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from "./pages/home";
import Header from './components/header/header';
import AddExpense from './pages/add-expense/add-expense';
import Footer from './components/footer/footer'

function App() {
  return (
    <Router>

        <Header/>
        <Switch>
          <Route  path='/' exact component={Home}/>
          <Route path='/add-expense'  component={AddExpense}/>
        </Switch>
        
        <Footer/>

    </Router>
  
  );
}

export default App;
