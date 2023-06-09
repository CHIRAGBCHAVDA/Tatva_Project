

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  const ComponentWithAuth = (props) => {
    const history = useHistory();

    useEffect(() => {
      // Check if user is logged in
const isLoggedIn = sessionStorage.getItem('token') !== null;

      if (!isLoggedIn) {
        // Redirect to login page if not logged in
        history.push('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
