import './App.css';
import Cat from './Cat';
import Dog from "./Dog";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <Dog />
        <hr />
      <Cat />

        <Footer />
    </div>
  );
}

export default App;
