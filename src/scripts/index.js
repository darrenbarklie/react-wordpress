import { render } from 'react-dom';
import DataActions from 'flux/actions/DataActions.js';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Header from 'components/Header.js';
import Home from 'components/Home.js';
import Work from 'components/Work.js';
import About from 'components/About.js';
import Contact from 'components/Contact.js';


class AppInitializer {

  // templates = {
  //   'work': Work
  // }

  templates = {
    'work': Work,
    'about': About,
    'contact': Contact
  }



  buildRoutes(data){
    return data.pages.map((page, i) => {
      return (
        <Route
          key={i}
          component={this.templates[page.slug]}
          path={`/${page.slug}`}
          exact
        />
      )
    })
  }


  run() {
    DataActions.getPages((response)=>{
      render(
        <Router>
          <div>

            <Header />

            <Switch>
              <Route path="/" component={ Home } exact />

              {this.buildRoutes(response)}
              <Route render={() => { return <Redirect to="/404" /> }} />
            </Switch>
          </div>
        </Router>,
        document.getElementById('app')
      )
    });
  }
}

new AppInitializer().run();
