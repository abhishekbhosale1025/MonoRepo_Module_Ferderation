import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import jwt from 'jsonwebtoken'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [username,setUsername] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const [msg,setMsg] = useState<string>('You are not logged in...')

 async function submitForm() {
    const res = await fetch('/api/login',{
      method: "POST",
      headers:{
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({username,password})
    }).then((r)=>r.json())

    const token = res.token

    if(token){
      const json = jwt.decode(token) as { [key:string] :string}
      console.log(json,"response")
      setMsg(`Welcome ${json.username} and You are ${json.admin ? 'an admin' : 'not an admin'}`)
    }
    else{
      setMsg('Something went wrong')
    }
  }

  return (
    <>
    <h1>{msg}</h1>
     <form>
        <input 
          type={'text'} 
          value='admin' 
          name='username'
          onChange={(e)=>setUsername(e.target.value)}/>
        <br></br>
        <input
          type={'password'} 
          value='admin' 
          name='password'
          onChange={(e)=>setPassword(e.target.value)}/>
        <br></br>
        <input 
          type={'submit'} value={'Login'} onClick={(e)=>{
            e.preventDefault()
            submitForm()
          }} />
     </form>
    </>
  )
}
