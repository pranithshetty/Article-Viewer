interface ErrorProp {
    error: string;
}

const ArticleError = ({ error }: ErrorProp) => {

    function refreshPage() {
        window.location.reload()
    }
    return (
        <div className='h-screen flex items-center justify-center flex-col font-mono '>
            <div className='rounded-lg p-20 overflow-hidden shadow-lg bg-red-800 bg-opacity-40 text-red-600 border border-red-600'>
                <h1 className="font-semibold text-xl">Oops there was a error!<span>XP</span></h1>
                <p className="text-xs">{error}</p>
                <div className='flex justify-center'>
                    <button className="bg-slate-300 rounded-lg p-2 m-2 font-mono font-bold" onClick={refreshPage}>Referesh</button>
                </div>
            </div>
        </div>

    )
}

export default ArticleError