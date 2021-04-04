import logo from './logo.svg';
import './App.css';
import Layout from '../src/component/Layout/Layout'
import BurgerBuilder from './container/BurgerBuilder';
function App() {
  return (
    <div className="App">
     <Layout>
       <BurgerBuilder/>
     </Layout>
    </div>
  );
}

export default App;
