import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLE_LIST_API } from '../utils/constants'
//import {useFetchArticles} from '../hooks/useFetchArticles'

interface Article {
    id: number;
    title: string;
    content?: string
}

const ArticleList = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await fetch(ARTICLE_LIST_API);
            const data = await response.json();
            setArticles(data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    //const [articles,loading,error]= useFetchArticles()

    return (
        <div>
            <h1 className='p-5 font-extrabold text-lg'>Articles</h1>
            {loading && <p>Loading...</p>}
            {error && <p>OOps!</p>}
            {!loading && !error && articles[0] && (
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>
                            <Link to={`/article/${article.id}`}>{article.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ArticleList;
