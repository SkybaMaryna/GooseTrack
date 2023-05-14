import React from 'react';
import { Blocks } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <Blocks
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </StyledLoader>
  );
};

export default Loader;
