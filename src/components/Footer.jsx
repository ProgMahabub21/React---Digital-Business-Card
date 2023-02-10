import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from "react-social-icons";


export default function Footer() {
 return(
    <footer>   
                  
                   <div className="footer--social">     
                        <SocialIcon url="https://www.facebook.com/md.mahabub.581" className='facebook' />
                        
                        <SocialIcon url="https://twitter.com/mdmahabub_1" className='twiiter'/>
                       
                        <SocialIcon url="https://www.instagram.com/mdmahabub_1/" className='insta' />
                        
                        <SocialIcon url="https://www.github.com/ProgMahabub21" className='github'/>
                   </div>

                    <p className="footer--license">© 2023 MD Mahabub</p> 
                
    </footer>

 )


}