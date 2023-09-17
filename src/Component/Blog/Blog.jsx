import PropTypes from 'prop-types';
import { BsBookmarkStar } from 'react-icons/bs';
const Blog = ({blog,handleAddToBookmark, handleMarkAsRead}) => {
    const {cover, title, description, author_img, author, posted_date, reading_time, hashtags, id} = blog;
    return (
        <div className="card card-compact border-2 my-5">
        <figure><img src={cover} alt={`image of ${title}`} className='w-full'/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-justify'>{description.slice(0,200)}...<span className='text-xs underline ml-1 text-blue-800 cursor-pointer' onClick={()=>document.getElementById(`my_modal_1${id}`).showModal()}>read more</span></p>
                <dialog id={`my_modal_1${id}`} className="modal">
                <div className="modal-box">
                <div className="card-body">
                <figure><img src={cover} alt={`image of ${title}`} className='w-full'/></figure>
                <h2 className="card-title">{title}</h2>
                <p className='text-justify'>{description}</p>
                <p>
                    {
                        hashtags.map((hashtag, index) => 
                            <span 
                                className='mr-2 underline text-xs font-light'
                                key={index}>
                                    #{hashtag}
                            </span>
                        )
                    }
                </p>
            </div>
                    <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
                </dialog>
                <p>
                    {
                        hashtags.map((hashtag, index) => 
                            <span 
                                className='mr-2 underline text-xs font-light'
                                key={index}>
                                    #{hashtag}
                            </span>
                        )
                    }
                </p>
            </div>
            <hr /><hr /><hr />
            <div className="">
                <div className=" flex justify-between items-center gap-2 max-lg:gap-5 p-5">
                    <div className="flex items-center gap-2">
                        <img src={author_img} alt="" className='w-10'/>
                        <div className="">
                            <h1 className='text-base font-medium'>{author}</h1>
                            <p className='text-xs font-light'>{posted_date}</p>
                        </div>
                    </div>
                    <p className='flex items-center gap-2'>{reading_time} min read <BsBookmarkStar onClick={()=> handleAddToBookmark(blog)} className='cursor-pointer hover:scale-110 duration-500 hover:text-blue-800'/></p>
                </div>
                <button onClick={()=>handleMarkAsRead(blog)} className='underline p-5 pt-0 font-medium'>mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object,
    handleAddToBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func,
};

export default Blog;