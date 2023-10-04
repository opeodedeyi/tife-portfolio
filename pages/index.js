import { useEffect, Fragment } from "react";
import Header from "../components/header/Header";
import Image from 'next/image'
import Link from "next/link";
import './index.css'

const Home = () => {
    useEffect(() => {
        document.title = "Boluwatife Oluwaseun";
    }, []);
    return (
        <Fragment>
            <Header />

            <div className="background-image"></div>
            
            <div className="home-container">
                <p className="home-container-introduction"><span className="home-container-introduction-special">I&apos;m Boluwatife,</span> a passionate data-driven professional.</p>
            </div>

            <div className="home-container-socials">
                <p className="home-container-content">A data-driven professional with a master&apos;s degree in Business Analytics. My expertise lies in utilizing data to uncover valuable insights and drive impactful business decisions.</p>
                <p className="home-normal-text">Do you want to discuss or work with me?</p>
                <Link href='/contact' className='button-normal'>Let&apos;s Talk</Link>
            </div>
        </Fragment>
    )
}

export default Home