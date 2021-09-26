import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '312305255681-3tqk51fhs6n7robvs18n53cd3beoqa9h.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
