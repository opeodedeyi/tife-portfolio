import { useEffect, Fragment } from "react";
import Link from "next/link";
import Header from "../components/header/Header";
import Skill from "../components/skill/Skill";
import CustomButton from "../components/custombutton/CustomButton";
import './portfolio.css'

const Portfolio = () => {
    useEffect(() => {
        document.title = "Boluwatife Oluwaseun";
    }, []);

    const goToProject = (link) => {
        console.log(`Clicked link to - ${link}`);
    };

    return (
        <Fragment>
            <Header />

            <div className="portfolio-container">
                <p className="portfolio-container-introduction"><span className="home-container-introduction-special">See</span> some of my Skills and Case-studies.</p>
            </div>

            <Skill />

            <div className="portfolio-myworks">
                <div className="portfolio-card">
                    <div className="portfolio-card-image">
                        <img src="/cust_segment.png" alt="banner Image" />
                    </div>
                    <div className="portfolio-card-content">
                        <p className="portfolio-card-title">Customer Segmentation Analysis</p>
                        <p className="portfolio-card-subtitle">A survey was conducted among students enrolled in various nanodegree programs on an e-learning platform. By analyzing the collected data, valuable insights were gathered, empowering data-driven marketing decisions that will ultimately boost sales for the e-learning platform.</p>
                        <Link className="portfolio-card-btn" target="_blank" href="https://boluwatifeoluwaseun.substack.com/p/customer-segmentation-analysis?r=17ku7g&utm_campaign=post&utm_medium=web">Read More</Link>
                    </div>
                </div>

                <div className="portfolio-card">
                    <div className="portfolio-card-image">
                        <img src="/disney_screenshot.png" alt="banner Image" />
                    </div>
                    <div className="portfolio-card-content">
                        <p className="portfolio-card-title">Sales Performance Analysis</p>
                        <p className="portfolio-card-subtitle">I analysed sales data using Microsoft Power BI to identify key product categories and store profitability, offering insights for Disney Toys' expansion strategy.</p>
                        <Link className="portfolio-card-btn" target="_blank" href="https://boluwatifeoluwaseun.substack.com/p/sales-performance-analysis">Read More</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Portfolio