import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import fw from "../pages/home/images/Boy and check mark.svg"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "600px", 
    bgcolor: 'rgba(255, 255, 255, 0.01)',
    border: "1px solid #D434FE",
    borderRadius: "5px",
    outline: "none",
    padding: "20px",
    '@media (max-width: 500px)': {
        width: "90%",
    },
};

const FeedbackModal = ({ mOpen, handleModClose, message }) => {
    return (
        <Modal
            open={mOpen}
            onClose={handleModClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <ModCon>
                    <div className='img-con'>
                        <img src={fw} alt="img" />
                    </div>
                    <h1>Congratulations you have successfully Registered</h1>
                    <p>Yes, it was easy and you did it!<br/>
                        check your mail box for next step</p>
                    <NavButton onClick={handleModClose}>Back</NavButton>
                </ModCon>

            </Box>
        </Modal>
    )
}

const ModCon = styled.div`
    width:100%; 
    display:flex;
    flex-direction:column;
    justify-content:center; 
    align-items:center; 
    margin-bottom:20px;
    .img-con{
        img{
            width:90%;
            height:90%;
        }
    }
    h1{
        color: #FFF;
        text-align: center;
        font-family: Montserrat;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom:20px;
        @media (max-width: 1200px) {  
            color: #FFF;
            text-align: center;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }
    }
    p{
        color: #FFF;
        text-align: center;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom:20px;
        @media (max-width: 1200px) {  
            color: #FFF;
            text-align: center;
            font-family: Montserrat;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
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

export default FeedbackModal