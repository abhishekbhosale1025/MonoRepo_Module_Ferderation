// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

const KEY = 'asdfghuygfcvytfcvhjnmdfghgfd'

export default function handler(req: NextApiRequest,res: NextApiResponse) {
 console.log(req.body)

  if(!req.body){
    res.statusCode = 404
    res.end('Error')
    return
  }

 const {username,password} = req.body
 res.json({
    token : jwt.sign(
      {
      username,
      admin: username ==="admin" && password === "admin"
  },
  KEY
  )
 })
}
