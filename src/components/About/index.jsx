import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import React, { useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngular, faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact, faSass} from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        return () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
        };
    }, []);

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
            </div>

            {/*  Animacion CUBO */}
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faSass} color='#CF649A' />
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
