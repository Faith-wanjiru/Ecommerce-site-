import '../index.css';
const ProductCard = ({image, title}) =>{
    return(
        <div>
            <img src={image} alt={`${title}profile`} className="img"/>
            <h2>{title}</h2>
        </div>
    )
}
export default ProductCard;