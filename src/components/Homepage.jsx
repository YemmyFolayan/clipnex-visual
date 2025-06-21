import React, { useState } from 'react';
import "./Homepage.css";
import NavbarBeforeLogin from "./NavbarBeforeLogin";
import { Slide } from 'react-slideshow-image';
import { slideImages } from "./DataPage/HomepageData"
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    Text,
    Heading,
    Container,
} from "@chakra-ui/react";
import Footer from "./Footer";
import ceo1 from '../images/ceo1.jpeg';
import ceo2 from '../images/ceo2.jpeg';
import yemi from '../images/yemii.png';

const Homepage = () => {
    const Video = ({ url }) => {
        return (
            <video
                src={url}
                onMouseOver={event => { event.target.play() }}
                onMouseOut={event => event.target.pause()}
                muted={true}
            />
        )
    }

    const Image = ({ url }) => {
        return (
            <img className="back-img" src={url} alt="lumen" />
        )
    }

    const [video1, setVideo1] = useState([
        "https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4",
        "https://storage.googleapis.com/lumen5-site-images/prev_billow.mp4",
        "https://storage.googleapis.com/lumen5-site-images/prev_vertex.mp4",
        "https://storage.googleapis.com/lumen5-site-images/prev_circuit.mp4",
        "https://storage.googleapis.com/lumen5-site-images/prev_vault.mp4",
        "https://storage.googleapis.com/lumen5-site-images/prev_notice.mp4",
        "https://storage.googleapis.com/lumen5-site-images/flux_prev.mp4",
        "https://storage.googleapis.com/lumen5-site-images/unity_prev.mp4",
        "https://storage.googleapis.com/lumen5-site-images/looper_prev.mp4"
    ]);

    const [contentmarketvideos, setcontentmarket] = useState([
        "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Hydrogen%20Economy.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/siemens-content.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Responsible%20Investment.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Workplace%20Evolution.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/The%20Pandemic.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Supply%20Chain%20Resilience.mp4"
    ]);

    const [communicationsvideos, setCommunication] = useState([
        "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Coral%20Reef%20Protection.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Zespri%20Selects%20SAP.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Textile%20Recycling.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Navigating%20the%20Seas.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Outstanding%20Researchers.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Fighting%20COVID-19.mp4"
    ])

    const [promotionalvideos, setPromotional] = useState([
        "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Global%20Leader%20(1).mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Remote%20Auditing.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Turbocompressor.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Innovation%20Awards.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Dormakaba%20(1).mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/V%20Plate.mp4"
    ])

    const [peopleAndculturevideos, setPeopleandculture] = useState([
        "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Women%20in%20Tech.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Women%20in%20Tech.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Create%20Your%20Future.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/siemens-culture.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Voice%20of%20Sulzer.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Fundraising%20Challenge.mp4"
    ])

    const [localizationvideos, setLocalization] = useState([
        "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%20(1).mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/siemens-local.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Agility.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Siemens%20Energy.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/DNV%20GL.mp4",
        "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%20(2).mp4"
    ])

    const [val, setValue] = useState("contentmarket");
    const [vidchange, setVidChabge] = useState(contentmarketvideos)

    const handleChange = (value) => {
        setValue(value);
    }

    const CenteredSection = ({ children, className = "", style = {} }) => (
        <div 
            className={`centered-section ${className}`} 
            style={{
                width: '80%',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '40px 0',
                ...style
            }}
        >
            {children}
        </div>
    );

    return (
        <div className='home'>
            <NavbarBeforeLogin />

            <CenteredSection className="section1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px', padding: '20px' }}>
                    <p className="sec1-p1"> Welcome to  <br /> Clipnex Visuals </p>
                    <p className="sec1-p2"> We specialize in <br /> <b style={{ color: '#000080', fontWeight: 'bold' }}>high quality</b> visually captivating  <br /><b style={{ color: '#000080', fontWeight: 'bold' }}>video production,</b> enhancing   <br /> <b style={{ color: '#000080', fontWeight: 'bold' }}> marketing efforts </b> for brands and events.</p>
                    <p className="sec1-p2">Easily make videos for <br /><b style={{ color: '#000080', fontWeight: 'bold' }}>content marketing,<br />thought leadership,</b>  and <br /><b style={{ color: '#000080', fontWeight: 'bold' }}>brand awareness</b> in a snap.</p>
                    <button className="signupbtn"><a href='https://wa.me/+2348108439416' target="_blank" rel="noreferrer"> Book a Visual Session </a></button>
                </div>
                <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
                    <img className="section1img1" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-hero.png" alt="section1-i" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            </CenteredSection>

            <CenteredSection className="section2" style={{ textAlign: 'center' }}>
                <div 
                    className="text-c" 
                    style={{
                        backgroundColor: "#000080", 
                        borderRadius: "20px", 
                        padding: "10px 15px", 
                        display: "inline-block",
                        marginBottom: '30px'
                    }}
                >
                    <i style={{
                        color: "white", 
                        fontWeight: "bold", 
                        fontStyle: "normal"
                    }}>
                        📸 Capturing Life, Creating Magic.✨
                    </i>
                </div>
                
                <div className="sec2-d2" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                    {[
                        "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png",
                        "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png",
                        "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png",
                        "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png",
                        "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merk-color.png",
                        "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png",
                        "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png",
                        "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png"
                    ].map((img, index) => (
                        <img 
                            key={index} 
                            src={img} 
                            alt={`sec2-img${index+1}`} 
                            style={{ height: '40px', width: 'auto', objectFit: 'contain' }} 
                        />
                    ))}
                </div>
            </CenteredSection>

            <CenteredSection style={{
                display: "flex",
                padding: "40px 0",
                gap: "40px",
                flexWrap: "wrap"
            }}>
                {/* Left Column - Services Title */}
                <div style={{
                    flex: "1",
                    minWidth: "300px"
                }}>
                    <h2 style={{
                        fontSize: "32px",
                        fontWeight: "700",
                        marginBottom: "30px",
                        color: "#000080"
                    }}>
                        Services – What We Do Best
                    </h2>
                    
                    <div style={{
                        fontSize: "24px",
                        marginBottom: "20px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    }}>
                        <span>📷</span>
                        <span>Visual Solutions for Every Need:</span>
                    </div>
                    
                    <ul style={{
                        listStyleType: "none",
                        padding: "0",
                        margin: "0"
                    }}>
                        <li style={{
                            padding: "8px 0",
                            borderBottom: "1px solid #eee",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        }}>
                            <span>🎬</span>
                            <span>Social Media Reels & Stories</span>
                        </li>
                        <li style={{
                            padding: "8px 0",
                            borderBottom: "1px solid #eee",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        }}>
                            <span>🚀</span>
                            <span>Product Launch Videos</span>
                        </li>
                        <li style={{
                            padding: "8px 0",
                            borderBottom: "1px solid #eee",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        }}>
                            <span>💍</span>
                            <span>Weddings & Special Events</span>
                        </li>
                        <li style={{
                            padding: "8px 0",
                            borderBottom: "1px solid #eee",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        }}>
                            <span>🎵</span>
                            <span>Music & Lifestyle Content</span>
                        </li>
                        <li style={{
                            padding: "8px 0",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        }}>
                            <span>💼</span>
                            <span>Business Promos & Interviews</span>
                        </li>
                    </ul>
                </div>

                {/* Right Column - Service Image/Details */}
                <div style={{
                    flex: "1",
                    minWidth: "300px",
                    background: "#f8f9fa",
                    borderRadius: "15px",
                    padding: "30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}>
                    <div style={{
                        fontSize: "20px",
                        lineHeight: "1.6",
                        marginBottom: "20px"
                    }}>
                        We deliver premium visual content tailored to your brand's unique personality and goals. Each project receives our full creative attention.
                    </div>
                    
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        marginTop: "auto"
                    }}>
                       
                        <div>
                            <Link 
                                to="/service" 
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    color: "inherit",
                                    textDecoration: "none",
                                    display: "inline-block"
                                }}
                            >
                                View more services
                            </Link>
                            <div style={{
                                color: "#666",
                                fontSize: "14px"
                            }}>
                                Tell us about your project for a personalized quote, Custom Solutions Available
                            </div>
                        </div>
                    </div>
                </div>
            </CenteredSection>

            <CenteredSection style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <img src={ceo1} alt="CEO" style={{ width: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px' }}>Turning ideas into reality</div>
                    <div style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                        I started Clipnex Visuals to bridge the gap between everyday people and premium-quality visuals. To help people and brands create powerful content without the stress or high costs. Every video we make is crafted to inspire, impress, and connect. Let's create something unforgettable.We're mobile, modern, and made for moments that matter.
                    </div>
                    <div style={{ marginBottom: '30px', lineHeight: '1.6' }}>
                        We're not just pressing record — we're capturing emotions, elevating stories, and transforming everyday moments into timeless visuals.
                    </div>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <img src={ceo2} alt="CEO" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
                        <div>
                            <div style={{ fontWeight: 'bold' }}>Folayan Ifeoluwa Semilore</div>
                            <div>Creative Director</div>
                        </div>
                    </div>
                </div>
            </CenteredSection>

            <CenteredSection style={{ textAlign: 'center' }}>
                <div style={{ 
                    fontSize: '28px', 
                    fontWeight: 'bold', 
                    marginBottom: '30px',
                    color: '#000080'
                }}>
                    Captivating brands and events video
                </div>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '20px'
                }}>
                    {video1.map((url, i) => (
                        <Video url={url} key={i} />
                    ))}
                </div>
            </CenteredSection>

            <CenteredSection style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png" alt="content" style={{ width: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{ fontSize: '24px', fontWeight: '600' }}>
                        Transform your brands and event into colorful memories
                    </div>
                </div>
            </CenteredSection>

            <CenteredSection style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '40px', alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px' }}>
                        Content library with millions of stock photos & videos
                    </div>
                    <div style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                        The Clipnex Visuals media library gives you easy access to millions of photos, video clips, and audio files, so you always have the elements you need to create the perfect video.
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <Link to="/pricing" style={{ color: '#000080', fontWeight: 'bold' }}>
                            View plans <ArrowForwardIcon style={{ height: "12px" }} />
                        </Link>
                    </div>
                    <div style={{ 
                        backgroundColor: '#f8f9fa', 
                        padding: '20px', 
                        borderRadius: '10px',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        "We promoted our downloadable study on top PPC skills for 2019 on social media using a short video created in Clipnex Visuals in just 30 minutes, and decreased cost per download by 5x!"
                    </div>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <img src={yemi} alt="Testimonial" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
                        <div>
                            <div style={{ fontWeight: 'bold' }}>Folayan Michael</div>
                            <div>Technical Support Manager</div>
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-media.png" alt="media" style={{ width: '100%', borderRadius: '10px' }} />
                </div>
            </CenteredSection>

            <CenteredSection style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-customize.png" alt="customize" style={{ width: '100%', borderRadius: '10px' }} />
                </div>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px' }}>
                        Making it easy to stay on brand
                    </div>
                    <div style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                        It has never been easier to stay on brand. With Clipnex Visuals templates, you can customize each video with your unique logo, watermark, fonts, colors, and more.
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <Link to="/pricing" style={{ color: '#000080', fontWeight: 'bold' }}>
                            Get started free <ArrowForwardIcon style={{ height: "12px" }} />
                        </Link>
                    </div>
                    <div style={{ 
                        backgroundColor: '#f8f9fa', 
                        padding: '20px', 
                        borderRadius: '10px',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        "Whenever I got in touch with Clipnex Visuals I felt like my suggestions mattered and I was being listened to. It's like I'm co-creating in a tiny way. It's a great feeling."
                    </div>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-promod-s.jpg" alt="Testimonial" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
                        <div>
                            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Promod Sharma</div>
                            <div style={{ marginBottom: '10px' }}>Actuary & Insurance Consultant</div>
                            <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-taxevity-color.png" alt="Taxevity" style={{ height: '30px' }} />
                        </div>
                    </div>
                </div>
            </CenteredSection>

            <CenteredSection style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
                    Explore videos make with Clipnex Visuals
                </h1>
                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '10px', 
                    justifyContent: 'center',
                    marginBottom: '30px'
                }}>
                    {[
                        { label: 'ContentMarketing', value: contentmarketvideos },
                        { label: 'Communications', value: communicationsvideos },
                        { label: 'Promotional', value: promotionalvideos },
                        { label: 'People&Culture', value: peopleAndculturevideos },
                        { label: 'Localization', value: localizationvideos }
                    ].map((item, index) => (
                        <button 
                            key={index}
                            onClick={() => setVidChabge(item.value)}
                            style={{
                                padding: '10px 15px',
                                borderRadius: '20px',
                                border: '1px solid #ddd',
                                backgroundColor: vidchange === item.value ? '#000080' : 'white',
                                color: vidchange === item.value ? 'white' : 'black',
                                cursor: 'pointer'
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '20px'
                }}>
                    {vidchange.map((url, i) => (
                        <Video url={url} key={i} />
                    ))}
                </div>
            </CenteredSection>

            <CenteredSection style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
                    Customer success stories
                </h1>
                <div style={{ marginBottom: '30px', fontSize: '18px' }}>
                    Discover how leading brands are getting results with Clipnex Visuals.
                </div>
                <div style={{ marginBottom: '40px' }}>
                    <Slide className="slide-comp">
                        {slideImages.map((slideImage, index) => (
                            <div key={index}>
                                <div style={{ 
                                    backgroundImage: `url(${slideImage.url})`,
                                    height: '400px',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '10px',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '0',
                                        right: '0',
                                        backgroundColor: 'rgba(0,0,0,0.7)',
                                        color: 'white',
                                        padding: '20px',
                                        borderBottomLeftRadius: '10px',
                                        borderBottomRightRadius: '10px'
                                    }}>
                                        <img src={slideImage.icon} alt="logo" style={{ height: '50px', marginBottom: '15px' }} />
                                        <p style={{ marginBottom: '10px', fontStyle: 'italic' }}>{slideImage.description}</p>
                                        <p style={{ fontWeight: 'bold' }}>{slideImage.name}</p>
                                        <p style={{ marginBottom: '15px' }}>{slideImage.title}</p>
                                        <Link to="/pricing" style={{ color: '#4dabf7', textDecoration: 'none' }}>
                                            Read story
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slide>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    {slideImages.map((slideImage, i) => (
                        <img 
                            key={i} 
                            src={slideImage.icon} 
                            alt={`logo-${i}`} 
                            style={{ height: '40px', width: 'auto', objectFit: 'contain' }} 
                        />
                    ))}
                </div>
            </CenteredSection>

            <CenteredSection style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
                    Tips and tricks for amplifying your brand with video
                </div>
                <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginTop: '40px'
                }}>
                    {[
                        {
                            image: "https://lumen5.com/learn/wp-content/uploads/2019/05/Video-Marketing-How-to-Get-Started.jpg",
                            title: "Video Marketing: How to Get Started [Step by Step]"
                        },
                        {
                            image: "https://lumen5.com/learn/wp-content/uploads/2019/08/Host-an-Instagram-Takeover-in-7-Simple-Steps.jpg",
                            title: "How to Increase Your Facebook Video Views"
                        },
                        {
                            image: "https://lumen5.com/learn/wp-content/uploads/2018/10/photo-1518406432532-9cbef5697723.jpeg",
                            title: "The Importance of Video in Your Content Strategy"
                        }
                    ].map((item, index) => (
                        <div key={index} style={{ 
                            border: '1px solid #eee',
                            borderRadius: '10px',
                            overflow: 'hidden'
                        }}>
                            <img src={item.image} alt="Blog" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '20px', textAlign: 'left' }}>
                                <div style={{ 
                                    color: '#000080',
                                    fontWeight: 'bold',
                                    marginBottom: '10px'
                                }}>
                                    BLOG
                                </div>
                                <div style={{ fontSize: '18px', fontWeight: '600' }}>
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CenteredSection>

            <CenteredSection style={{ 
                textAlign: 'center',
                padding: '60px 20px',
                backgroundColor: '#f8f9fa',
                borderRadius: '10px',
                marginTop: '40px',
                marginBottom: '40px'
            }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
                    Join 1,000+ brands & companies that are using Clipnex Visuals to tell their stories.
                </div>
                <div style={{ 
                    fontSize: '18px',
                    marginBottom: '30px',
                    maxWidth: '700px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Our visuals speak louder than words. Browse through our collection of stunning short-form edits, behind-the-scenes gems, and captivating before-and-after transformations.
                </div>
                <button style={{
                    padding: '15px 30px',
                    backgroundColor: '#000080',
                    color: 'white',
                    border: 'none',
                    borderRadius: '30px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>
                    <a href='https://wa.me/+2348108439416' target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                        Book a Visual Session
                    </a>
                </button>
            </CenteredSection>

            <Footer />
        </div>
    )
}

export default Homepage