import React, {useEffect, useState} from "react";

const regex = /^[0-9a-zA-Z(\-)]+$/;
const FixedButton = (props) =>{
    return (
        <div className="auth-button">
            {props.button ?
                <div onClick={props.onClick} className="fixed-button-solo">
                Verify Video Message
                </div>
            :
                <div className="fixed-button-solo" style={{background:"#2D2C32", color:"#898B93"}}>
                Verify Video Message
                </div>
            }

        </div>
        
    );
}

const Verify = (props) =>{

    const [button, setButton] = useState(false)
    const [otp, setOtp] = useState('');
    const handleChange = (otp) => setOtp(otp);
    const verifyOtp = () =>{
        props.verifyAuth(otp);
        props.setStatus(true);
    }

    useEffect(() => {
        if(otp.length ==6) setButton(true)
        else setButton(false)
    },[otp])
    const [upperCase, setUpperCase] = useState(false)
    const handleOtp = (evt) => {
        //  if (regex.test(evt.target.value))setOtp (evt.target.value );
        setOtp (evt.target.value )

            if(evt.target.value.length == 0){
                setUpperCase(false)
            }else{
                setUpperCase(true)
            }

     }
     const handleOtpClick = (e)=>{
         !upperCase ? setUpperCase(true):null;
         otp.length == 0 ? setUpperCase(false):null;
     }

     
    return(
            <div>
                <div className="authenticator-container">
                <h1 style={{fontSize:"20px"}}>Video Message Verification &#128274;</h1>
                <h2 className="text-secondary" style={{fontSize:"16px"}}>Enter the 6-digit video code to verify your <br/> Video Message!</h2>
                <div className="otp-container text-primary">    
                <div className="input-container">
                <form>
                <input
                    className={upperCase? "upper-case":null}
                    type="text"
                    id="otp"
                    maxLength={6}
                    pattern="[+-]?\d+(?:[.,]\d+)?"
                    onClick={(e)=>handleOtpClick(e)}
                    placeholder="Paste Unique Video Code"
                    onChange={(e)=>handleOtp(e)}
                    value={otp}
                    />
                 </form>
                    </div>                
                </div>
            </div>
            
            <FixedButton onClick={(e)=>verifyOtp(otp)} button={button} ></FixedButton>
            </div>
    );

}

export default Verify;