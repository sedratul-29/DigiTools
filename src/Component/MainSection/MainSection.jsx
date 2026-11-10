import { use, useState } from "react";
import AvailableProduct from "./AvailableProduct/AvailableProduct";
import CardProduct from "./CartProduct/CardProduct";


const MainSection = ({ packagesPromise }) => {

    const [selected, setSelected] = useState("Products");
    // console.log(selected)

    //Lift up the State
    const [selectedProducts,setSelectedProducts] = useState([]);
    const handleSelectedProducts = (selectedProduct) => {
        for (const s of selectedProducts) {
            if ((s.id == selectedProduct.id) && (selectedProducts.length != 0)) {
                alert("This product is already in your cart!");
                return;
            }
        }
        setSelectedProducts([...selectedProducts, selectedProduct]);
    }

    const packages = use(packagesPromise);
    // console.log(packages);
    // console.log(Array.isArray(packages));

    return (
        <div className="my-10 lg:mx-auto lg:my-[120px]">
            <div className="text-center mb-10">
                <h1 className="font-extrabold text-3xl text-[#101727] lg:text-5xl mb-4">Premium Digital Tools</h1>
                <p className="font-normal text-base text-[#627382] leading-5 mb-4">Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
                <div>
                    <button onClick={() => setSelected("Products")}>Products</button>
                    <button onClick={() => setSelected("Cart")}>Cart (2)</button>
                </div>
            </div>
            <div className="mx-4 lg:mx-[200px]">
                {
                    selected === "Products" ?
                        <AvailableProduct packages={packages} handleSelectedProducts={handleSelectedProducts} /> :
                        <CardProduct selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
                }
            </div>
        </div>
    );
};

export default MainSection;