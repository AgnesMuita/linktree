import './App.css';
import Profile from './components/profile';
import Links from './components/links';

function App() {
  return (
  <div id='stage1web'>
      <div className='stage1task'>
        <section className="main-section">
          <div className='content'>
              <Profile/>
              <Links/>
          </div>
        </section>
      </div>
  </div>
  );
}

export default App;
