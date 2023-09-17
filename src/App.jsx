import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmark from './Component/Bookmark/Bookmark'
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [blogs, setBlogs] = useState([])
  const [bookmarks, setBookmarks] = useState([])
  const [readTime, setReadTime] = useState(0)
  const [loading , setLoading] = useState('flex')
  useEffect(()=>{
    setLoading('flex')
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
    setTimeout(() => {
      setLoading('hidden')
    }, 1000);
  },[])

  const handleRemovedFromBookmark = blog => {
    const removed = bookmarks.filter(item=> item.id !== blog.id)
    setBookmarks(removed);
    toast.success('Successfully removed', {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const handleMarkAsRead = blog => {
    const read = bookmarks.filter(item=> item.id !== blog.id)
    setReadTime(readTime + blog.reading_time)
    setBookmarks(read)
    toast.success('Congress for read a blog', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  }

  const handleAddToBookmark = blog => {
    const have = bookmarks.find(item=> item.id === blog.id)
    if(have){
      toast.error('Already added', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    else{
      setBookmarks([...bookmarks, blog])
      toast.success('Successfully added', {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }

  return (
    <>
        <div className={`fixed h-screen w-full flex justify-center items-center bg-white z-[1000] ${loading} gap-1`}>
          <span className="loading loading-spinner text-primary"></span>
          <span className="loading loading-spinner text-secondary"></span>
          <span className="loading loading-spinner text-accent"></span>
          <span className="loading loading-spinner text-neutral"></span>
          <span className="loading loading-spinner text-info"></span>
          <span className="loading loading-spinner text-success"></span>
          <span className="loading loading-spinner text-warning"></span>
          <span className="loading loading-spinner text-error"></span>
        </div>
        <div className="navbar bg-white shadow px-5 md:px-[5%] lg:px[10%] xl:px-[20%] sticky top-0 z-50">
          <a className="btn btn-ghost normal-case text-xl">Blog page</a>
        </div>
      <div className="px-5 md:px-[5%] lg:px-[10%] xl:px-[20%] py-10 md:flex justify-center gap-5">
        <Blogs blogs={blogs} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} />
        <Bookmark bookmarks={bookmarks} handleRemovedFromBookmark={handleRemovedFromBookmark} readTime={readTime}/>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
