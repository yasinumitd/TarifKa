import {useEffect,useState} from "react"
import axios from "axios"

function useFetch(url){
    const [loading,setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] =useState(null);

    async function fetchData(){
        try {
            const {data: responseData} =await axios.get(url);
            setData(responseData);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err.message)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {error,loading,data}
}

export default useFetch;