import React, {useState, useEffect} from 'react';
import LogoTitle from '../../assets/images/coding-logo.png'
import { Link } from 'react-router-dom';
import './index.scss'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['G', 'i', 'a', 'n', 'l', 'u', 'c', 'a']
    const jobArray = ['F','r','o','n','t','-','E','n','d',' ','D','e','v','e','l','o','p','e','r']


    useEffect(() => {    
        return () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover')
            },5000)
        };
    }, []);

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt='developer' />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={23} />
                </h1>
                {/* <h2>Front-End Developer</h2> */}
                {/* <Link to='/contact'>
                    <Button variant="contained" className='flat-button'>CONTACT ME</Button>
                </Link> */}

                <NavLink to="/contact" activeClassName="active">
                    <Button variant="contained" className="flat-button">CONTACT ME</Button>
                </NavLink>
            </div>
        </div>
    );
}

export default Home;
