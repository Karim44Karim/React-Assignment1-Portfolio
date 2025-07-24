import styles from './About.module.css'

export default function About() {
  return (
      <div className={`${styles.heroSection} d-flex flex-column justify-content-center align-items-center`}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h2 className={`${styles.heading}`}>about component</h2>
          <div className='d-flex flex-row align-items-center pt-2'>
            <span className={styles.rectangle}></span>
            <i className='icon-star-full text-white mx-3'></i>
            <span className={styles.rectangle}></span>
          </div>
          <div className={`text-white d-flex flex-row pt-3 container ${styles.test}`}>
            <p className='col-md-6'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className='col-md-6 ps-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
  )
}
