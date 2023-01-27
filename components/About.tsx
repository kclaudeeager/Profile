import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg  ">
            <div className="flex">
                <div className="flex-full">
                   
                    <AboutCard
                        title="Web Design"
                        icon="/icons/code.svg"
                        description="I develop Front-End with both vanilla and Javascript frameworks."
                        projects={10} />
                        <AboutCard
                        title="Desktop Application"
                        icon="/icons/code.svg"
                        description="I develop Desktop Applications using JavaFX."
                        projects={10} />
                    <AboutCard
                        title="Mobile"
                        icon="/icons/phone.svg"
                        description="I develop Native and cross-platform mobile applications."
                        projects={20} />
                          <AboutCard
                        title="ML"
                        icon="/icons/phone.svg"
                        description="I develop Machine Learning applications specifically NLP and Computer Vision"
                        projects={5} />
                          <AboutCard
                        title="Research"
                        icon="/icons/phone.svg"
                        description="I spent 3 months in University of Michigan working on sentiment analysis and Text reframing over the negative sentiment texts"
                        projects={2} />
                </div>
                
                <div className="flex-full about-text">
                    {/* <h5 className="gray">Introduction</h5> */}
                    <h1 className="white">Hello, I&#39;m Claude Kwizera</h1>
                    <h3 className="white">Design is not just what it looks like. Design is how it works!</h3>
                    <p className="gray">I am software engineer and researcher , thrilled to solve problems in community using computer skills and critical thinking skills through
                     research. I keep my options open to different opptions.<br/><br/>
                    I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.</p>
                </div>
            </div>

            {/* <div className="flex partners justify-space">
                <Image src="/images/partners/wallety.png" height={45} width={180} alt="wallety" />
                <Image src="/images/partners/artisty.png" height={45} width={180} alt="artisty" />
                <Image src="/images/partners/khedma-lik.png" height={45} width={180} alt="khedma-lik" />
                <Image src="/images/partners/directy.png" height={45} width={180} alt="directy" />
                <Image src="/images/partners/telefy.png" height={45} width={180} alt="telefy" />
            </div> */}
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray pulse-button"><a href="https://github.com/kclaudeeager">{projects.toString()} projects</a></span>
        </div>
    )
}
