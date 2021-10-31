import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import UpcomingList from './UpcomingList';
import UpdateUpcoming from './UpdateUpcoming';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact={true} path={'/'} component={()=><UpcomingList/>} />
              <Route exact={true} path={'/update/:id'} component={()=><UpdateUpcoming/>} />
            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;
