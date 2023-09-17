import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({blogs, handleAddToBookmark, handleMarkAsRead}) => {
    return (
        <div className="md:w-2/3">
                {
                    blogs.map(blog=> 
                        <Blog
                            key={blog.id}
                            blog={blog}
                            handleAddToBookmark={handleAddToBookmark}
                            handleMarkAsRead={handleMarkAsRead}
                        />
                    )
                }
        </div>
    );
};
Blogs.propTypes = {
    blogs : PropTypes.object,
    handleAddToBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func,
};
export default Blogs;