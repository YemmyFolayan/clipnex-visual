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
    // VIDEO COMPONENT FOR RE-RENDERING




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

    // IMAGE COMPONENT FOR RE-RENDERING
    const Image = ({ url }) => {
        return (
            <img className="back-img" src={url} alt="lumen" />
        )
    }

    //SLIDING IMAGES DATA
    // const slideImages = [
    //     {
    //       url: 'https://storage.googleapis.com/lumen5-site-images/carousel-siemens-bg.png',
    //       caption: 'Slide 1',
    //       icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-siemens.png',
    //       description: "“Thanks to Clipnex Visuals, we have been able to cut down on the time and costs related to video making.”",
    //       name: "Adrian Ngo",
    //       title: "Global Advertising and Sponsorships"
    //     },
    //     {
    //       url: 'https://storage.googleapis.com/lumen5-site-images/carousel-dnv-bg.png',
    //       caption: 'Slide 2',
    //       icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-dnv.png',
    //       description: "“Clipnex Visuals is especially helpful for business people who don't have the technical experience to make their own videos.”",
    //       name: "Peter Lovegrove",
    //       title: "Media Relations and Content Manager"
    //     },
    //     {
    //       url: 'https://storage.googleapis.com/lumen5-site-images/carousel-mhi-bg.png',
    //       caption: 'Slide 3',
    //       icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-mitsubishi.png',
    //       description: "“Thanks to Clipnex Visuals, we have been able to cut down on the time and costs related to video making.”",
    //       name: "Adrian Ngo",
    //       title: "Global Advertising and Sponsorships"
    //     },
    //     {
    //     url: 'https://storage.googleapis.com/lumen5-site-images/carousel-ncstate-bg.png',
    //     caption: 'Slide 4',
    //     icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-ncstate.png',
    //       description: "“We knew Clipnex Visuals was the right tool, so there was no point in looking any further.”",
    //       name: "Drew Sykes",
    //       title: "Social Media Director"
    //     },
    //     {
    //     url: 'https://storage.googleapis.com/lumen5-site-images/carousel-cms-bg.png',
    //     caption: 'Slide 5',
    //     icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-cms.png',
    //     description: "“Clipnex Visuals is especially helpful for business people who don't have the technical experience to make their own videos.”",
    //     name: "Amsal Alihodzic",
    //     title: "Senior Online Marketing Manager"
    //     },
    //     {
    //     url: 'https://storage.googleapis.com/lumen5-site-images/carousel-mondadori-bg.png',
    //     caption: 'Slide 6',
    //     icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-mondadori.png',
    //       description: "“Clipnex Visuals helps us with what we want to achieve on social: engagement and reach.”",
    //       name: "Alfonso Biondi",
    //       title: "Social Video Specialist"
    //     },
    //     {
    //     url: 'https://storage.googleapis.com/lumen5-site-images/carousel-berkshire-bg.png',
    //     caption: 'Slide 7',
    //     icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-berkshire.png',
    //       description: "“We were very attracted to Clipnex Visuals due to the fact it was very turnkey and very simple. We could train a team of people to assist in the production of video.”",
    //       name: "Glen Wellbrock",
    //       title: "Senior Director of Marketing"
    //     },
    //   ];


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

    const handleChange = (value) => {
        setValue(value);
    }

    const [vidchange, setVidChabge] = useState(contentmarketvideos)

    return (
        <div className='home'>
            <NavbarBeforeLogin />

            <section className="section1">
                <div className="sec1div1">
                    <p className="sec1-p1"> Welcome to  <br /> Clipnex Visuals </p>
                    <p className="sec1-p2"> We specialize in <br /> <b style={{ color: '#000080', fontWeight: 'bold' }}>high quality</b> visually captivating  <br /><b style={{ color: '#000080', fontWeight: 'bold' }}>video production,</b> enhancing   <br /> <b style={{ color: '#000080', fontWeight: 'bold' }}> marketing efforts </b> for brands and events.</p>
                    <p className="sec1-p2">Easily make videos for <br /><b style={{ color: '#000080', fontWeight: 'bold' }}>content marketing,<br />thought leadership,</b>  and <br /><b style={{ color: '#000080', fontWeight: 'bold' }}>brand awareness</b> in a snap.</p>
                    <button className="signupbtn"><a href='https://wa.me/+2348108439416' target="_blank" rel="noreferrer"> Book a Visual Session </a></button>
                </div>
                <div className="sec1-2">
                    <img className="section1img1" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-hero.png" alt="section1-i" />
                </div>
            </section>

            <section className="section2">

              <div 
  className="text-c" 
  style={{
    backgroundColor: "#000080", 
    borderRadius: "20px", 
    padding: "10px 15px", 
    display: "inline-block"
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
                
                <div className="sec2-d2">
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png" alt="sec2-img1" />
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png" alt="sec2-img2" />
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png" alt="sec2-img3" />
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png" alt="sec2-img4" />
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merk-color.png" alt="sec2-img5" />
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png" alt="sec2-img6" />
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png" alt="sec2-img7" />
                    <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png" alt="sec2-img8" />
                </div>
            </section>



<section style={{
  display: "flex",
  padding: "40px 20px",
  gap: "40px",
  maxWidth: "1200px",
  margin: "0 auto",
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
      <div style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#000080",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "30px"
      }}>
        🎥
      </div>
      <div>
     <Link 
  to="/service" 
  style={{
    fontWeight: "bold",
    fontSize: "18px",
    color: "inherit", // Maintains the current text color
    textDecoration: "none", // Removes underline
    display: "inline-block" // Ensures proper spacing
  }}
>
 View more services
</Link>
        <div style={{
          color: "#666",
          fontSize: "14px"
        }}>
          Tell us about your project for a personalized quote,  Custom Solutions Available
        </div>
      </div>
    </div>
  </div>
</section>



            <section className="section4 ">
                <div className="imgdiv">
                    <img className="sec4-imgceo" src={ceo1} alt="sec4-img" />
                </div>
                <div className="sec4-2">
                    {/* <div className="file-i"><i class="fa-solid fa-file-lines file-icon"></i></div> */}
                    <div className="sec4-2-1"> Turning ideas into reality </div>
                    <div className="sec4-2-3ceo">  I started Clipnex Visuals to bridge the gap between everyday people and premium-quality visuals. To help people and brands create powerful content without the stress or high costs. Every video we make is crafted to inspire, impress, and connect. Let’s create something unforgettable.We’re mobile, modern, and made for moments that matter.
                    </div>


                    <div className="sec4-2-3ceo">


                        <p>
                             We’re not just pressing record — we’re capturing emotions, elevating stories, and transforming everyday moments into timeless visuals.
                        </p>
                    </div>


                    <div className="d-flex">
                        <div className="s4-rh-ld  ">
                            <img className="sec4-img1" src={ceo2} alt="s4-img" />
                        </div>
                        <div className="s4-lh-ld mb-5">
                            <div>
                                <b>Folayan Ifeoluwa Semilore</b>, <br />
                                Creative Director
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section3">
                <div className="text-c sec3-1">Captivating brands and events video</div>
                <div className="text-c sec3-2"></div>
                <div className="sec3-vs ">
                    {video1.map((url, i) => {
                        console.log(url)
                        return <Video url={url} key={i}></Video>
                    })}
                </div>
            </section>

            <section className="section4 ">
                <div className="imgdiv">
                    <img className="sec4-img" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png" alt="sec4-img" />
                </div>
                <div className="sec4-2">
                    {/* <div className="file-i"><i class="fa-solid fa-file-lines file-icon"></i></div> */}
                    <div className="sec4-2-2">Transform your brands and event into colorful memories</div>
                    <div className="d-flex">


                    </div>
                </div>
            </section>

            <section className=" section5">
                <div className="sec5-1">
                    {/* <div className="file-i" ><i className="fa-solid fa-image file-icon"></i></div> */}
                    <div className="sec4-2-2">Content library with <br /> millions of stock photos & videos</div>
                    <div className="sec5-1-3">The Clipnex Visuals media library gives you <br />easy access to millions of photos,<br />video clips, and audio files, so you <br />always have the elements you need<br />to create the perfect video.</div>
                    <div className="sec5-1-4"><Link to="/pricing" className='nav-links'>View plans <ArrowForwardIcon style={{ height: "12px" }} /></Link></div>
                    <div className="sec5-1-5">“We promoted our downloadable study <br />on top PPC skills for 2019 on social media <br />using a short video created in Clipnex Visuals in<br />just 30 minutes, and decreased cost per<br />download by 5x!”</div>
                    <div className="d-flex">
                        <div className="s4-rh-ld">
                            <img className="sec4-img1" src={yemi} alt="s4-img" />
                        </div>
                        <div className="s4-lh-ld">
                            <div className="sec5-1-6-2"><b>Folayan Michael</b>, Technical Support</div>
                            <div className="sec5-1-6-2">Manager</div>

                        </div>
                    </div>
                </div>
                <div>
                    <img className="sec5-img" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-media.png" alt="sec5-img" />
                </div>
            </section>

            <section className=" section4 section6">
                <div className="">
                    <img className="sec4-img" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-customize.png" alt="sec6-img" />
                </div>
                <div className="sec4-2">
                    {/* <div  className="file-i"><i className="fa-solid fa-palette file-icon"></i></div> */}
                    <div className="sec4-2-2">Making it easy to <br />stay on brand</div>
                    <div className="sec6-2-3">It has never been easier to stay on brand.<br />With Clipnex Visuals templates, you can customize<br />each video with your unique logo, <br />watermark, fonts, colors, and more.</div>
                    <div className="sec4-2-4"><Link to="/pricing" className='nav-links'>Get started free <ArrowForwardIcon style={{ height: "12px" }} /> </Link></div>
                    <div className="sec4-2-5">“Whenever I got in touch with Clipnex Visuals I felt like my <br />suggestions mattered and I was being listened to. <br />It’s like I’m co-creating in a tiny way. It’s a great<br />feeling.”</div>
                    <div className="width d-flex">
                        <div className="s4-rh-ld">
                            <img className="width sec4-img1" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-promod-s.jpg" alt="s4-img" />
                        </div>
                        <div className="s4-lh-ld">
                            <div className="sec6-mb"><b>Promod Sharma</b>, Actuary & Insurance Consultant</div>
                            <div><img className="width2" src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-taxevity-color.png" alt="sec6-img" /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section7">
                <h1 className="sec7-1">Explore videos make with Clipnex Visuals</h1>
                <div className="sec8-btns">
                    <button id="contentmarket" value="contentmarketing" onClick={() => { setVidChabge(contentmarketvideos) }}>ContentMarketing</button>
                    <button id="communicate" value="communication" onClick={() => { setVidChabge(communicationsvideos) }}>Communications</button>
                    <button id="promotion" value="promotional" onClick={() => { setVidChabge(promotionalvideos) }}>Promotional</button>
                    <button id="people" value="people" onClick={() => { setVidChabge(peopleAndculturevideos) }}>People&Culture</button>
                    <button id="local" value="localization" onClick={() => { setVidChabge(localizationvideos) }}>Localization</button>
                </div>
                <div className="sec3-vs">
                    {

                        vidchange.map((url, i) => {
                            return <Video url={url} key={i}></Video>
                        })}
                </div>
            </section>

            <section className="section8 ">
                <h1 className="sec8-1">Customer sucess stories</h1>
                <div className="sec8-2">Discover how leading brands are getting results with Clipnex Visuals.</div>
                <div className="slide-container">
                    <Slide className="slide-comp">
                        {slideImages.map((slideImage, index) => (
                            <div className="each-slide" key={index}>
                                <div className="slide-img" style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                                    <span className="slide-caption">

                                        <div className="box-c">
                                            <Image className="background-img" url={slideImage.icon}></Image>
                                            <p className="p-1">{slideImage.description}</p>
                                            <p className="p-2">{slideImage.name}</p>
                                            <p className="p-3">{slideImage.title}</p>
                                            <p className="lastp"><Link to="/pricing" className="nav-linkss">Read story </Link></p>
                                        </div>
                                    </span>

                                </div>
                            </div>
                        ))}
                    </Slide>
                </div>
                <div className="sec8-2">
                    {slideImages.map((slideImage, i) => {
                        return (
                            <Image className="sec8-2" url={slideImage.icon} key={i}></Image>
                        )
                    })}
                </div>
            </section>

            <section className="section9 width ">
                <div className="heading9 text-c">
                    Tips and tricks for amplifying<br />your brand with video
                </div>
                <div className="cards d-flex width">

                    <div className="innercard">
                        <div className="card1 borderlite w-30 ">
                            <img className="card-imgs" src="https://lumen5.com/learn/wp-content/uploads/2019/05/Video-Marketing-How-to-Get-Started.jpg" alt="card" />
                            <div className="text-b p-l m-b">BLOG</div>
                            <div className="text-l p-l mb1 ">Video Marketing: <br />How to Get Started <br />[Step by Step]</div>
                            

                        </div>
                        <div className="card2 borderlite w-30 ">
                            <img className="card-imgs" src="https://lumen5.com/learn/wp-content/uploads/2019/08/Host-an-Instagram-Takeover-in-7-Simple-Steps.jpg" alt="card" />
                            <div className="text-b p-l m-b">BLOG</div>
                            <div className="text-l p-l mb2">How to Increase <br />Your Facebook <br />Video Views <br /></div>

                            

                        </div>
                        <div className="card3 borderlite w-30">
                            <img className="card-imgs" src="https://lumen5.com/learn/wp-content/uploads/2018/10/photo-1518406432532-9cbef5697723.jpeg" alt="card" />
                            <div className="text-b p-l m-b">BLOG</div>
                            <div className="text-l p-l mb3">The Importance of <br />Video in Your <br />Content Strategy</div>

                          

                        </div>
                    </div>
                </div>
            </section>

            <section className="section10 width">
                <div >
                    <div className="sec10-0"></div>
                    <div className="sec10-1">
                        Join 1,000+ brands & companies that are <br />using Clipnex Visuals to tell their stories.
                    </div>
                    <div className="sec10-2">
                      Our visuals speak louder than words. Browse through our collection of stunning short-form edits, behind-the-scenes gems, and captivating before-and-after transformations.

   </div>
                    <div><button className="lastbtn"><a href='https://wa.me/+2348108439416' target="_blank" rel="noreferrer"> Book a Visual Session </a></button>


                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default Homepage