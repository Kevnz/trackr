import React from 'react'; 


class Error extends React.Component {
    constructor(props) {
        console.log('product list ctor');
        super(props);

    }
    render() { 
        return (
            <div>
			<h1>Error</h1> 
            </div>
            );
    }
}
Error.contextTypes = {
  router: React.PropTypes.func
};

export default Error;