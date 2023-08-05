import React, { useState ,useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const Popuplogin = ({ setPopup }) => {

    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    function handleChange(e) {
        setPassword(e.target.value);
    }
    const handleClick = (e) => {
        e.preventDefault();
        if (password === "") {
            setMessage("Please enter password");
        } else if (password === "anjali") {
            alert("login sucessfully");
        }
        else {
            setMessage("Incorrect password");
        }
    }
    useEffect(()=>{
        AOS.init({duration:1000});
    },[]);
    return (
        <>     
            <div>
                <div onClick={setPopup.bind(this, false)} className="blurbg" style={{ backgroundImage: "url(bg.jpg)", alignItems: 'center' }}>
                    <div onClick={(e) => e.stopPropagation()} style={{ marginTop: '-47rem', 'margin-left': "25rem", height: "39rem", width: "61rem", padding: "4rem" }}>
                    </div>
                </div>
            </div>
        
            <div className="userlogin" data-aos="zoom in">
                <div >
                    <img className="userlogo" style={{ borderRadius: "2rem" }} src="user.png" alt="." />
                </div>
                <div style={{ padding: "1.5rem", alignItems: 'center' }}>
                    <h1>ANJALI VISHWAKARMA</h1>
                    <div class="form-floating">
                        <form onSubmit={handleClick} className="input-group mt-4">
                            <input type="password" class="form-control" placeholder="password" onChange={handleChange} value={password} />
                            <p>{message}</p>
                            <a href="https://www.linkedin.com/in/anjali-vishwakarma-510bb6219/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="white" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg></a>
                        </form>
                    </div>
                </div>
            </div>
       
        </>
    )
}

export default Popuplogin;