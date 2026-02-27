import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='image_container'>
          <img src='/sadhampter.png' className="App-logo" alt="logo" />
        </div>
        <div className='button_container'>
          <button className='button-85' onClick={() => {
            fetch('http://192.168.1.196:3001/shutdown')
              .then(response => response.text())
              .then(data => {
                console.log(data);
              });
          }}>
            Shutdown
          </button>
        
          <button className='button-85' onClick={() => {
            fetch('http://192.168.1.196:3001/sleep')
              .then(response => response.text())
              .then(data => {
                console.log(data);
              });
          }}>
            Sleep
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
