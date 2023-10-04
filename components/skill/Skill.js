import "./Skill.css";
import Image from 'next/image';

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
                <Image src={html} alt="HTML" className="tech-icon" width="50" height="50" />
                <Image src={css} alt="CSS" className="tech-icon" width="50" height="50" />
                <Image src={javascript} alt="JavaScript" className="tech-icon" width="50" height="50" />
                <Image src={node} alt="NodeJS" className="tech-icon" width="50" height="50" />
                <Image src={vue} alt="Vue" className="tech-icon" width="50" height="50" />
                <Image src={nuxt} alt="Nuxt" className="tech-icon" width="50" height="50" />
                <Image src={react} alt="React" className="tech-icon" width="50" height="50" />
                <Image src={python} alt="Python" className="tech-icon" width="50" height="50" />
                <Image src={django} alt="Django" className="tech-icon" width="50" height="50" />
                <Image src={flask} alt="Flask" className="tech-icon" width="50" height="50" />
                {/* duplicate */}
                <Image src={html} alt="HTML" className="tech-icon" width="50" height="50" />
                <Image src={css} alt="CSS" className="tech-icon" width="50" height="50" />
                <Image src={javascript} alt="JavaScript" className="tech-icon" width="50" height="50" />
                <Image src={node} alt="NodeJS" className="tech-icon" width="50" height="50" />
                <Image src={vue} alt="Vue" className="tech-icon" width="50" height="50" />
                <Image src={nuxt} alt="Nuxt" className="tech-icon" width="50" height="50" />
                <Image src={react} alt="React" className="tech-icon" width="50" height="50" />
                <Image src={python} alt="Python" className="tech-icon" width="50" height="50" />
                <Image src={django} alt="Django" className="tech-icon" width="50" height="50" />
                <Image src={flask} alt="Flask" className="tech-icon" width="50" height="50" />
            </div>
        </div>
    )
}

export default Skill
