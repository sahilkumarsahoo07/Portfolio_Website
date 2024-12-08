import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const MyProfile = () => {

    const [text] = useTypewriter({
        words: ['Sahil Kumar', 'Sahil Kumar', 'Sahil Kumar', 'Sahil Kumar'],
        loop: 3,
        typeSpeed: 150,
        deleteSpeed: 50,
        delaySpeed: 1000,
        Cursor,
        cursorStyle: '_',
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <>
            <div className="container-fluid">
                <div className="MyProfileBg row p-5 pb-0">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div className="intro-section">
                            <h1 className="fHeading">Hi There, This is</h1>
                            <div className="typewriter-wrapper d-flex align-items-center">
                                <span className="typed-text">{text}</span>
                                <Cursor cursorStyle="|" cursorColor="red" />
                            </div>
                            <p className="text-white h2 mb-4">Frontend Developer</p>
                            {/* <div className="col-7"> */}
                            <Link to={'/myskills'} className='MySkillsBtn'>
                                <button className="text-highlight w-100">Explore my skills <GoArrowRight /></button>
                            </Link>
                            {/* </div>s */}
                        </div>


                    </div>
                    <div className="col-md-6">
                        <div className="imgContent d-flex justify-content-center">
                            <img className='MyProfile' src={require('../image/ProfileBlackImg.png')} alt="Logo" />
                            <p className='shadow'></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MyProfile
