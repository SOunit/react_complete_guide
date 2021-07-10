import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return <MyParagraph>{props.show ? 'new' : ''}</MyParagraph>;
};

// this tells react to check props
// only when props change, this component will be re-evaluate
// React.memo works only for functional component

// this comparison itself takes some cost
// props comparison vs. child component re-evaluation

// it's effective if you can cut re-evaluation of higher level component
export default React.memo(DemoOutput);
