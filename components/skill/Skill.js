import "./Skill.css";
import Image from 'next/image';

const Skill = () => {
    return (
        <div className="parent-container">
            <div className="tech-container">
                <Image src="/svg/python.svg" alt="Python" className="tech-icon" width="50" height="50" />
                <Image src="/svg/googleanalytics.svg" alt="googleanalytics" className="tech-icon" width="50" height="50" />
                <Image src="/svg/github.svg" alt="github" className="tech-icon" width="50" height="50" />
                <Image src="/svg/looker.svg" alt="looker" className="tech-icon" width="50" height="50" />
                <Image src="/svg/r.svg" alt="r" className="tech-icon" width="50" height="50" />
                <Image src="/svg/mysql.svg" alt="mysql" className="tech-icon" width="50" height="50" />
                <Image src="/svg/tableau.svg" alt="tableau" className="tech-icon" width="50" height="50" />
                <Image src="/svg/microsoftexcel.svg" alt="microsoftexcel" className="tech-icon" width="50" height="50" />
                {/* duplicate */}
                <Image src="/svg/python.svg" alt="Python" className="tech-icon" width="50" height="50" />
                <Image src="/svg/googleanalytics.svg" alt="googleanalytics" className="tech-icon" width="50" height="50" />
                <Image src="/svg/github.svg" alt="github" className="tech-icon" width="50" height="50" />
                <Image src="/svg/looker.svg" alt="looker" className="tech-icon" width="50" height="50" />
                <Image src="/svg/r.svg" alt="r" className="tech-icon" width="50" height="50" />
                <Image src="/svg/mysql.svg" alt="mysql" className="tech-icon" width="50" height="50" />
                <Image src="/svg/tableau.svg" alt="tableau" className="tech-icon" width="50" height="50" />
                <Image src="/svg/microsoftexcel.svg" alt="microsoftexcel" className="tech-icon" width="50" height="50" />
            </div>
        </div>
    )
}

export default Skill
