import { getProduct } from "../utils";
import { useEffect,useState } from "react";

export const useGetProduct = () =>{
    const [product, setProduct] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const fetchProduct = async() =>{
            try{
                setLoading(true);
                const result = await getProduct();
                console.log({result});
                setProduct(result);
                setLoading(false);
            }catch(error){
                setError(`Error: ${error.message}`)
                setLoading(false);

            }
        };
         fetchProduct();
    }, []);

    return{product,error,loading}

};