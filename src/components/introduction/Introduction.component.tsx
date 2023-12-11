import { TypeAnimation } from "react-type-animation"

import avatar from '../../assets/images/avatar.png'
import avatarContainer from '../../assets/images/avatar-container.png'

import './Introduction.styles.scss'
import { useSectionInView } from "../../library/hooks"

const Introduction = () => {
  const { ref } = useSectionInView('Home')
  
  return (
    <section className='introduction-container' id='home' ref={ref}>
      <div className="information">
          <div className="text">
            <h2>Hello, I'm</h2>
            <h1 className="glitch" data-text="Adam Muaña">Adam Muaña <span className="wave">👋</span></h1>
          </div>
          <TypeAnimation
            sequence={[
              'Front-end Developer', 1000,
              'CMS Developer', 1000,
              'UI/UX Designer', 1000,
              'Online Gamer 😃', 1000,
            ]}
            wrapper="div"
            speed={50}
            style={{ fontSize: 'clamp(2rem, 2vw, 3rem)', display: 'block', textAlign: 'center', }}
            repeat={Infinity}
          />
      </div>
      <div className="avatar-container">
        <div className="avatar">
          <img src={avatar} alt='Avatar' />
        </div>
        <div className="rotating-img-container">
          <img src={avatarContainer} alt='Sample' className="rotating" />
        </div>
      </div>
    </section>
  )
}

export default Introduction