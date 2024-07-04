import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
    return ( 
        <>
            < Navbar />
            < Sidebar />
            <main>
                <div className="main-container">
                    <h1>Main</h1>
                </div>
            </main>
        </>
    );
}
export default MainLayout;