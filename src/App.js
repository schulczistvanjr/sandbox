import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  CounterButtonPage,
  PeopleListPage,
  NotFoundPage,
  ProtectedPage,
  ControlledFormPage,
  UnControlledFormPage,
  UserProfilePage,
} from './pages';
import { NavBar } from './NavBar';
import { UserDataLoader } from './UserDataLoader';
import { ThemeContext } from './ThemeContext';
// import { FormsNavBar } from './FormsNavBar';


function App() {
  return (
    <ThemeContext.Provider value="light">
      <div className="App">
        <Router>
        <NavBar />
          <div className='App-header'>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/counter" element={<CounterButtonPage />} />
            <Route path="/uncontrolled" element={<UnControlledFormPage />} />
            <Route path="/controlled" element={<ControlledFormPage />} />
            {/* <Route path="/forms" element={<FormsNavBar />} >
                <Route path="forms/controlled" element={<ControlledFormPage />} />
                <Route path="forms/uncontrolled" element={<UnControlledFormPage />} />
            </Route> */}
            <Route path="/people-list" element={<PeopleListPage />} />
            <Route path="/protected" element={<ProtectedPage />} />
            <Route path="/user" element={
              <UserDataLoader>
                <UserProfilePage />
              </UserDataLoader>  }
              />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
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
