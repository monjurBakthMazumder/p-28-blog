import PropTypes from 'prop-types';
import SingleBookmarks from '../SingleBookmarks/SingleBookmarks';

const Bookmark = ({bookmarks, handleRemovedFromBookmark, readTime}) => {
    console.log(bookmarks);
    return (
        <div className="md:w-1/3 py-5  h-fit sticky top-12 overflow-auto">
            <h1 className='text-xl md:text-2xl font-semibold mb-5 p-5 border-2'>Total {readTime} min read</h1>
            <div className=" border-2">    
                <h1 className='text-xl md:text-2xl font-semibold m-5'>Bookmark blogs: {bookmarks.length}</h1>
                {
                    bookmarks.map((Bookmark, index)=> 
                        <SingleBookmarks
                            key={Bookmark.id}
                            Bookmark={Bookmark}
                            index={index}
                            handleRemovedFromBookmark={handleRemovedFromBookmark}
                        />
                    )
                }
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmarks : PropTypes.object,
    handleRemovedFromBookmark : PropTypes.func,
    readTime : PropTypes.number,
};

export default Bookmark;