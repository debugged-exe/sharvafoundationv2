import React,{useState} from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './Contact.css';
const Contact = () =>{

  const [name, setName] = useState("");
  const [nameFlag, setNameFlag] = useState(false);
  const [nameErr, setNameErr] = useState("");

  const setNameField = (event) => {
    setName(event.target.value);
  }

  const nameValidate = (event) => {
    if(name!="")
    {
      setNameFlag(true);
      setNameErr("");
    }
    else
    {
      setNameFlag(false);
      setNameErr("*Name Field is compulsary");
    }
  }

  const [email, setEmail] = useState("");
  const [emailFlag, setEmailFlag] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  const setEmailField = (event) => {
    setEmail(event.target.value);
  }

  const emailValidate = (event) => {
    // String regex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
    if(email==="")
    {
      setEmailFlag(false);
      setEmailErr("*Email Field is compulsary");
    }
    else if(!email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
    {
      setEmailFlag(false);
      setEmailErr("Invalid email.Enter valid email(eg: example@gmail.com)");
    }
    else
    {
      setEmailFlag(true);
      setEmailErr("");
    }
  }

  const submit = () => {
    if(
      nameFlag===true &&
      emailFlag===true
      )
    {

    }
    else
    {
      nameValidate();
      emailValidate();
    }
  }


    return(
        <section className='contact-section'>
        <div className="contact-container">
          <div data-aos='fade-right' className="left">
              <div className='flex flex-column pv3 pl4 pr6 justify-around'>
                <h2>Connect With Us</h2>
                <input 
                placeholder='Enter Your Name' 
                className="br3 shadow-4 mv3 pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100" 
                type="text" 
                name="email-address"
                autoComplete = "blej"
                onChange = {(event) => setNameField(event)}
                onBlur = {() => nameValidate()}/>
                <div className="f4 red">{`${nameErr}`}</div>
                <input 
                placeholder='Enter Your Email' 
                className="br3 shadow-4 mv3 pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100" 
                type="email" 
                name="email-address"
                autoComplete="blej"
                onChange = {(event) => setEmailField(event)}
                onBlur = {() => emailValidate()}/>
                <div className="f4 red">{`${emailErr}`}</div>
                <input 
                placeholder='Write a Message' 
                className="br3 shadow-4 mv3 pa5 input-reset ba bg-transparent hover-bg-black hover-black w-100" 
                type="email" 
                name="email-address"
                autoComplete="blej"/>
                <input 
                className="shadow-4 b pv2 input-reset grow pointer dib" 
                type="submit" 
                value="Send"
                onClick = {() => submit()}></input>
              </div>
          </div>
          <div data-aos='fade-left' className="right">
            <div className="content">
              <h1>Contact Us</h1>
              <h6 className='flex items-center'><div className='pr2'><FaMapMarkerAlt/></div><div>Hno. 163 Ambika Vihar Near PHC Gole Gujral, Jammu, Jammu and Kashmir</div></h6>
              <h6 className='flex items-center'><div className='pr2'><SiGmail/></div><div>foundationsharva@gmail.com</div></h6>
              <h6 className='flex items-center'><div className='pr2'><FaPhoneAlt/></div><div>+91 9168894490</div></h6>
            </div>
          </div>
        </div>
      </section>
    );
}


export default Contact;