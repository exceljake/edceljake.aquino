import "../About/About.css";
import html from '../../img/html-icon.png'
import css from '../../img/css-icon.png'
import js from '../../img/js-icon.png'
import react from '../../img/react-icon.png'


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card"></div>
        <div className="a-card front">
            <div className="a-fe">
               <div className="a-fe-title">Front End Skills</div>
               <div className="a-fe-skills">
                <img src={html} alt="" className="a-fe-html" />
                <img src={css} alt="" className="a-fe-css" />
                <img src={js} alt="" className="a-fe-js" />
                <img src={react} alt="" height="48" width="48" className="a-fe-reactjs" />
               </div>
            </div>
        </div>
      </div>
      <div className="a-right">
        <div className="a-right-title">About me</div>
        <div className="a-right-desc">
        <p> As a Software Engineer, I have become disciplined to be organised in my work, as well as being driven to achieve greatness in my career. I am also very passionate about Software Development because I enjoy every corner of it. Together with being passionate, I am also greatly motivated by my eagerness to learn more in my career and to be better everyday, that is why I do my very best in all my projects. </p>
        </div>
      </div>
    </div>
  )
}

export default About
