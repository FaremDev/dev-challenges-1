import './App.css';
import Uploader from './components/Uploader';
import UploaderLoading from './components/UploaderLoading';
import UploaderSuccess from './components/UploaderSuccess';

function App() {
  return (
    <div className="App">
      {/*<Uploader />*/}
      <UploaderSuccess />
    </div>
  );
}

export default App;
