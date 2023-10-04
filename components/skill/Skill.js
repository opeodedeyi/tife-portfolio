import "./Skill.css";

import html from '../../assets/svg/html.svg'
import css from '../../assets/svg/css.svg'
import javascript from '../../assets/svg/javascript.svg'
import node from '../../assets/svg/node.svg'
import vue from '../../assets/svg/vue.svg'
import nuxt from '../../assets/svg/nuxt.svg'
import react from '../../assets/svg/react.svg'
import python from '../../assets/svg/python.svg'
import django from '../../assets/svg/django.svg'
import flask from '../../assets/svg/flask.svg'

const Skill = () => {
    return (
        <div className="parent-container">
            <div className="tech-container">
                <img src={html} alt="HTML" className="tech-icon" />
                <img src={css} alt="CSS" className="tech-icon" />
                <img src={javascript} alt="JavaScript" className="tech-icon" />
                <img src={node} alt="NodeJS" className="tech-icon" />
                <img src={vue} alt="Vue" className="tech-icon" />
                <img src={nuxt} alt="Nuxt" className="tech-icon" />
                <img src={react} alt="React" className="tech-icon" />
                <img src={python} alt="Python" className="tech-icon" />
                <img src={django} alt="Django" className="tech-icon" />
                <img src={flask} alt="Flask" className="tech-icon" />
                {/* duplicate */}
                <img src={html} alt="HTML" className="tech-icon" />
                <img src={css} alt="CSS" className="tech-icon" />
                <img src={javascript} alt="JavaScript" className="tech-icon" />
                <img src={node} alt="NodeJS" className="tech-icon" />
                <img src={vue} alt="Vue" className="tech-icon" />
                <img src={nuxt} alt="Nuxt" className="tech-icon" />
                <img src={react} alt="React" className="tech-icon" />
                <img src={python} alt="Python" className="tech-icon" />
                <img src={django} alt="Django" className="tech-icon" />
                <img src={flask} alt="Flask" className="tech-icon" />
            </div>
        </div>
    )
}

export default Skill
