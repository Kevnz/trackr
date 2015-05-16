import React from 'react'; 


class Overview extends React.Component {
    constructor(props) {
        console.log('product list ctor');
        super(props);

    }
    render() { 
        return (
            <div>
			<h1>Overview</h1> 
            </div>
            );
    }
}
Overview.contextTypes = {
  router: React.PropTypes.func
};

export default Overview;