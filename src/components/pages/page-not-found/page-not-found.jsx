import React from 'react';

const PageNotFound = () => {
  const pageNotFoundStyles = {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    width: `100vw`,
    height: `100vh`,
  };

  return (
    <div style={pageNotFoundStyles}>
      <h1>Page not found</h1>
    </div>
  );
};

export default PageNotFound;
