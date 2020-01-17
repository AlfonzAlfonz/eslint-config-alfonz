import React, { FC } from 'react';

const Component: FC<any> = () => <div />;

export const WithContainer: FC = () => (
  <Component
    onClick={() => {
      console.log('click'); 
      console.log('hello');
    }} 
    color="blue"
    attr="lorem ipsum dolor sit amet"
    onClose={() => {console.log('close');}}
  >
    text
  </Component>
);