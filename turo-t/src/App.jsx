// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Navbar";
import BannerForm from "./components/Form&banner";
function App() {
  return (
    <>
    <Header />
    <BannerForm/>

      <p className="style-text">Find your drive</p>
      <div class="ContentBox">
        <h1 class="StyledText" >Explore the world's largest car sharing marketplace</h1>
        <div className="ContextColor"></div></div>
        <div className="slider-section">
       <p>Browse by make</p>   
      </div>
    </>
   
      
)
  }



export default App;

