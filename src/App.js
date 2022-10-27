import './App.css';
import Profile from './components/profile';
import Links from './components/links';

function App() {
  return (
    <section className="main-section">
      <div className='content'>
        <div className="profile-section">
          <Profile/>
        </div>
        <div>
          <Links/>
        </div>
      </div>
    </section>
  );
}

export default App;
