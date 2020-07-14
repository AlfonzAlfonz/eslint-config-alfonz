import React, { FC } from "react";

const Component: FC<any> = () => <div />;

export const WithContainer: FC = () => (
  <Component
    onClick={() => {
      console.log("lick");
      console.log("hello");
    }}
    color="blue"
    attr="lorem ipsum dolor sit amet"
    onClose={() => { console.log("close") }}
  >
    text
  </Component>
);

const a = [1, 2, 3, 4];

const b = [
  1,
  2,
  3,
  4
];
