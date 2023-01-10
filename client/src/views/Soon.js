import React from "react";
const Soon = () => {
    return (
        <section className="section hero soon">
            <video autoPlay muted loop id="myVideo" src="../assets/video.mp4"></video>
            <div className="wrapper">
                <div className="boxes">
                    <div className="box">
                        <h3 className="big-text" id="spinner">CS</h3>
                        <h3 className="heading">Sign up for updates</h3>
                        <p className="paragraph"><b>COLDSUPPLY</b> isn't just another brand. We are the voice of the youths who strive for greatness and thrive on individuality not bound by self imposed limitations.</p>

                        <form className="form" action="https://formsubmit.co/support@cold-supply.com" method="POST" >
                            <label htmlFor="#"><input type="email" name="email" placeholder="Enter Email Address" /></label>
                            <label htmlFor="#"><button>Register</button></label>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Soon;