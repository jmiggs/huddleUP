import React from "react";
import "./footer.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa";

const footer = props => {
    return (
        <div className="footer">
            <div className="huddleUP-repo"> 
                <h1 className="engineer-name">huddleUP</h1>
                <a href="https://github.com/jmiggs/huddleUP" target="_blank" rel="noopener noreferrer" className="huddleUP-icon"><FaGithubAlt /></a>
            </div>
            <div className="engineers-contacts-container"> 
                <div className="contact-info-container"> 
                    <h1 className="engineer-name">Bryan Linda</h1>
                    <div className="symbol-icons-box"> 
                        <a href="https://www.linkedin.com/in/bryan-linda-44389794/" target="_blank" rel="noopener noreferrer" className="footer-icon"><AiFillLinkedin /></a>
                        <a href="https://github.com/blindaa121" target="_blank" rel="noopener noreferrer" className="footer-icon"><AiFillGithub /></a>
                    </div>
                </div>
                <div className="contact-info-container">
                    <h1 className="engineer-name">Miguel DelaCruz</h1>
                    <div className="symbol-icons-box"> 
                        <a href="https://www.linkedin.com/in/jdelacruzm/" target="_blank" rel="noopener noreferrer" className="footer-icon"><AiFillLinkedin /></a>
                        <a href="https://github.com/jmiggs" target="_blank" rel="noopener noreferrer" className="footer-icon"><AiFillGithub /></a>
                    </div>
                </div>
                <div className="contact-info-container"> 
                    <h1 className="engineer-name">Ngoc Ly</h1>
                    <div className="symbol-icons-box"> 
                        <a href="https://www.linkedin.com/in/ngocthily/" target="_blank" rel="noopener noreferrer" className="footer-icon"><AiFillLinkedin /></a>
                        <a href="https://github.com/ngocthily" target="_blank" rel="noopener noreferrer" className="footer-icon"><AiFillGithub /></a>
                    </div>
                </div>
                <div className="contact-info-container">
                    <h1 className="engineer-name">Dorian Brown</h1>
                    <div className="symbol-icons-box">
                        <a href="https://www.linkedin.com/in/dorian-izaiah-brown-1430b3193/" target="_blank" rel="noopener noreferrer" className="footer-icon"><AiFillLinkedin /></a>
                        <a href="https://github.com/DBsaiyan1321" target="_blank" rel="noopener noreferrer" className="footer-icon"><AiFillGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default footer;