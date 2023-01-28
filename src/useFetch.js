import { useState, useEffect } from "react";

const useFetch = (db_url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            
        fetch(db_url, { signal: abortCont.signal })
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
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                    }
                else{
                    setPending(false);
                    setError(err.message);
                    }
                
            })
        }, 1000);


        return () => abortCont.abort();
    }, 
    [db_url] //dependancy array
    );
    return { data, isPending, error} ;
}
 
export default useFetch;