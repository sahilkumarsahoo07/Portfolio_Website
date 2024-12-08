import React from 'react'
import '../css/Hearder.css'
import { IoCloudDownloadSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Hearder = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
                <div class="container-fluid">
                    <img className='NavImg' src={require('../image/Logo.png')} alt="Logo" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
                            <li class="nav-item HeadingWidth">
                                <a class="nav-link text-dark fw-bolder" href="/">Skills</a>
                            </li>
                            <li class="nav-item HeadingWidth">
                                <a class="nav-link text-dark fw-bolder" href="/">Projects</a>
                            </li>
                            <li class="nav-item HeadingWidth">
                                <a class="nav-link text-dark fw-bolder" href="/">Exprience</a>
                            </li>
                        </ul>
                    </div>
                    <button className='CVBtn'>Download CV <IoCloudDownloadSharp /></button>
                </div>
            </nav>

        </>
    )
}

export default Hearder
