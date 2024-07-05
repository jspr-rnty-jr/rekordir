import { FaAngleRight, FaRegSun   } from 'react-icons/fa';

function Sidebar() {

    return (
        <>
            <section className="sidebar">
                <div className="sidebar-container">
                    <div className="sidebar-profile">
                        <h2>Profile Settings</h2>
                        <a href='#'>Account Setting <span className='icon'>< FaRegSun /></span></a>
                    </div>
                    <div className="sidebar-items">
                        <h2>Record Products</h2>
                        <ul>
                            <li className="sidebar-links"><a href="#">Raw <span className='icon'><FaAngleRight /></span></a></li>
                            <li className="sidebar-links"><a href="#">Processed <span className='icon'><FaAngleRight /></span></a></li>
                            <li className="sidebar-links"><a href="#">For Production <span className='icon'><FaAngleRight /></span></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sidebar
