import React from 'react';

const Pagination = ({ setPage, users }) => {
    
    const fetchNextPrevTasks = (link) => {
        const url = new URL(link);
        setPage(url.searchParams.get('page'));
    }

    return (
        <>
        <div className="px-2 my-4 d-flex justify-content-between">
                        <div className="float-left">
                            Showing {users.from} to {users.to} from {users.total} results.
                        </div>
                        <div className="float-right">
                            <ul className="flex pagination">
                                    {
                                        users.links?.map((link,index) => (
                                            <li key={index} className={`page-item ${link.active ? 'active' : ''}`}>
                                                {link.label=='...'?'...':(
                                                <button 
                                                onClick={() => fetchNextPrevTasks(link.url)}
                                                className={`page-link px-4 py-2 mr-1 rounded ${!link.url && 'opacity-50 cursor-not-allowed'} ${link.active ? 'bg-primary-600 text-white' : 'bg-slate-300 text-black hover:bg-primary-600 hover:text-white'}`}
                                                style={{ cursor: 'pointer' }}
                                                disabled={!link.url?true:false}
                                                >
                                                {link.label.replace('&laquo;', '').replace('&raquo;', '')}
                                                </button>
                                                )}
                                            </li>
                                        ))
                                    }
                            </ul>
                        </div>
            </div>
        </>
    );
};

export default Pagination;
