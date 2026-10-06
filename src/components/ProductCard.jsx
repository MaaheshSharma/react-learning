function ProductCard({ name, price, inStock }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
      <br />
    </div>
  );
}

export default ProductCard;
