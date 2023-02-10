import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";


export default function Body() {

    return(
      <main>
            <h1 className="body--title">MD Mahabub</h1>
            <p>Software Developer</p>
            {/* <p>Web Developer</p> */}
            <p>Website link</p>

            <div>
                <button className="button">Email</button>
                <button className="lkd"><SocialIcon url="https://www.linkedin.com/in/md-mahabub-5b3853177/" />Linkedin</button>
            </div>

            <div>
                <h3>About</h3>
                <p>I am a FrontEnd Developer. I am learning React js and other frameworks for my developement skill purpose.
                I am also interested in Full-Stack web development with Nodejs. I try to develop my projects with best practices and 
                following standards. I am passionate about new things to learn. I am also a researcher in Blockchain Technology field.
                I hold Bachelors degree in Computer Science & Engineering (CSE), American International University-Bangladesh. </p>

                <h3>Interests</h3>
                <p>Food expert, Home cook, Reader, Researcher, Internet fanatic, Digital video gamer, News Seeker, Foody </p>
                
            </div>
        </main>
    )
}


