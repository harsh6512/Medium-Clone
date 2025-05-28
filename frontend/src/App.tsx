import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from "./pages/Signin.tsx"
import { Blog } from './pages/Blog.tsx'
import Signup from './pages/Signup.tsx'
import {Blogs} from "./pages/Blogs.tsx"
import { Publish } from './pages/Publish';
import { Landing } from './pages/Landing.tsx'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} /> 
      <Route path="/signup"element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/blog/get/:id" element={<Blog/>}/>
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/publish" element={<Publish />} /> 
    </Routes>
    </BrowserRouter>
    </>
  )
}