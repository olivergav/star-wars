import {useEffect, useState} from "react";

const useFetch = (url, formatData = (data) => data) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Fetching');

        setLoading(true);
        setError(null);
        setResponse(null);

        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                setResponse(formatData(response));
                // setLoading(false);
            })
            .catch((error) => {
                setError(error);
                // setLoading(false);
            }).finally(() => {
            setLoading(false)
        })
    }, [url, formatData])

    return [response, loading, error]

}

export default useFetch;