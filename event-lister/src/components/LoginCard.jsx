import React from 'react'
import { useState, useRef, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../context/AuthContext'
import axios from '../api/axios'
const LOGIN_URL = '/users'

const LoginCard = () => {

  const {dispatch} = useContext(authContext);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [err, setErr] = useState('');
  const [success, SetSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErr('');
    
  }, [user, pwd])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUser('');
      setPwd('');
      const res = await axios.post(LOGIN_URL,
        JSON.stringify({user, pwd}),
        {
          headers : {'Content-Type' : 'application/json'},
          withCredentials : true
        }
      );
      //console.log(JSON.stringify(res))
      //const id = res?.data?.id;
      //const token = res?.data?.token

      dispatch({
        type : "LOGIN_SUCCESS",
        payload : {
          user : 'Kevin', //res?.data?.user
          pwd : '1234', //res?.data?.pwd
          //token : '22333',
          //id : '332'
        }
      });
      
      SetSuccess(true);

    } catch (error) {
      if (!error?.res) {
        setErr('No server Response');
      }else if(error.res?.status === 400){
        setErr('Missing username or password');
      }else if(error.res?.status === 401){
        setErr('Unauthorized');
      }else{
        setErr('Login failed');
      }
    }
  }
  

  return (
    <>
      <div className="text-center my-[80px] bg-blue-400 flex flex-col mx-[150px] rounded-[40px]">
        <h1 className="text-[2em] mb-10">Login</h1>
      <form onSubmit={handleSubmit}>
        <div ref = {errRef} className={err ? "errmsg" : "offscreen"} >{err}</div>
        <div className="block mb-10">
        <label htmlFor="username" className=''>Username: </label>
        <input type="text" required placeholder='username' ref = {userRef} onChange = {(e) => setUser(e.target.value)} autoComplete = "off" className='rounded-xl' value={user}/>
        </div>
        <div className="block">
        <label htmlFor="username">Password: </label>
        <input type="password" required autoComplete='off' onChange={(e) => setPwd(e.target.value)} value= {pwd} placeholder='Password' className='rounded-xl'/>
        </div>
        <div className="block mt-10">
          <button className="bg-white px-5 rounded-md">Login</button>
        </div>
        <div className="text-black mt-5">Are you an community looking to post your events??</div>
        <Link to='/register'><div className='underline mb-5'>Register here</div></Link>
      </form>

      </div>
    </>
  )
}

export default LoginCard
