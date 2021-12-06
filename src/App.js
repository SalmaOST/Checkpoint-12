import './App.css';
import logo from './logo.jfif'
import video from './video2.mp4'


function App() {
  return (
    <div>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={logo} alt="Image1" />
        <br />
        <img src="/télécharger (1).jfif" alt="Image2" />
      </div>
      <video width={320} height={240} controls>
          <source src={video} type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
