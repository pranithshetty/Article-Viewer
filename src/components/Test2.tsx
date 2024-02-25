// ArticleDetails.tsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, fetchArticles, RootState } from '../store/store';

const Test2: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { data: articles, loading, error } = useSelector((state: RootState) => state.articles);


    const article = articles.find((article) => {


        return article.id === id
    });


    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    return (
        <div>
            <h1>Article Details</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <div>
                    <h2>{article?.title}</h2>
                    <p>{article?.summary}</p>
                </div>
            )}
        </div>
    );
};

export default Test2;
