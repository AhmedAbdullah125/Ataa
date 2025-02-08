'use client'

import React from 'react'; // Importing React to use JSX syntax and create components.
import { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import parse from 'html-react-parser';
import Loading from '@/app/loading';

export default function Policy() { // Defining the main functional component named 'Footer'.
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/privacy`);
                let data = response.data.data;
                setData(data)
                setLoading(false)
            } catch (error) {
                
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };
        getData();
    }, []);
    return (
        <div className="terms-page">
            {
                loading ? <Loading /> :
                    <div className='container m-auto' >
                        {parse(data.privacy)}
                    </div>
            }
        </div>
    )
}
