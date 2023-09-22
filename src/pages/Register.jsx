import React, { useEffect } from 'react'
import styled from 'styled-components';
import AppLayout from '../layouts/AppLayout';
import manondesk from "./home/images/manondesk.svg"
import fw from "./home/images/fw.svg"
import sw from "./home/images/sw.svg"
import AuthInputWithLabel from '../components/auth/AuthInputWithLabel';
import AuthSelect from '../components/auth/AuthSelect';
import { getCategoryList, register } from "../services/register"
import toast from "react-hot-toast";

const Register = () => {

    const linkTypes = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 5, label: 5 },
        { value: 10, label: 10 },

    ]

    const [user, setUser] = React.useState({
        email: "",
        phone_number: "",
        team_name: "",
        group_size: 0,
        project_topic: "",
        category: 0,
        privacy_poclicy_accepted: false
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(true)
    const [categories, setCategory] = React.useState([]);
    const [loading, setLoading] = React.useState(false)

    const handleRegister = async () => {
        try {
            setLoading(true)
            const response = await register(user);
            console.log(response);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.error(error.message);
        }
    };

    const handleCategory = async () => {
        try {
            const response = await getCategoryList(user);
            let newRes = response.map(val => ({ value: val.id, label: val.name }))
            setCategory(prev => ([...newRes]))
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target// takes the name and vale of event currently changing
        setUser(prev => ({ ...prev, [name]: value }))
        
    }
    const handleSelectCat = (value) => { // takes the name and vale of event currently changing
        setUser(prev => ({ ...prev, category: value.value }))
        
    }
    const handleSelectSize = (value) => {
        setUser(prev => ({ ...prev, group_size: value.value }))
        
    }

    const handleCheck = (e) => {
        setUser(prev => ({ ...prev, privacy_poclicy_accepted: !prev.privacy_poclicy_accepted }))
    }

    useEffect(() => {
        const isComplete = Object.values(user).every(item => Boolean(item))//check if all is not empty
        isComplete ? setButtonDisabled(false) : setButtonDisabled(true)
        handleCategory()
    }, [user]);

    console.log(user,buttonDisabled); 

    return (
        <AppLayout>
            <Con>
                <Left>
                    <img src={manondesk} alt="img" />
                </Left>
                <Right>
                    <div className='form-con'>
                        <h2>Register</h2>
                        <div className='sub-con'>
                            <p className='sub-head'>Be part of this movement!</p>
                            <div className='emo'>
                                <img src={fw} alt="img" />
                                <img src={sw} alt="img" />
                            </div>
                        </div>
                        <h3>CREATE YOUR ACCOUNT</h3>

                        <GridCon>
                            <AuthInputWithLabel type="text" place="Enter the name of your group" label="Team's Name" onChange={handleChange} name="team_name" value={user.team_name} />
                            <AuthInputWithLabel type="tel" place="Enter your phone number" label="Phone" onChange={handleChange} name="phone_number" value={user.phone_number} />
                            <AuthInputWithLabel type="email" place="Enter your email address" label="Email" onChange={handleChange} name="email" value={user.email} />
                            <AuthInputWithLabel type="text" place="What is your group project topic" label="Project Topic" onChange={handleChange} name="project_topic" value={user.project_topic} />
                            <AuthSelect label="Category" options={categories} value={user.category} onChange={handleSelectCat} />
                            <AuthSelect label="Group Size" options={linkTypes} value={user.group_size} onChange={handleSelectSize} />
                        </GridCon>
                        <p className='info'>Please review your registration details before submitting</p>
                        <div className='check'>
                            <input type='checkbox' onChange={handleCheck} />
                            <p>I agreed with the event terms and conditions  and privacy policy</p>
                        </div>
                        <NavButton disabled={buttonDisabled} onClick={handleRegister}>{`${loading ? 'loading...' : 'Register Now'}`}</NavButton>
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
  grid-template-columns:45% 55%;
  padding:40px;
  @media (max-width: 1200px) {  
    grid-template-columns:100%;  
  }
`;

const Left = styled.div`  
  width: 100%;  
  padding:20px;
  display:flex;
  justify-content:center;
  align-items:center;  
  @media (max-width: 1200px) {  
    display:none;
  }
`;

const Right = styled.div`  
  width: 100%;  
  display:flex; 
  align-items:center;
  @media (max-width: 1200px) {  
    justify-content:center;
  }
  .form-con{
    width: 95%; 
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
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal; 
    }
    .sub-con{
        display:flex;
        align-items:flex-end;
        margin-bottom:20px;
        .sub-head{
            color: #FFF;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
        .emo{
            width: 101px; 
            display:flex;
            justify-content:center;
            border-bottom:1px solid #D434FE
        }
    }
    h3{
        color: #FFF;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom:30px;
    }
    .info{
        color: #FF26B9;
        font-family: Montserrat;
        font-size: 12px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
        margin-bottom:20px;
    }
    .check{
        display:flex;
        margin-bottom:20px;
        input[type=checkbox]{
            appearance: none;
            width: 16px;
            height: 16px;
            border: 1px solid white;
            background-color: transparent;
            cursor: pointer;

            &:checked {
                background-color: transparent;
            }
            &:checked::before {
                content: '✓'; /* Add content here */
                display: block;
                text-align: center;
                font-size: 12px;
                color: white;
                background-color: transparent;
              }
            
        }
        P{
            color: #FFF;
            font-family: Montserrat;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-left:10px;
        }
    }
    
  }
`;


const NavButton = styled.button` 
    width: 100%;
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

const GridCon = styled.div`  
  width: 100%;  
  display:grid;
  grid-template-columns:1fr 1fr;
  column-gap:20px;  
  @media (max-width: 600px) {  
    grid-template-columns:100%;
  }
`;
export default Register