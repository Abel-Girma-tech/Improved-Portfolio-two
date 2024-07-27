import React from 'react'
import { GrView } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import {motion} from "framer-motion"
import { FiCheck } from "react-icons/fi";
import bookStoreImage from '../Compo/bookstore.jpg'
import restaurant from '../Compo/res.jpg'
import { MdOnlinePrediction } from "react-icons/md";


function Projects() {
    return (
 
        <div id="projects_div"> 
            <h1 id="Project_H_One">Exlopre some of my projects</h1>
            <div id="each_project_container_div">
                <div className='each_project_div'>
                    <div className="project_left_div">
                    <h3 className='projects_name'>#1 Public Library MERN System App</h3>
                        <img className="project_image" width="500px" src={bookStoreImage} alt="" />
                        <div className='check_code_orwebsite_btn_div'>
                            <a className="check_code_or_see_web" href="https://github.com/Abel-Girma-tech?tab=repositories">Code <FaCode className='code_web_check_icons'/></a>
                            <a className="check_code_or_see_web" href="https://library-mern-iby7.vercel.app/"><GrView className='code_web_check_icons'/><MdOnlinePrediction className='live_website'/></a>
                        </div>  
                    </div>
                    <div className="project_right_div">
                    <h3>Project Description</h3>
                        <p className="project_desc">My public library web application, built using the MERN stack, offers a seamless and secure experience for users to interact with a rich collection of books. Utilizing JWT authentication, users can effortlessly register and log in to access various features. Members of the public can read, add, or donate books, contributing to a growing library for all to enjoy. Additionally, our app includes robust administrative functionalities, allowing admins to efficiently add, delete, edit, and manage book entries. Users can easily sort books by category, ensuring they can quickly find their desired reads. This user-friendly platform fosters a collaborative and organized environment for book enthusiasts and administrators alike.</p>
                        <h3>Languages and Tools used</h3>
                        <h4>Frontend</h4>
                        <p> <FiCheck/> HTML5</p>
                        <p> <FiCheck/> CSS</p>
                        <p> <FiCheck/> Javascript</p>
                        <p> <FiCheck/> React.JS (JS Library)</p>
                        <h4> Backend</h4>
                        <p> <FiCheck/> Node.JS</p>
                        <p> <FiCheck/> Express.JS</p>
                        <p> <FiCheck/> MongoDB</p>
                        <p> <FiCheck/> Mongoose</p>
                        <h4>Security , Testing & Deployment</h4>
                        <p> <FiCheck/> Json Web Token (JWT)</p>
                        <p> <FiCheck/> Bcrypt</p>
                        <p> <FiCheck/> Git/Github</p>
                        <p> <FiCheck/> Postman</p>

                    </div>
                    
                </div>
                <div className='each_project_div'>
                    <div className="project_right_div">
                        <h3>Project Description</h3>
                        <p className="project_desc">My public library web application, built using the MERN stack, offers a seamless and secure experience for users to interact with a rich collection of books. Utilizing JWT authentication, users can effortlessly register and log in to access various features. Members of the public can read, add, or donate books, contributing to a growing library for all to enjoy. Additionally, our app includes robust administrative functionalities, allowing admins to efficiently add, delete, edit, and manage book entries. Users can easily sort books by category, ensuring they can quickly find their desired reads. This user-friendly platform fosters a collaborative and organized environment for book enthusiasts and administrators alike.</p>
                        <h3>Languages and Tools used</h3>
                        <h4>Frontend</h4>
                        <p> <FiCheck/> HTML5</p>
                        <p> <FiCheck/> CSS</p>
                        <p> <FiCheck/> Javascript</p>
                        <p> <FiCheck/> React.JS (JS Library)</p>
                        <h4> Backend :  N/A </h4>
                        <h4>Security , Testing & Deployment</h4>
                        <p> <FiCheck/> Json Web Token (JWT)</p>
                        <p> <FiCheck/> Bcrypt</p>
                        <p> <FiCheck/> Git/Github</p>
                        <p> <FiCheck/> Postman</p>
                    </div>

                    <div className="project_left_div">
                    
                            <h3 className='projects_name'> #2 Weather App</h3>
                            <img className="project_image" width="500px" src="https://cdn.dribbble.com/userupload/6432195/file/original-bc5ed9b1fbcec1bf17aec68ff6dce721.jpg?resize=400x300&vertical=center" alt="" />
                        <div className='check_code_orwebsite_btn_div'>
                            <a className="check_code_or_see_web" href="https://github.com/Abel-Girma-tech?tab=repositories">Code <FaCode className='code_web_check_icons'/></a>
                            <a className="check_code_or_see_web" href="https://react-weather-app-six-self.vercel.app/"><GrView className='code_web_check_icons'/><MdOnlinePrediction className='live_website'/></a>
                        </div>  

                    </div>
                    
                </div>
                <div className='each_project_div'>
                    <div className="project_left_div">
                    <h3 className='projects_name'>#3 Ethiopian Restaurant Website</h3>
                        <img className="project_image" width="500px" src={restaurant} alt="" />
                        <div className='check_code_orwebsite_btn_div'>
                            <a className="check_code_or_see_web" href="https://github.com/Abel-Girma-tech?tab=repositories"> Code <FaCode className='code_web_check_icons'/></a>
                            <a className="check_code_or_see_web" href="https://library-mern-iby7.vercel.app/"><GrView className='code_web_check_icons'/><MdOnlinePrediction className='live_website'/></a>
                        </div>  
                    </div>
                    <div className="project_right_div">
                    <h3>Project Description</h3>
                        <p className="project_desc">My public library web application, built using the MERN stack, offers a seamless and secure experience for users to interact with a rich collection of books. Utilizing JWT authentication, users can effortlessly register and log in to access various features. Members of the public can read, add, or donate books, contributing to a growing library for all to enjoy. Additionally, our app includes robust administrative functionalities, allowing admins to efficiently add, delete, edit, and manage book entries. Users can easily sort books by category, ensuring they can quickly find their desired reads. This user-friendly platform fosters a collaborative and organized environment for book enthusiasts and administrators alike.</p>
                        <h3>Languages and Tools used</h3>
                        <h4>Frontend</h4>
                        <p> <FiCheck/> HTML5</p>
                        <p> <FiCheck/> CSS</p>
                        <p> <FiCheck/> Javascript</p>
                        <p> <FiCheck/> React.JS (JS Library)</p>

                        <h4>Security , Testing & Deployment</h4>
                        <p> <FiCheck/> Git/Github</p>
                        <p><FiCheck/> Vercel</p>
                        <p> <FiCheck/> Postman</p>

                    </div>
                    
                </div>
            </div>
 
        </div>
    )
}

export default Projects
