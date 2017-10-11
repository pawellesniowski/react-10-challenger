import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'


const Home = () => {
    return <div>Home</div>
}
const Roster = () => {
    return <div>Roster info</div>
}
const Schedule = () => {
    return <div>Schedule</div>
}

class Main extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/roster" component={Roster}/>
                    <Route exact path="/schedule" component={Schedule}/>
                </Switch>

            </div>
        );
    }
}

export default Main;