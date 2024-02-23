// ArticleDetails.tsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ARTICLE_LIST_API } from '../utils/constants'

interface Article {
    id: number;
    title: string;
    content: string;
}

const Article = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        fetchArticle();
    }, []);

    const fetchArticle = async () => {
        try {
            const response = await fetch(`${ARTICLE_LIST_API}/${id}`);
            const data = await response.json();
            setArticle(data);
            setLoading(false);
        } catch (error) {
            console.log("My errs", error);
            setError(true);
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Article Details</h1>
            {loading && <p>Loading...</p>}
            {error && <p>OOPS</p>}
            {!loading && !error && article?.title && (
                <div>
                    <h2>{article?.title}</h2>
                    <p>{article?.content}</p>
                </div>
            )}
        </div>
    );
};

export default Article;
