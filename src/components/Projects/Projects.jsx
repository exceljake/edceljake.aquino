import '../Projects/Projects.css'
import Logo from '../../img/avion-logo.svg'
import Banking from '../../img/banking-app-img.png'
import Tic from '../../img/tictactoe-img.png'
import Momentum from '../../img/momentum-app-img.png'
import Landing from '../../img/landing-page-img.png'
import Flex from '../../img/chessboard-flex-img.png'
import Grid from '../../img/chessboard-grid-img.png'
import Survey from '../../img/survey-form-img.png'
import Tribute from '../../img/tribute-page-img.png'
// import {BrowserRouter as Link} from 'react-router-dom';


const Projects = () => {

  return (
    <main className='p'>
      {/* 2 sections distinguish headline and projects container */}
        <section className="p-headline"> 
            <p className='p-top-title'>My Projects at</p> 
            <img src={Logo} alt="" width="220"/>
        </section>
        <section className="p-projects-section">
          <div className="p-projects-container">
              <div className="p-projects">
                <img src={Banking} alt="" className="p-projects-img" />
                <div className="p-projects-title-container">
                  <h1 className='p-projects-titles'>Banking App</h1>
                  <p>A banking and budgetting app to be able to deposit, withdraw, transfer and budget daily incomes and expenses. Built with javascript.</p>
                </div>
                  <div className="p-projects-button-container">
                    <button className='p-projects-btn' onClick={() => window.open( 'https://exceljake.github.io/frontend-banking-app/home-page-html/index.html')} >Demo</button>
                    <button className='p-projects-btn' onClick={() => window.open( 'https://github.com/exceljake/exceljake.github.io/tree/main/frontend-banking-app')} >Code</button>
                  </div>
              </div>
              <div className="p-projects">
              <img src={Tic} alt="" className="p-projects-img" />
              <div className="p-projects-title-container">
                  <h1 className='p-projects-titles'>Tic Tac Toe</h1>
                  <p>A tic-tac-toe game which tells users whose turn it is, as well as the restart button to restart the game. Will also display winner of the game, it is built with javascript.</p>
                </div>
                  <div className="p-projects-button-container">
                    <button className='p-projects-btn' onClick={() => window.open( 'https://exceljake.github.io/tic-tac-toe/index.html')} >Demo</button>
                    <button className='p-projects-btn' onClick={() => window.open( 'https://github.com/exceljake/exceljake.github.io/tree/main/tic-tac-toe')} >Code</button>
                  </div>
              </div>
              <div className="p-projects">
              <img src={Momentum} alt="" className="p-projects-img" />
              <div className="p-projects-title-container">
                  <h1 className='p-projects-titles'>Momentum App</h1>
                  <p>A Momentum Chrome Extension clone.</p>
                </div>
                  <div className="p-projects-button-container">
                    <button className='p-projects-btn' onClick={() => window.open( 'https://exceljake.github.io/momentum-app/index.html')} >Demo</button>
                    <button className='p-projects-btn' onClick={() => window.open( 'https://github.com/exceljake/exceljake.github.io/tree/main/momentum-app')} >Code</button>
                  </div>
              </div>
          </div>
          <div className="p-projects-container">
              <div className="p-projects">
                <img src={Landing} alt="" className="p-projects-img" />
                <div className="p-projects-title-container">
                  <h1 className='p-projects-titles'>Landing Page</h1>
                  <p>A Nike sandals landing page built with HTML and CSS.</p>
                </div>
                  <div className="p-projects-button-container">
                    <button className='p-projects-btn' onClick={() => window.open( 'https://exceljake.github.io/landing-page/index.html')} >Demo</button>
                    <button className='p-projects-btn' onClick={() => window.open( 'https://github.com/exceljake/exceljake.github.io/tree/main/landing-page')} >Code</button>
                  </div>
              </div>
              <div className="p-projects">
              <img src={Flex} alt="" className="p-projects-img" />
              <div className="p-projects-title-container">
                  <h1 className='p-projects-titles'>Chessboard (Flex)</h1>
                  <p>A chessboard built to explore more about flex</p>
                </div>
                  <div className="p-projects-button-container">
                    <button className='p-projects-btn' onClick={() => window.open( 'https://exceljake.github.io/chessboard-flex/index.html')} >Demo</button>
                    <button className='p-projects-btn' onClick={() => window.open( 'https://github.com/exceljake/exceljake.github.io/tree/main/chessboard-flex')} >Code</button>
                  </div>
              </div>
              <div className="p-projects">
              <img src={Grid} alt="" className="p-projects-img" />
              <div className="p-projects-title-container">
                  <h1 className='p-projects-titles'>Chessboard (Grid)</h1>
                  <p>A chessboard built to explore more about grid</p>
                </div>
                  <div className="p-projects-button-container">
                    <button className='p-projects-btn' onClick={() => window.open( 'https://exceljake.github.io/chessboard-grid/index.html')} >Demo</button>
                    <button className='p-projects-btn' onClick={() => window.open( 'https://github.com/exceljake/exceljake.github.io/tree/main/chessboard-grid')} >Code</button>
                  </div>
              </div>
          </div>
          <div className="p-projects-container">
              <div className="p-projects">
                <img src={Survey} alt="" className="p-projects-img" />
                <div className="p-projects-title-container">
                  <h1 className='p-projects-titles'>Survey Form</h1>
                  <p>A survey form page built to practice knowledge about HTML forms.</p>
                </div>
                  <div className="p-projects-button-container">
                    <button className='p-projects-btn' onClick={() => window.open( 'https://exceljake.github.io/survey-form/index.html')} >Demo</button>
                    <button className='p-projects-btn' onClick={() => window.open( 'https://github.com/exceljake/exceljake.github.io/tree/main/survey-form')} >Code</button>
                  </div>
              </div>
              <div className="p-projects">
              <img src={Tribute} alt="" className="p-projects-img" />
              <div className="p-projects-title-container">
                  <h1 className='p-projects-titles'>Tribute Page</h1>
                  <p>Very first project made about HTML and CSS.</p>
                </div>
                  <div className="p-projects-button-container">
                    <button className='p-projects-btn' onClick={() => window.open( 'https://exceljake.github.io/tribute-page/index.html')} >Demo</button>
                    <button className='p-projects-btn' onClick={() => window.open( 'https://github.com/exceljake/exceljake.github.io/tree/main/tribute-page')} >Code</button>
                  </div>
              </div>
          </div>
        </section>
    </main>
  )
}

export default Projects