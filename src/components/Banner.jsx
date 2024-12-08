import React from 'react'
import { IoCloudDownloadSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
const Banner = () => {
    return (
        <>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img className='BannerFixImg' src={require('../image/Banner/DeveloperImage.jpg')} alt="Logo" />
                    </div>
                    <div class="carousel-item">
                        <img className='BannerFixImg' src={require('../image/Banner/programmer_1.jpg')} alt="Logo" />
                    </div>
                </div>
                <Link to={'/myprofile'} className='d-flex justify-content-center text-decoration-none'>
                    <button className='BnrBtn'>My Profile</button>
                </Link>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Banner
