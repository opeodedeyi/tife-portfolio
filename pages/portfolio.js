import { useEffect, Fragment } from "react";
import Link from "next/link";
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

            <div className="portfolio-myworks">
                <div href="https://docs.google.com/spreadsheets/d/1cjc1YIpO4q-TicoFtAHAPD72uBNxdpUa/edit#gid=1270802026" className="portfolio-card">
                    <div className="portfolio-card-image">
                        <img src="/cust_segment.png" alt="banner Image" />
                    </div>
                    <div className="portfolio-card-content">
                        <p className="portfolio-card-title">Customer Segmentation Analysis</p>
                        <p className="portfolio-card-subtitle">A survey was conducted among students enrolled in various nanodegree programs on an e-learning platform. By analyzing the collected data, valuable insights were gathered, empowering data-driven marketing decisions that will ultimately boost sales for the e-learning platform.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Portfolio