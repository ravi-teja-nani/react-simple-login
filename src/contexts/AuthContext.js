import React,{ useState, useEffect} from 'react';
import {userData} from '../User.js'
export const AuthData = React.createContext()

export default function AuthContext({children}){
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(false);
  const [preLoad, setPreLoad] = useState(true);

  useEffect(()=>{
          
       if(JSON.parse(window.sessionStorage.getItem("user"))){
              setUser(JSON.parse(window.sessionStorage.getItem("user")))
              setIsLogged(true)
              setPreLoad(!preLoad)
       } 
          

  }, [])


  const toggleLogin = () => {
    setIsLogged(prevState => !prevState); 
    async function getUser(){
       
       let userObject = await userData(); 
       return userObject 
  
    }
    
     getUser().then((userObject) => {
     setUser(userObject)  
     setPreLoad(!preLoad)
      
     
     window.sessionStorage.setItem("user", JSON.stringify(userObject));
     })  
        
  }
  const toggleLogout = () => {
       window.sessionStorage.removeItem('user')
       setUser(false)
       setIsLogged(prevState => !prevState)
       setPreLoad(!preLoad)
  }
  
  return <>
    <AuthData.Provider value={{isLogged, toggleLogin, toggleLogout, user, preLoad}}>
       {children}
    </AuthData.Provider>
  </>
}