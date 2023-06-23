import "./index.css";
import Card from "./components/card/Card";
import CardMore from "./components/card-more/CardMore";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="cardWrap">
          <Card
            imgUrl="python.png"
            title="Learn Python Programming Mastercalss"
            author="by Tim Buchalka"
            text="This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3"
            hoursCount={42}
            lessonsCount={31}
            levelCount="Medium"
          />

          <CardMore
            imgUrl="python-bg.png"
            title="Learn Python Programming Mastercalss"
          />
        </div>

        <div className="cardWrap">
          <Card
            imgUrl="react.png"
            title="React - The Complete Guide"
            author="by Maximilian Schwarzmüller"
            text="Dive in and learn React 16.8 from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!"
            hoursCount={45}
            lessonsCount={146}
            levelCount="All"
          />

          <CardMore imgUrl="react-bg.png" title="React - The Complete Guide" />
        </div>

        <div className="cardWrap">
          <Card
            imgUrl="sketch.png"
            title="Sketch from A to Z: Become an App Designer"
            author="by Joseph Angelo Todaro"
            text="Finally a comprehensive guide to using Sketch for designing mobile applications. Learn to design an app from A to Z."
            hoursCount={3.5}
            lessonsCount={15}
            levelCount="Easy"
          />

          <CardMore
            imgUrl="sketch-bg.png"
            title="Sketch from A to Z: Become an App Designer"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
