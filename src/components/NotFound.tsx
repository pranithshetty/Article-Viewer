import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='h-screen flex items-center justify-center flex-col font-mono '>
            <div className='rounded-lg p-20 overflow-hidden shadow-lg bg-red-800 bg-opacity-40 text-red-600 border border-red-600'>
                <h1 className="font-bold text-2xl">404</h1>
                <h2 className="font-bold text-xl">Page Not Found</h2>
                <button className="bg-slate-300 rounded-lg p-2 m-2 font-mono font-bold" onClick={() => navigate('/')}>Home</button>
            </div>
        </div>

    )
}

export default NotFound