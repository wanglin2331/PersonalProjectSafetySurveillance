import React , { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from './component/login';
import Triggers from './component/triggers';
import TriggerDetail from './component/triggerDetail';


class Routes extends Component {
  render (){
      // console.log('routes',this.props)
      return(
        <div>
            <Switch>
              <Route exact component={ Login } path="/"  />
              <Route component={ Triggers } path="/triggers" />
              <Route component={ TriggerDetail } path="/triggerdetail/:triggersourcedataid" />
    
            </Switch>
        </div>
        )
    }
};

export default Routes;