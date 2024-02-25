import React from "react";

interface ErrorProp {
    error: string;
}

const ArticleError: React.FC<ErrorProp> = ({ error }) => {

    function refreshPage() {
        window.location.reload()
    }
    return (
        <>
            <h1>Oops there was a error!<span>XP</span></h1>
            <p>{error}</p>
            <button onClick={refreshPage}>Referesh</button>
        </>

    )
}

export default ArticleError