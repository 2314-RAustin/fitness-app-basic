import { useState, useEffect } from 'react';

export default (url) => {

    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetchResource = async () => {
            try{
                let res = await fetch(`${url}/exercises`);
                let data = await res.json();

                setData(data);
                setLoading(false);
            }
            catch(error){
                console.error(error);
                setError(error);
                setLoading(false);
            }
        }
        fetchResource();
    }, [url]);

    return{ data, loading, error }
}