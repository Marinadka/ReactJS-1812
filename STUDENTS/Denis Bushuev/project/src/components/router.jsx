import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';

export default class Router extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={ Layout } />
                {/* <Route exact path="/chat/1/" render={ 
                    () => <Layout chatId={ 1 }/> 
                    } />
                <Route exact path="/chat/2/" render={ 
                    () => <Layout chatId={ 2 }/> 
                    } />
                <Route exact path="/chat/3/" render={ 
                    () => <Layout chatId={ 3 }/> 
                    } /> */}
                {/* <Route exact path="/lol/" render={
                    () => (<div><h1>LoL</h1></div>)
                } /> */}
                <Route
                    exact
                    path='/chat/:chatId/'
                    render={ obj => <Layout 
                            chatId={ Number(obj.match.params.chatId) }
                    /> }
                />
            </Switch>
        )
    }
}