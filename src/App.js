import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import { CounterButton } from './CounterButton';
import { CongratulationMessage } from './CongratulationMessage';
import { HomePage, CounterButtonPage, PeopleListPage } from './pages';



// const displayAlert = () => {
//   alert('hejho');
// }

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => { setNumberOfClicks(numberOfClicks + 1); }

  return (
    <div className="App">
      <Router>
      <Link to="/">Go to Home Page</Link>
      <Link to="/counter">Go to Counter Button Page</Link>
      <Link to="/people-list">Go to People List Page</Link>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/counter" element={<CounterButtonPage/>} />
          <Route path="/people-list" element={<PeopleListPage/>} />
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
