import "./Class.css";

const Class = ({ time, name, kind }) => {
  return (
    <div className="class">
      <p className="class__field">{time}</p>
      <p className="class__field">{name}</p>
      <p className="class__field">{kind}</p>
    </div>
  );
};

export default Class;
