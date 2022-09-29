import "../About/About.css";
import html from '../../img/html-icon.png'
import css from '../../img/css-icon.png'
import js from '../../img/js-icon.png'
import react from '../../img/react-icon.png'
import ubuntu from '../../img/ubuntu-icon.png'
import ruby from '../../img/ruby-icon.png'
import bootstrap from '../../img/bootstrap-icon.png'
import heroku from '../../img/heroku-icon.png'
import psql from '../../img/psql-icon.png'
import tailwind from '../../img/tailwind-icon.png'


const About = () => {
  return (
    <div className="a">
        <div className="a-card front">
            <div className="a-fe">
              <div className="a-fe-title">Software Engineering Skills</div>
              <div className="a-fe-skills">
                <img src={html} alt="" className="a-fe-html" />
                <img src={css} alt="" className="a-fe-css" />
                <img src={js} alt="" className="a-fe-js" />
                <img src={react} alt="" height="48" width="48" className="a-fe-reactjs" />
                <img src={ubuntu} alt="" className="a-fe-ubuntu" /> 
              </div>

              <div className="a-fe-skills">
                <img src={ruby} alt="" className="a-fe-ruby" />
                <img src={bootstrap} alt="" className="a-fe-boostrap" />
                <img src={heroku} alt="" className="a-fe-heroku" />
                <img src={psql} alt="" className="a-fe-psql" />
                <img src={tailwind} alt="" className="a-fe-tailwind" />
              </div>
            </div>
        </div>
    </div>
        )
}

export default About
