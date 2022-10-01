import './Intro.css';
import Me from '../../img/edcel.png'

const Intro = () => {

    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, my name is</h2>
                    <h1 className='i-name'>Edcel Jake Aquino</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Full Stack Engineer</div>
                            <div className="i-title-item">Front End Engineer</div>
                            <div className="i-title-item">Back  End Engineer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        A 20 year-old Software Engineer.
                    </div>
                </div>
            </div>  
            <div className="i-right">
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro