import React from 'react';

const Directory = (props) => {
  // console.log('>>>>>>>> props', props);
  const {
    consoleLog,
  } = props;
  consoleLog();
  return (
    <p>
      Directory
    </p>
  );
};

export default Directory;
