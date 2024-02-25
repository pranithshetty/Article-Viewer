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
        <div className='h-full flex items-center justify-center flex-col'>
            {loading && <p className='h-screen font-mono font-bold text-lg text-slate-200'>Loading...</p>}
            {error && <ArticleError error={error} />}
            {!loading && !error && (
                <div>
                    <h1 className='font-bold text-2xl mb-2 text-slate-300'>Articles</h1>

                    <ul>
                        {articles.map((article: any) => (
                            <li className='rounded-lg overflow-hidden shadow-lg font-bold text-lg mb-2 p-5 m-5 bg-slate-700 bg-opacity-50 text-slate-300' key={article.id}>
                                <Link to={`/article/${article.id}`}>{article.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ArticleList;