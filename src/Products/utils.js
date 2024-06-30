const baseurl =process.env.REACT_APP_BASE_URL;

async function  response(response){
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json();
}
export const getProduct=()=>
    fetch(`${baseurl}/products`).then(response)
