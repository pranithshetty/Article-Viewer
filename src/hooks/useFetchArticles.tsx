import { useEffect, useState } from 'react';
import { ARTICLE_LIST_API } from '../utils/constants'
//type of article
interface Article {
    id: number;
    title: string;
    content?: string;
}

export const useFetchArticles = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await fetch(ARTICLE_LIST_API);
            const data = await response.json();
            setArticles(data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };
    return [articles, loading, error]
}