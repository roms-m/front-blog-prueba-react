import Profile from './profile/profile';
import Category from '../category/category';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Sidebar from "../../components/sidebar/sidebar";
import { useContext } from 'react';
import { Context } from './../../context/context';
import './settings.css';
import Home from '../home/home';

function Settings(){

    const {user} = useContext(Context);
    return(
        <Router>
            { user ? (
                <div className="settings">
                    <Sidebar />
                    <Switch>
                        <Route exact path="/settings/">
                            <Profile />
                        </Route>
                        <Route path="/settings/create/category">
                            <Category />
                        </Route>
                    </Switch>            
                </div>
                ) : <Home />
            }
                        
        </Router>
    )
}

export default Settings;