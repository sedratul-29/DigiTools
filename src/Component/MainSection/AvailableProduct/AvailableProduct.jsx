import Product from "../Product/Product";
const AvailableProduct = ({ packages , handleSelectedProducts}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                packages.map(product => <Product key={product.id} product={product} handleSelectedProducts={handleSelectedProducts}></Product>)
            }
        </div>
    );
};

export default AvailableProduct;