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
                <p className="home-container-introduction"><span className="home-container-introduction-special">I&apos;m Tife,</span> a passionate data-driven professional.</p>
            </div>

            <div className="home-container-socials">
                <p className="home-container-content">I am a data-driven professional with a Master&apos;s in Business Analytics and a postgraduate degree in Artificial Intelligence and Machine Learning. I&apos;m passionate about using data to solve business problems, whether by developing analytical solutions or building and deploying models.</p>

                <p className="home-container-content">Known for my strong work ethic, adaptability, data storytelling, critical thinking, and problem-solving skills, I continuously seek opportunities to learn and grow.</p>

                <p className="home-container-content">When I&apos;m not reading an inspirational book, you&apos;ll likely find me working on data science and analytics projects in my spare time.</p>

                <p className="home-container-content">If you&apos;re looking for someone who can turn data into impact and deliver results, I&apos;d be glad to connect. You can also explore some of my projects in my portfolio below.</p>

                <p className="home-normal-text">Do you want to discuss or work with me?</p>
                <Link href='/contact' className='button-normal'>Let&apos;s Talk</Link>
            </div>
        </Fragment>
    )
}

export default Home