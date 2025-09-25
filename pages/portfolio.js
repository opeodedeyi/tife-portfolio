import { useEffect, Fragment } from "react";
import Link from "next/link";
import Header from "../components/header/Header";
import Skill from "../components/skill/Skill";
import CustomButton from "../components/custombutton/CustomButton";
import "./portfolio.css";

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
                <p className="portfolio-container-introduction">
                    <span className="home-container-introduction-special">
                        See
                    </span>{" "}
                    some of my Skills and Case-studies.
                </p>
            </div>

            <Skill />

            <div className="portfolio-projects-section">
                <div className="portfolio-category">
                    <h2 className="portfolio-category-heading">
                        Data Science Projects
                    </h2>
                    <div className="portfolio-myworks">
                        <div className="portfolio-card">
                            <div className="portfolio-card-image">
                                <img
                                    src="/credit_risk_scoring_model.jpg"
                                    alt="Credit Risk Scoring Model"
                                />
                            </div>
                            <div className="portfolio-card-content">
                                <p className="portfolio-card-title">
                                    Credit Risk Scoring Model (Loan Default)
                                </p>
                                <p className="portfolio-card-subtitle">
                                    Developed a machine learning model to
                                    predict loan defaults and minimize NPAs.
                                    Identified key risk drivers such as credit
                                    score, loan purpose, and home ownership to
                                    guide smarter lending decisions.
                                </p>
                                <Link
                                    className="portfolio-card-btn"
                                    target="_blank"
                                    href="https://github.com/boluwatifeoluwaseun/Decision-Tree--Credit-Risk-Scoring-Model-Loan-Default-"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <div className="portfolio-card-image">
                                <img
                                    src="/personal_loan_campaign.jpg"
                                    alt="Personal Loan Campaign"
                                />
                            </div>
                            <div className="portfolio-card-content">
                                <p className="portfolio-card-title">
                                    Personal Loan Campaign (Customer
                                    Acquisition)
                                </p>
                                <p className="portfolio-card-subtitle">
                                    Built a classification model to identify
                                    depositors most likely to purchase personal
                                    loans. Uncovered patterns in income,
                                    education, and spending habits to improve
                                    marketing efficiency and boost conversion
                                    rates.
                                </p>
                                <Link
                                    className="portfolio-card-btn"
                                    target="_blank"
                                    href="https://github.com/boluwatifeoluwaseun/Decision-Tree-Personal-Loan-Campaign-Case-Study-AllLife-Bank-"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <div className="portfolio-card-image">
                                <img
                                    src="/churn_prediction.jpeg"
                                    alt="Customer Churn Prediction"
                                />
                            </div>
                            <div className="portfolio-card-content">
                                <p className="portfolio-card-title">
                                    Customer Churn Prediction (Banking
                                    Customers)
                                </p>
                                <p className="portfolio-card-subtitle">
                                    Created a neural network model to predict
                                    which customers are at risk of leaving the
                                    bank. Analyzed demographics, account
                                    activity, and product usage to enable
                                    proactive retention strategies.
                                </p>
                                <Link
                                    className="portfolio-card-btn"
                                    target="_blank"
                                    href="https://github.com/boluwatifeoluwaseun/Neural-Network---Customer-Churn-Prediction"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-category">
                    <h2 className="portfolio-category-heading">
                        Data Analytics Projects
                    </h2>
                    <div className="portfolio-myworks">
                        <div className="portfolio-card">
                            <div className="portfolio-card-image">
                                <img
                                    src="/cust_segment.png"
                                    alt="Customer Segmentation Analysis"
                                />
                            </div>
                            <div className="portfolio-card-content">
                                <p className="portfolio-card-title">
                                    Customer Segmentation Analysis
                                </p>
                                <p className="portfolio-card-subtitle">
                                    Conducted a survey-based analysis of
                                    students across nanodegree programs on an
                                    e-learning platform. Generated actionable
                                    customer segments to inform data-driven
                                    marketing strategies and boost course sales.
                                </p>
                                <Link
                                    className="portfolio-card-btn"
                                    target="_blank"
                                    href="https://boluwatifeoluwaseun.substack.com/p/customer-segmentation-analysis?r=17ku7g&utm_campaign=post&utm_medium=web"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="portfolio-card">
                            <div className="portfolio-card-image">
                                <img
                                    src="/disney_screenshot.png"
                                    alt="Sales Performance Analysis"
                                />
                            </div>
                            <div className="portfolio-card-content">
                                <p className="portfolio-card-title">
                                    Sales Performance Analysis
                                </p>
                                <p className="portfolio-card-subtitle">
                                    Analyzed sales data to uncover product
                                    category trends and store profitability.
                                    Delivered insights through interactive Power
                                    BI dashboards to support Disney Toys&apos;
                                    expansion strategy.
                                </p>
                                <Link
                                    className="portfolio-card-btn"
                                    target="_blank"
                                    href="https://boluwatifeoluwaseun.substack.com/p/sales-performance-analysis"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Portfolio;
