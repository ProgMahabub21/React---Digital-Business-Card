import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon,  } from "react-social-icons";




export default function Body() {

    return(
      <main>
            <h1 className="body--title">MD Mahabub Islam</h1>
            <p className="designation">Frontend Developer</p>
            {/* <p>Web Developer</p> */}
            <p className="weblink">progmahabub21.github.io/My-Website/</p>

            <div>
                <button className="button" onClick={() => window.location = 'mailto:imahbub.1999@gmail.com'}>
                    <SocialIcon network="email" bgColor="white" fgColor="black" style={{ height: 30, width: 30 }}/>Email</button>
                <button className="lkd"><SocialIcon url="https://www.linkedin.com/in/md-mahabub-5b3853177/" 
                style={{ height: 25, width: 25 }} bgColor="white"  />Linkedin</button>
            </div>

            <div>
                <h3 className="about--title">About</h3>
                <p className="about--content">I am a Frontend Developer. I am learning React, a popular js library and Next.js for my developement skill purpose.
                I am highly interested in Full-Stack Web development with Js. I try to develop my projects with best practices and 
                following standards. I love learning new things. I am also a researcher in Blockchain Technology field.
                I are persuing my Bachelors degree in Computer Science & Engineering (CSE) from American International University-Bangladesh. </p>

                <h3 className="interest--title">Interests</h3>
                <p className="interest--content">Food expert, Home cook, Reader, Researcher, Internet fanatic, Digital video gamer, News Seeker, Foody </p>
                
            </div>
        </main>
    )
}


