import React from 'react'; 


class Layout extends React.Component {
    constructor(props) { 
        super(props);

    }
    render() { 
 console.log(this.props);
        return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>
            {this.props.title}
          </title>
        </head>
        <body>
          {this.props.children}
        </body>
       <script src='/bundle.js'></script>
       </html>
            );
    }
};

export default Layout;