// import { useState } from "react";
// import Feedbackitem from "./components/Feedbackitem";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
// import FeedbackData from "./data/FeedbackData"
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from "./components/FeedbackForm";
import AboutPages from "./Pages/AboutPages";
import FeedbackDetails from "./components/FeedbackDetails";
import { FeedbackProvider } from "./Context/FeedbackContext";

function App() {
  

 return (
 <>
   <FeedbackProvider>
    <Router>
      <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
               }/>
            
            <Route path="/about" element={<AboutPages/>} />
            <Route path="/feedback/:id" element={<FeedbackDetails />} />
          </Routes>
        </div>
    </Router>
    </FeedbackProvider> 
  </>
 )
}

export default App;



























































// import FeedbackItem from "./components/FeedbackItem";
// import Header from "./components/Header";
// // import MovieList from "./components/MovieList";
// // import card from "./components/MovieList";
// function App() {
// //   const person = "Vincent";
// //   const people = {
// //     name: "Tade",
// //     age: 40
// //   };

// //   const student = [
// //     {id: 1, name: "vincent"},
// //     {id: 2, name: "Harrison"},
// //     {id: 3, name: "Idris"},
// //     {id: 4, name: "Iremide"},
// //     {id: 5, name: "Lucy"},
// //     {id: 6, name: "Dennis"},
// //   ];

//   // const showStudent = true;
//   return (
//     <>
//        <Header />
//        <div className="container">
//           <FeedbackItem />
//        </div>
//       {/* <Header text="vincent"/>
//         <h1>Hello {person}!...</h1>
//         <div className="">
//            <h4>My name is {people.name} and i am {people.age} years</h4>

        
//          {showStudent ?
//           (<ul>
//             {student.map((stud, index) =>(
//               <li key={index}>{stud.name}</li>
//             ))}
//           </ul>)
//           : <p> No items yet</p>}
          
//           {showStudent &&
//           (<ul>
//             {student.map((stud, index) =>(
//               <li key={index}>{stud.name}</li>
//             ))}
//           </ul>)}
           
//        </div>
      
//       <div className="container">
//         <MovieList />
//       </div> */}

//     </>
//   )
// }

// export default App
