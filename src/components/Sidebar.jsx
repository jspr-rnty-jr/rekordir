import { FaAngleRight, FaRegSun   } from 'react-icons/fa';

function Sidebar() {

    return (
        <>
            <section className="sidebar">
                <div className="sidebar-container">
                    <div className="sidebar-profile">
                        <h2>Profile</h2>
                        <p>Account Setting <span className='icon'>< FaRegSun /></span></p>
                    </div>
                    <div className="sidebar-items">
                        <h2>Product</h2>
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
