import { useEffect, Fragment } from "react";
import Header from "../components/header/Header";
import Skill from "../components/skill/Skill";
import './portfolio.css'

const Portfolio = () => {
    useEffect(() => {
        document.title = "Boluwatife Oluwaseun";
    }, []);
    return (
        <Fragment>
            <Header />

            <div className="portfolio-container">
                <p className="portfolio-container-introduction"><span className="home-container-introduction-special">See</span> some of my Skills and Case-studies.</p>
            </div>

            <Skill />
        </Fragment>
    )
}

export default Portfolio