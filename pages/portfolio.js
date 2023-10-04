import { useEffect, Fragment } from "react";
import Header from "../components/header/Header";
import Image from 'next/image'
import Link from "next/link";
import './portfolio.css'

const Portfolio = () => {
    useEffect(() => {
        document.title = "Boluwatife Oluwaseun";
    }, []);
    return (
        <Fragment>
            <Header />

            <div className="portfolio-container">
                <p className="portfolio-container-introduction"><span className="home-container-introduction-special">See</span> some of my works and case studies.</p>
            </div>

        </Fragment>
    )
}

export default Portfolio