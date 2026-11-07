import { use } from "react";
import Product from "./Product/Product";

const MainSection = ({ packagesPromise }) => {

    const packages = use(packagesPromise);
    console.log(packages);
    console.log(Array.isArray(packages))

    return (
        <div className=" mx-auto my-[120px]">
            <div className="text-center">
                <h1 className="font-extrabold text-5xl text-[#101727] mb-4">Premium Digital Tools</h1>
                <p className="font-normal text-base text-[#627382] leading-5 mb-4">Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
                <div>
                    <button>Products</button>
                    <button>Cart (2)</button>
                </div>
            </div>
            <div>
                {
                    packages.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default MainSection;