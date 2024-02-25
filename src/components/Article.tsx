import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchArticleDetails } from '../store/articleSlice';
import { useAppDispatch } from '../store/hooks';
import { useAppSelector } from '../store/hooks';
import ArticleError from './ArticleError';

const Article = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const dispatch = useAppDispatch()
    const { data: article, loading, error } = useAppSelector((state) => state.articles);


    useEffect(() => {
        dispatch(fetchArticleDetails(id));
    }, [dispatch]);

    return (
        <div className='h-screen flex items-center justify-center flex-col'>

            {loading && <p className='font-mono font-bold text-lg text-slate-200'>Loading...</p>}
            {error && <ArticleError error={error} />}
            {!loading && !error && (
                <div >
                    <h1 className='mb-2 font-bold text-3xl pb-2 text-slate-300'>About the Article</h1>
                    <div className='rounded-lg p-20 overflow-hidden shadow-xl bg-slate-700 bg-opacity-50 text-slate-300'>
                        <h2 className='font-bold text-xl pb-5'>{article[0]?.title}</h2>
                        <h3 className='m-2 font-semibold text-justify text-lg'>Summary: {article[0]?.summary}</h3>
                        <div className=' bg-slate-200/10 rounded-lg p-5'>
                            <p className='m-2 text-justify text-slate-300'>{article[0]?.fullText}</p>
                        </div>
                        <button className="bg-slate-300 rounded-lg p-2 m-2 font-mono text-black" onClick={() => navigate('/')}>Go home</button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Article;
