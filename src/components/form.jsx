import React from "react";
import ReactDOM from "react-dom";
import photo from "../my-dp.jpg"; //need to import the image in this way " create react app"

export default function Form() {
    return (
       <div className="container">
            <header> 
                <img src={photo} alt={"MD Mahabub"} className="face"/>
            </header>     
              
            <main>
                <h1>MD Mahabub</h1>
                <p>Software Developer</p>
                <p>Web Developer</p>
                <p>Website link</p>

                <div>
                    <button>Email</button>
                    <button>Linkedin</button>
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
            
            <footer>   
              
                <p>© 2023 MD Mahabub</p> 
                
            </footer>

       </div>
    );
}