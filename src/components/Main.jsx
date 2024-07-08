import Card from '../components/ui/Card'

const Main = () => {
    return ( 
        <main>
            <div className='main-header'>
                <h1>Main</h1>
            </div>
            <div className="main-container">
                < Card />
                < Card />
                < Card />
                < Card />
                < Card />
                < Card />
            </div>
        </main>
    );
}
export default Main;