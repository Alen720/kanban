import { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  function moveToDoing(index) {
    setDoing([...doing, toDo[index]]);
    setToDo(toDo.filter((_, i) => i !== index));
  }

  function moveTodone(index) {
    setDone([...done, doing[index]]);
    setDoing(doing.filter((_, i) => i !== index));
  }

  return (
    <div className="App">
      <div className="toDo">
        <h1>ToDo</h1>
        <Formik
          initialValues={{ todo: "" }}
          onSubmit={(values, { resetForm }) => {
            setToDo([...toDo, values.todo.trim()]);
            resetForm();
          }}
        >
          <Form>
            <Field
              type="text"
              name="todo"
              placeholder="Write down what you need to do."
            />
          </Form>
        </Formik>
        <div>
          {toDo.map((item, i) => (
            <div key={i}>
              <h1>{item}</h1>
              <input
                type="checkbox"
                onChange={() => moveToDoing(i)}
                checked={false}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="doing">
        <h1>Doing</h1>
        {doing.map((item, i) => (
          <div key={i}>
            <h1>{item}</h1>
            <input
              type="checkbox"
              onChange={() => moveTodone(i)}
              checked={false}
            />
          </div>
        ))}
      </div>
      <div className="done">
        <h1>Done</h1>
        {done.map((item, i) => (
          <div key={i}>
            <h1>{item}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
