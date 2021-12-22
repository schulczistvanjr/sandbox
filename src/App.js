import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
  HomePage,
  CounterButtonPage,
  PeopleListPage,
  NotFoundPage,
  ProtectedPage,
  ControlledFormPage,
  UnControlledFormPage,
} from './pages';

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => { setNumberOfClicks(numberOfClicks + 1); }

  return (
    <div className="App">
      <Router>
      <Link to="/"> Home Page </Link>
      <Link to="/counter"> Counter Button Page </Link>
      <Link to="/people-list"> People List Page</Link>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/counter" element={<CounterButtonPage />} />
          <Route path="/controlled" element={<ControlledFormPage />} />
          <Route path="/uncontrolled" element={<UnControlledFormPage />} />
          <Route path="/people-list" element={<PeopleListPage />} />
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Greeting name="Isti" numberOfMessages={1} />
//         <PeopleList people={people} />
//         <button onClick={displayAlert}>Clikk Me!</button>
//         <p>
//           Bla bla bla
//         </p>
//       </header>
//     </div>
//   );
// }

export default App;
