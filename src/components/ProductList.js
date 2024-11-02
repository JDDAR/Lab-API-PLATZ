import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../redux/thunks/productsThunks";
import ProductCard from "./ProductCard";

const ProductList = () => {
  //Limite de productos a cargar
  const [limit] = useState(8);
  //Inicializa el offset en 0
  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    //Llamamos la accion asincrona fetchProducts con limit y offset
    dispatch(fetchProducts(limit, offset));
  }, [dispatch, limit, offset]);

  if (status === "loading") {
    return <p>Cargando producto ..... </p>;
  }
  if (status === "failed") {
    return <p>Error : {error}</p>;
  }

  const loadMore = () => {
    //Aumentando el offset para cargar mas productos
    setOffset(offset + limit);
    console.log("Items en ProductList:", items);
  };

  return (
    <>
      <div className="productList">
        {Array.isArray(items) && items.length > 0 ? (
          items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
      <div className="btn-cargar">
        <button className="btn-cargar__button" onClick={loadMore}>
          Cargar más productos
        </button>
      </div>
    </>
  );
};

export default ProductList;
