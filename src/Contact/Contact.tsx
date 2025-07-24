import styles from './Contact.module.css';
import '../assets/icomoon/style.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
      <div className={`${styles.heroSection} d-grid mx-auto col-md-6 p-4`}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h2 className={`${styles.heading}`}>conatct section</h2>
          <div className='d-flex flex-row align-items-center pt-2'>
            <span className={styles.rectangle}></span>
            <i className={`${styles['icon-star-full-dark']} icon-star-full mx-3`}></i>
            <span className={styles.rectangle}></span>
          </div>
        </div>
        <Form className='pt-5'>
          <Form.Group className="mb-1" controlId="ControlInput1">
              <Form.Label
                className={`overflow-hidden mb-2`}>
                  <div className={`${userName? '':styles.labelHide} ${styles.label} mb-2`}>
                    userName:
                  </div>
              </Form.Label>
            <Form.Control
              className={`${styles.input}`}
              type="text" 
              placeholder="userName"
              value={userName}
              onChange={(e)=> setUserName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-1" controlId="ControlInput2">
              <Form.Label
                className={`overflow-hidden mb-2`}>
                  <div className={`${userAge? styles.label : styles.labelHide} mb-2`}>
                    userAge:
                  </div>
              </Form.Label>
            <Form.Control
              className={`${styles.input}`}
              type="text" 
              placeholder="userAge"
              value={userAge}
              onChange={(e)=> setUserAge(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-1" controlId="ControlInput3">
              <Form.Label
                className={`overflow-hidden mb-2`}>
                  <div className={`${userEmail? styles.label : styles.labelHide} mb-2`}>
                    userEmail:
                  </div>
              </Form.Label>
            <Form.Control
              className={`${styles.input}`}
              type="text" 
              placeholder="userEmail"
              value={userEmail}
              onChange={(e)=> setUserEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-1" controlId="ControlInput4">
              <Form.Label
                className={`overflow-hidden mb-2`}>
                  <div className={`${userPassword? styles.label : styles.labelHide} mb-2`}>
                    userPassword:
                  </div>
              </Form.Label>
            <Form.Control
              className={`${styles.input}`}
              type="text" 
              placeholder="userPassword"
              value={userPassword}
              onChange={(e)=> setUserPassword(e.target.value)}/>
          </Form.Group>
          <Button className={`${styles['btn-custom']} mt-3`} variant="success">send Message</Button>
        </Form>
      </div>)
}
