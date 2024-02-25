import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticles } from '../store/articleSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import ArticleError from './ArticleError';

const Article = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch()
    const { data: articles, loading, error } = useAppSelector((state) => state.articles);

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
            {error && <ArticleError error={error} />}
            {!loading && !error && (
                <div>
                    <h2>{article?.title}</h2>
                    <p>{article?.summary}</p>
                </div>
            )}
        </div>
    );
};

export default Article;
