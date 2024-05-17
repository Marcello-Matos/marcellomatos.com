import React , { useEffect, useState } from 'react';
import axios from 'axios';

function DevTo(){

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://www.linkedin.com/in/marcello-matos-813199278/';
        axios.get(apiUrl)
        .then(response => {
            setArticles(response.data);
        })
        .catch(error => {
            console.error('Error to get articles: ', error);
        });
    }, []);

    return articles
           
};

export default DevTo;