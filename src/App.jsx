import styles from './App.module.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Trendings from './components/Trendings';

function App() {
  return (
    <div className={styles.background}>
        <Header/>
        <Banner/>
        <Trendings/>
        
    </div>
  );
}

export default App;
