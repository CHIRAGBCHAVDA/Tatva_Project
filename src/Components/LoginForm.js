import React, { useState } from 'react';
import './Title.css'




const LoginForm =() =>{
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');
  const [mail, setMail] = useState('');

  const UnameChange = (event) => {
    setUname(event.target.value);
  };

  const PwdChange = (event) => {
    setPwd(event.target.value);
  };

  const MailChange = (event) => {
    setMail(event.target.value);
  };

  const handleForm = (event) => {
    event.preventDefault();

    alert(`Username: ${uname} \nEmail: ${mail} \nPassword: ${pwd}`);
    setUname('');
    setPwd('');
    setMail('');
  };




    return (
        <div className='form-container'>
        <h2>Login Form yayyiee</h2>
        <form onSubmit={handleForm}>
            <label>
            Username: <input type="text" value = {uname} onChange={UnameChange}/>
            </label>
            <label>
                Email: <input type="email" value = {mail} onChange={MailChange}/>
            </label>

            <label>
               Password: <input type="password" value = {pwd} onChange={PwdChange}/>
            </label>
            <br />
           <button type="submit">Login</button>
        </form>


        </div>
    );
};

export default LoginForm;





