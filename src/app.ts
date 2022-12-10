import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan"


const app = express()

app.use(express.json())
app.use(logger("dev"))
app.use(cookieParser())



const port = 4000
app.listen(port, ()=>{
  console.log(`Server is running on port:${port}`)
})

export default app