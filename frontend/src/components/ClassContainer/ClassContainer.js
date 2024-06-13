import "./ClassContainer.css";

import Class from "../Class/Class";
// const mock = [
//   {
//     id: "hjaskdf438756hljsdhf",
//     time: "9:32",
//     name: "Body Combat",
//     kind: "Relax",
//   },
//   {
//     id: "hjaskdsdfgfhljsdhf",
//     time: "9:32",
//     name: "Body Combat",
//     kind: "Relax",
//   },
//   {
//     id: "hjaskdfa5453sdasdhf",
//     time: "12:00",
//     name: "Body Combat",
//     kind: "Relax",
//   },
//   {
//     id: "hjassgsghlj123sdhf",
//     time: "9:32",
//     name: "Body Combat",
//     kind: "Relax",
//   },
//   {
//     id: "hjaskdfsgdsaghljsdhf",
//     time: "9:32",
//     name: "Body Combat",
//     kind: "Relax",
//   },
//   {
//     id: "hjasdgsg1235ljsdhf",
//     time: "9:32",
//     name: "Body Combat",
//     kind: "Relax",
//   },
// ];
const ClassContainer = ({ classes }) => {
  return (
    <div className="container">
      <h1 className="container__header">КЛАССЫ:</h1>
      {classes.map((el, ind) => (
        <div
          className={
            ind % 2 === 0
              ? `container__el-wrapper ${
                  ind === 0 && `container__el-wrapper_first`
                }`
              : `container__el-wrapper container__el-wrapper_even`
          }
        >
          <Class time={el.time} name={el.name} kind={el.kind} key={el._id} />
        </div>
      ))}
    </div>
  );
};

export default ClassContainer;
