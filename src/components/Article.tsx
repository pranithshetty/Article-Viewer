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
    }, [dispatch, id]);

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-400'>
            <div className='w-full px-4'>
                {loading && <p className='font-mono font-bold text-lg text-gray-200 text-center'>Loading...</p>}
                {error && <ArticleError error={error} />}
                {!loading && !error && (
                    <div className='bg-gray-900 bg-opacity-50 text-gray-300 rounded-lg overflow-hidden shadow-xl border border-yellow-300/20'>
                        <h1 className='mb-4 font-bold text-2xl px-4 py-2 bg-gray-800 bg-opacity-50 text-center'>About the Article</h1>
                        <div className='p-4'>
                            <h2 className='font-bold text-xl pb-2 text-yellow-200'>{article[0]?.title}</h2>
                            <h3 className='font-semibold text-lg pb-2'>Summary:</h3>
                            <p className='text-justify text-gray-300 pb-4'>{article[0]?.summary}</p>
                            <h3 className='font-semibold text-lg pb-2'>Full Text:</h3>
                            <p className='text-justify text-gray-300'>{article[0]?.fullText}</p>
                            <div className='flex justify-center'>
                                <button className="bg-gray-300 rounded-lg py-2 px-4 mt-4 font-mono text-black w-full sm:w-auto" onClick={() => navigate('/')}>Go home</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Article;
