import { FC } from "react";

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
    {a.length > 0
      ? <Component />
      : <Component />}

    {a.length > 0 ? (
      <div>
        <Component />
      </div>
    ) : (
      <div>
        <Component />
      </div>
    )}
  </Component>
);

const a = [1, 2, 3, 4];

const b = [
  1,
  2,
  3,
  4
];

interface A {
  b: B;
}

interface B {

}
