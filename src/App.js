import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Categories/>
     <Form/>
     <Footer/>
    </div>
  );
}

export default App;
