// ArticleList.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, fetchArticles, RootState } from '../store/store';

const Test1: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data: articles, loading, error } = useSelector((state: RootState) => state.articles);

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    return (
        <div>
            <h1>Articles</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
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

export default Test1;
