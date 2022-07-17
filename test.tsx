import { FC, useEffect } from "react";

const Component: FC<any> = () => <div />;

export const WithContainer: FC = () => {
  useEffect(() => {
    fetch("...").then(r => r.json());
    fetch("...").then(r => r.json(), x => x);
    fetch("...").then(r => r.json()).catch(_ => null);
    void fetch("...").then(r => r.json());
  });

  const x = (Component: any) => {
    Component;
  };

  return (
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

      {/* <>
        <div />
      </> */}

      <div dangerouslySetInnerHTML={{ __html: "<b>B</b>" }}></div>

      {a.length > 0 ? (
        <div>
          {/* <Component /> */}
        </div>
      ) : (
        <div>
          <Component />
        </div>
      )}
    </Component>
  );
};
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
