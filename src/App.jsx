import { useEffect, useState, useRef } from 'react'
import './styles/default.css'
import emailjs from '@emailjs/browser';

function App() {

  const [ info, setInfo ] = useState('skills')
  const [ activeInfo, setActiveInfo ] = useState('skills')
  const form = useRef()
  const themes = {
    light: {
      '--mainText': 'black',
      '--secondaryText': '#4b5156',
      '--mainColor': '#eaeaea',
      '--secondaryColor': '#fff',
      '--borderColor': '#c1c1c1',
      '--themeDotBorder': '#24292e',
      '--buttonColor': 'black',
      '--cubeLeftColor': '#ccc',
      '--cubeRightColor': '#ddd',
      '--cubeTopColor': '#eee',
      '--socialMedias': '#0087ca',
      '--cubeShadowOne': 'rgba(0,0,0,0.2)',
      '--cubeShadowTwo': 'rgba(0,0,0,0.8)',
    },
    blue: {
      '--mainText': '#fff',
      '--secondaryText': '#eeeeee',
      '--mainColor': '#15202B',
      '--secondaryColor': '#192734',
      '--borderColor': '#164D56',
      '--themeDotBorder': '#fff',
      '--buttonColor': '#17a2b8',
      '--cubeLeftColor': '#27486A',
      '--cubeRightColor': '#274B70',
      '--cubeTopColor': '#28507A',
      '--socialMedias': '#0087ca',
      '--cubeShadowOne': 'rgba(255, 255, 255, 0.2)',
      '--cubeShadowTwo': 'rgba(255, 255, 255, 0.8)',
    },
    green: {
      "--mainText": "#fff",
      "--secondaryText": "#eeeeee",
      "--mainColor": "#606B56",
      "--secondaryColor": "#515a48",
      "--borderColor": "#161914",
      "--themeDotBorder": "#fff",
      "--buttonColor": "#669966",
      "--cubeLeftColor": "#657755",
      "--cubeRightColor": "#687F54",
      "--cubeTopColor": "#647F4D",
      "--socialMedias": "#0087ca",
      "--cubeShadowOne": "rgba(255,255,255,0.2)",
      "--cubeShadowTwo": "rgba(255,255,255,0.8)",
    },
    purple: {
      "--mainText": "#fff",
      "--secondaryText": "#eeeeee",
      "--mainColor": "#46344E",
      "--secondaryColor": "#382a3f",
      "--borderColor": "#1d1520",
      "--themeDotBorder": "#fff",
      "--buttonColor": "#8534a3",
      "--cubeLeftColor": "#583D64",
      "--cubeRightColor": "#684577",
      "--cubeTopColor": "#754C87",
      "--socialMedias": "#0087ca",
      "--cubeShadowOne": "rgba(255,255,255,0.2)",
      "--cubeShadowTwo": "rgba(255,255,255,0.8",
    }
  }

  function updateTheme(theme){
    const root = document.documentElement
    const themeVariables = themes[theme]
    Object.keys(themeVariables).forEach((key) => {
        root.style.setProperty(key, themeVariables[key])
      })
  }

  useEffect(() => {
    const currectTheme = localStorage.getItem('theme')
    if(currectTheme){
      updateTheme(currectTheme)
    }
  }, [])

  function applyTheme(theme){
    updateTheme(theme)
    localStorage.setItem('theme', theme)
  }

  function onInfoClick(event){
    setInfo(event.target.id)
    setActiveInfo(event.target.id)
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_yd3xf2q', 'template_g6lxmrf', form.current, {
        publicKey: 'Xx4a0YdYGcuG8vISf',
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  return (
    <main className="main-wrapper">
      <section className="s1">
          <div className="main-container">
              <div className="greeting-wrapper">
                  <h1>Hi<span>!</span> I'm Marin Marinov.</h1>
              </div>

              <div className="intro-wrapper">
                  <div className="nav-wrapper">
                      <div className="dots-wrapper">
                          <div id="dot-1" className="browser-dot"></div>
                          <div id="dot-2" className="browser-dot"></div>
                          <div id="dot-3" className="browser-dot"></div>
                      </div>

                      <ul id="navigation">
                          <li><a href="#contact">Contact</a></li>
                      </ul>
                  </div>

                  <div className="left-column">
                      <img id="profile-pic" src="/pfp.jpg" alt="" />
                      <h5>Personalize Theme</h5>

                      <div id="theme-option-wrapper">
                          <div data-mode="light" id="light-mode" className="theme-dot" onClick={() => applyTheme('light')}></div>
                          <div data-mode="blue" id="blue-mode" className="theme-dot" onClick={() => applyTheme('blue')}></div>
                          <div data-mode="green" id="green-mode" className="theme-dot" onClick={() => applyTheme('green')}></div>
                          <div data-mode="purple" id="purple-mode" className="theme-dot" onClick={() => applyTheme('purple')}></div>
                      </div>

                      <p id="settings-note">*Theme settings will be saved for <br />your next visit</p>

                  </div>

                  <div className="right-column">
                      <div className="cube">
                          <div className="topFace">
                              <div>
                                  <h1>FULL STACK DEV</h1>
                                  <p>in progress...</p>
                              </div>
                          </div>
                          <div className="leftFace">
                              <h5>What I do?</h5>
                              <p>I'm currently focused on developing personal projects while actively seeking opportunities in the tech industry.</p>
                          </div>
                          <div className="rightFace">
                              <div className="cyrcle">
                                  <a id="arrow" href="#about-me">
                                  <div className="down-arrow">
                                  </div>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section id="about-me" className="s2">
          <div className="main-container">
              <div className="about-images">
                  <div className="about-wrapper">
                      <div className="about-intro">
                          <h1>ABOUT ME</h1>
                          <div className="about-text">
                              <p>
                                Hello, my name is Marin Georgiev Marinov, and I'm 24 years old. After completing high school, I enrolled in an Economic University, where I studied for two years. However, I realized that it wasn't the right fit for me. Around that time, a friend suggested that I explore programming. Intrigued, I decided to give it a try. Now, I dedicate myself to learning and improving my skills every day, with the goal of becoming a good Full-Stack Developer.
                              </p>
                          </div>
                      </div>

                      <div className="about-options-wrapper">
                          <ul>
                              <li><a id="skills" className={`info-hover ${activeInfo == 'skills' && 'active-info'}`} onClick={onInfoClick}>Skills</a></li>
                              <li><a id="experience" className={`info-hover ${activeInfo == 'experience' && 'active-info'}`} onClick={onInfoClick}>Experience</a></li>
                              <li><a id="certification" className={`info-hover ${activeInfo == 'certification' && 'active-info'}`} onClick={onInfoClick}>Certification</a></li>
                          </ul>
                          <div className="about-options-text">
                              {info == 'skills' && <p id="about">I have experience working with React, Django, Python, JavaScript, MySQL, PostgreSQL, HTML and CSS. I am a highly motivated individual with a strong desire to learn and continuously improve. I am patient, a good listener, and always strive to deliver high-quality results.</p>}
                              {info == 'experience' && <p id="about">I have a year and a half of work experience at Bulgarian Online Research. My responsibilities included programming surveys and communicating with American clients and project managers. During this time, I also worked on several personal projects, the details of which can be found in the links below.</p>}
                              {info == 'certification' && <p id="about">I completed my secondary education at a Mathematics High School. Additionally, I have earned certificates from SoftUni for courses in React, Django, Python, JavaScript, MySQL, PostgreSQL, HTML and CSS.</p>}
                          </div>
                      </div>
                      <div className="social-medias">
                          <ul>
                              <li><a href="https://www.instagram.com/marinm309/" target="_blank">GitHub</a></li>
                              <li><a href="https://www.facebook.com/profile.php?id=100018017746898" target="_blank">Facebook</a></li>
                              <li><a href="https://github.com/marinm309" target="_blank">Instagram</a></li>
                          </ul>
                      </div>
                  </div>

                  <div className="about-images-wrapper" id="desktop">
                      <img src="/react.png" alt="" />
                      <img src="/js.png" alt="" />
                      <img src="/django.png" alt="" />
                      <img src="/python.png" alt="" />
                      <img src="/html.png" alt="" />
                      <img src="/css.png" alt="" />
                  </div>
              </div>
          </div>
      </section>

      <section className="s1">
          <div className="main-container">
              <div className="portfolio-wrapper">
                  <div id="project-intro">
                      <h1>Projects</h1>
                  </div>
                  <div className="all-projects">
                      <a className="project" href="https://python-web-final-project-production.up.railway.app/" target="_blank">
                        <div className="project-image">
                            <img src="/temp-project.png" alt="" />
                        </div>
                        <div className="project-name">
                            <p>Online Store</p>
                        </div>
                      </a>

                      <a className="project" href="https://python-web-final-project-production.up.railway.app/" target="_blank">
                        <div className="project-image">
                            <img src="/temp-project.png" alt="" />
                        </div>
                        <div className="project-name">
                            <p>Online Store</p>
                        </div>
                      </a>

                      <a className="project" href="https://python-web-final-project-production.up.railway.app/" target="_blank">
                        <div className="project-image">
                            <img src="/temp-project.png" alt="" />
                        </div>
                        <div className="project-name">
                            <p>Online Store</p>
                        </div>
                      </a>

                      <a className="project" href="https://python-web-final-project-production.up.railway.app/" target="_blank">
                        <div className="project-image">
                            <img src="/temp-project.png" alt="" />
                        </div>
                        <div className="project-name">
                            <p>Online Store</p>
                        </div>
                      </a>

                      <a className="project" href="https://python-web-final-project-production.up.railway.app/" target="_blank">
                        <div className="project-image">
                            <img src="/temp-project.png" alt="" />
                        </div>
                        <div className="project-name">
                            <p>Online Store</p>
                        </div>
                      </a>

                  </div>
              </div>
          </div>
      </section>

      <section className="s2">
          <div className="main-container">
              <h3 id="contact">Have any question?</h3>
              <form id="contact-form" ref={form} onSubmit={sendEmail}>
                  <label htmlFor="name">Name</label>
                  <input className="input-field" type="text" name="name" />

                  <label htmlFor="email">Email</label>
                  <input className="input-field" type="text" name="email" />

                  <label htmlFor="subject">Subject</label>
                  <input className="input-field" type="text" name="subject" />

                  <label htmlFor="message">Message</label>
                  <textarea name="message" className="input-field"></textarea>

                  <input id="submit-button" type="submit" value="Send" />
              </form>
              
          </div>
      </section>

      <div className="about-images-wrapper" id="mobile">
          <img src="/django-rest.png" alt="" id="e1" />
          <img src="/python.png" alt="" id="e2" />
          <img src="/js.png" alt="" id="e3" />
          <img src="/django.png" alt="" id="e4" />
          <img src="/html.png" alt="" id="e5" />
          <img src="/css.png" alt="" id="e6" />
          <img src="/react.png" alt="" id="e7" />
      </div>
    </main>
  )
}

export default App
