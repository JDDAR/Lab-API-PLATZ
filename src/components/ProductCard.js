import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  //console.log("Esto es lo que estoy renderizando: ");
  console.log("Producto cards:", product); // Revisa qué valores tiene el objeto product
  //console.log(product.images[0]);

  return (
    <div className="productCard">
      <img className="Imagen" src={product.images} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`}>Ver detalles</Link>
    </div>
  );
};

export default ProductCard;
