import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Survery from "./pages/Survey";
import Section1 from "./pages/Section1";
import Results from "./pages/Results";
import MainLayout from "./components/molecules/layouts/MainLayout";
import MainSurveyLayout from "./components/molecules/layouts/MainSurveyLayout";

export class Routes extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route path='/survey/:path/:n?' exact>
            <MainSurveyLayout>
              <Switch>
                <Route path='/survey' exact component={Survery} />
                <Route path='/survey/section/:sectionNumber' component={Section1} />
                <Route path='/survey/results' exact component={Results} />
                <Route component={() => (<div className="container">404 Main Survey</div>)} exact path='/survey/*' />
              </Switch>
            </MainSurveyLayout>
          </Route>

          <Route>
            <MainLayout>
              <Switch>
                <Route path='/twotest' exact component={LandingPage} />
                <Route component={() => (<div className="container">404 Main</div>)} exact path="/*" />
              </Switch>
            </MainLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}