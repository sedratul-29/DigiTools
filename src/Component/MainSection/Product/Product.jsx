
const Product = ({ product }) => {
    return (
        <div className="">
            <div className="card w-95 bg-base-100 shadow-sm">
                <div className="card-body">
                    <span className="badge badge-xs badge-warning">{product.tag}</span>
                    <img src={product.icon} className="w-8 h-8" alt="" />
                    <h2 className="font-bold text-2xl text-[#101727] mb-1">{product.name}</h2>
                    <p className="font-normal text-base leading-5 text-[#627382]"> {product.description}</p>
                    <span className="text-xl">$29/mo</span>
                    <ul className="mt-4 flex flex-col gap-2">
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 text-[#30B868] " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="font-medium text-base leading-5 text-[#627382]">{product.features[0]}</span>
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 text-[#30B868] " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="font-medium text-base leading-5 text-[#627382]">{product.features[1]}</span>
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 text-[#30B868] " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="font-medium text-base leading-5 text-[#627382]">{product.features[2]}</span>
                        </li>
                    </ul>
                    <div className="mt-4">
                        <button className="btn btn-block text-white text-base font-bold px-[132.5px] py-[15px] bg-linear-to-r from-[#4F39F6] from-0% to-[#9514FA] to-100% rounded-[100px] ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;