import { useState, useEffect } from "react";

const useFetch = (db_url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('useFetch custom hook ran');
        fetch(db_url)
            .then(response => {
                if(!response.ok)
                {
                    throw Error('COULD NOT FETCH DATA');
                }
                return response.json();
            })
            .then(response_data => {
                setData(response_data);
                setPending(false);
            })
            .catch( err => {
                setError(err.message);
                setPending(false);
            })
    }, 
    [] //dependancy array ONLY run at first render.
    );
    return { data, isPending, error} ;
}
 
export default useFetch;