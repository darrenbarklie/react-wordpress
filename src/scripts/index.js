import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from 'components/Home.js';

class AppInitializer {

  run() {
    render(
      <Router>
        <div>
          <Switch>
            <Route path="/" component={ Home } exact />
            <Route render={() => { return <Redirect to="/" /> }} />
          </Switch>
        </div>
      </Router>

      , document.getElementById('app')
    );
  }
}

new AppInitializer().run();
