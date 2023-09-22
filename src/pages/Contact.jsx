import React,{useEffect} from 'react'
import styled from 'styled-components';
import AppLayout from '../layouts/AppLayout';
import fb from "./home/images/fb.svg"
import x from "./home/images/x.svg"
import insta from "./home/images/insta.svg"
import lnkdin from "./home/images/lnkdin.svg"
import AuthInput from "../components/auth/AuthInput"
import AuthTextArea from "../components/auth/AuthTextArea"
import { submitContact } from "../services/contact"
import toast from "react-hot-toast";

const Contact = () => {
  const [feedback, setFeedback] = React.useState({
    email: "",
    phone_number: "",
    first_name: "",
    message: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(true)
  const [categories, setCategory] = React.useState([]);
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const response = await submitContact(feedback);
      toast.success("Sent Successfully")
      setLoading(false)
      setFeedback(prev=>({email:"",phone_number:"",message:"",first_name:""}))
    } catch (error) {
      setLoading(false)
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target// takes the name and vale of event currently changing
    setFeedback(prev => ({ ...prev, [name]: value }))

  }

  useEffect(() => {
    const isComplete = Object.values(feedback).every(item => Boolean(item))//check if all is not empty
    isComplete ? setButtonDisabled(false) : setButtonDisabled(true) 
  }, [feedback]);

  console.log(feedback,buttonDisabled);

  return (
    <AppLayout>
      <Con>
        <Left>
          <div className='second'>
            <h1>Get in touch</h1>
            <p className='info'>Contact <br />Information</p>
            <p className='info'>
              27,Alara Street<br />
              Yaba 100012<br />
              Lagos State
            </p>
            <p className='info'>Call Us : 07067981819</p>
            <p className='info'>
              we are open from Monday-Friday<br />
              08:00am - 05:00pm
            </p>

            <h2>Share on</h2>
            <div className='socials'>
              <div><img src={insta} alt="img" /></div>
              <div><img src={x} alt="img" /></div>
              <div><img src={fb} alt="img" /></div>
              <div><img src={lnkdin} alt="img" /></div>
            </div>
          </div>
        </Left>
        <Right>
          <div className='form-con'>
            <h2>Questions or need assistance?<br />Let us know about it!</h2>
            <p className='sub'>Email us below to any question related <br />to our event</p>
            <AuthInput type="text" place="First Name" onChange={handleChange} name="first_name" value={feedback.first_name}/>
            <AuthInput type="tel" place="Phone Number" onChange={handleChange} name="phone_number" value={feedback.phone_number}/>
            <AuthInput type="email" place="Mail" onChange={handleChange} name="email" value={feedback.email}/>
            <AuthTextArea placeholder="Message" onChange={handleChange} name="message" value={feedback.message}/>
            <div className='btn'>
              <NavButton disabled={buttonDisabled} onClick={handleSubmit}>{`${loading ? 'loading...' : 'Submit'}`}</NavButton>
            </div>
          </div>
        </Right>
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;  
  border:1px solid black;
  background:#150E28; 
  margin-top:80px;
  display:grid;
  grid-template-columns:50% 50%;
  padding:40px 0;
  @media (max-width: 1200px) {  
    grid-template-columns:100%;  
  }
`;

const Left = styled.div`  
  width: 100%; 
  height:100vh; 
  padding:20px;
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 1200px) {  
    display:none;
  }
  h1{
    color: #D434FE;
    font-family: Clash Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom:20px;
  }
  .info{
    color: #FFF;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom:20px;
  }
  h2{
    color: #D434FE;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom:10px;
  }
  .socials{
    display:flex;
    align-items:center;
    img{
        margin-right:10px;
    }
  }
`;

const Right = styled.div`  
  width: 100%; 
  height:100vh; 
  display:flex; 
  align-items:center;
  @media (max-width: 1200px) {  
    justify-content:center;
  }
  .form-con{
    width: 80%; 
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding:50px;
    @media (max-width: 1200px) {  
      justify-content:center;
      background: none;
      box-shadow: none;
      padding:0px;
    }
    h2{
      color: #D434FE;
      font-family: Clash Display;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom:30px;
    }
    .sub{
      color: #FFF;
      font-family: Montserrat;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom:30px;
    }
    .btn{
      width:100%;
      display:flex; 
      justify-content:center;
    }
  }
`;

const NavButton = styled.button` 
    width: 172px;
    height: 44px;   
    padding: 10px 24px;
    border-radius: 4px;
    border:none;
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%); 
    line-height: normal; 
    color: #FFF;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;  
`;

export default Contact