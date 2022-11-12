import Header from "./Components/Header";
import Content from "./Components/Content";
import Total from "./Components/Total";

const App = () => {
  const course = "Half Stack application development";
  const content = [
    ["Fundamentals of React", 10],
    ["Using props to pass data", 7],
    ["State of a component", 14],
  ];

  return (
    <div>
      <Header course={course} />
      <Content content={content}/>
      <Total total={content.map(data => data[1])} />
    </div>
  );
};

export default App;
