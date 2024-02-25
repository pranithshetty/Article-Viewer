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
        <div className='h-full flex items-center justify-center'>
            {loading && <p className='h-screen font-mono font-bold text-lg text-slate-200'>Loading...</p>}
            {error && <ArticleError error={error} />}
            {!loading && !error && (
                <div className='h-full'>
                    <h1 className='font-bold text-3xl mb-2 text-slate-300'>Articles</h1>
                    <div className='h-fit grid grid-cols-1 gap-1 sm:grid-cols-4 md:max-xl:grid-cols-2'>
                        {articles.map((article: any) => (
                            <Link to={`/article/${article.id}`} key={article.id}>
                                <div className='rounded-lg border h-[250px] border-yellow-300/20 overflow-hidden shadow-lg text-left mb-2 p-5 m-5 bg-slate-200/20 bg-opacity-50 text-slate-300'>
                                    <h1 className='font-semibold text-yellow-300'>{article.title}</h1>
                                    <p className='text-sm pt-4 font-mono line-clamp-5 overflow-hidden'>{article.summary}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArticleList;