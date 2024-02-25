import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../store/articleSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import ArticleError from './ArticleError';

const ArticleList = () => {
    const dispatch = useAppDispatch()
    const { data: articles, loading, error } = useAppSelector((state) => state.articles);

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    return (
        <div>
            <h1>Articles</h1>
            {loading && <p>Loading...</p>}
            {error && <ArticleError error={error} />}
            {!loading && !error && (
                <ul>
                    {articles.map((article: any) => (
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