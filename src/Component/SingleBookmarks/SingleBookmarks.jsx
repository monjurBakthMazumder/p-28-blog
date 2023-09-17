import PropTypes from 'prop-types';
import { FiDelete } from 'react-icons/fi';

const SingleBookmarks = ({Bookmark,index, handleRemovedFromBookmark}) => {
    const {title} = Bookmark;
    return (
        <div className='flex justify-between items-center gap-2 px-5 p-2 border-2 rounded-lg m-3'>
            <h1 className='flex-1'>{++index}. {title}</h1>
            <FiDelete onClick={()=>handleRemovedFromBookmark(Bookmark)} className='cursor-pointer hover:text-red-500 text-xl'/>
        </div>
    );
};

SingleBookmarks.propTypes = {
    Bookmark : PropTypes.object,
    index : PropTypes.number,
    handleRemovedFromBookmark : PropTypes.func,
};

export default SingleBookmarks;