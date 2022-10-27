import './App.css';
import Profile from './components/ProfileSection';
import Links from './components/LinksSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';

function App() {
  return (
  <div id='stage1web'>
      <div className='stage1task'>
        <section className="main-section">
          <div className='content'>
              <Profile/>
              <Links/> 
              <SocialSection/>
              <Footer/>
          </div>
        </section>
      </div>
  </div>
  );
}

export default App;
