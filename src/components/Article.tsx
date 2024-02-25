import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchArticles } from '../store/articleSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import ArticleError from './ArticleError';

const Article = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    //const dispatch = useAppDispatch()
    const { data: articles, loading, error } = useAppSelector((state) => state.articles);

    const article = articles.find((article) => {
        return article.id === id
    });


    // useEffect(() => {
    //     dispatch(fetchArticles());
    // }, [dispatch]);

    return (
        <div className='h-screen flex items-center justify-center flex-col'>

            {loading && <p className='font-mono font-bold text-lg text-slate-200'>Loading...</p>}
            {error && <ArticleError error={error} />}
            {!loading && !error && (
                <div >
                    <h1 className='mb-2 font-bold text-3xl text-slate-300'>About the Article</h1>
                    <div className='rounded-lg p-20 overflow-hidden shadow-xl bg-slate-700 bg-opacity-50 text-slate-300'>
                        <h2 className='font-bold text-m'>{article?.title}</h2>
                        <p className='m-2'>{article?.summary}</p>
                    </div>
                    <button className="bg-slate-300 rounded-lg p-2 m-2 font-mono" onClick={() => navigate('/')}>Go home</button>

                </div>
            )}
        </div>
    );
};

export default Article;
