'use strict';
import React from 'react'; 
import Router from 'react-router';
import mixin from 'react-mixin';
import ListenerMixin from 'alt/mixins/ListenerMixin'
import Layout from '../components/layout';

let DefaultRoute = Router.DefaultRoute;
let Link = Router.Link;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;


function _getStateFromStores () {
 
    return {};
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = _getStateFromStores();

    }
    componentDidMount () {
        //TheStore.listen(this._onChange.bind(this));
    }
    componentWillUnmount () {
        //TheStore.unlisten(this._onChange.bind(this));
    }
    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <Layout  {...this.state}  {...this.props}>
                <div>
                    <div className="app">
                        <RouteHandler {...this.state}  {...this.props} />
                    </div>
                </div>
            </Layout>
        );
    }
    _onChange () {
        console.log('_onChange');
        this.setState(_getStateFromStores());
    }
}
App.contextTypes = {
  router: React.PropTypes.func
};
mixin(App.prototype, ListenerMixin);

export default App