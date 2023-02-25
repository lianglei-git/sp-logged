import V1 from "./v1";

interface PropsType {
  version: string;
  [k: string]: any;
}
// export default (props: PropsType) => {
//   return import("./v1");
// };

export default (props: PropsType) => {
  return <V1>{props.children}</V1>;
};
