
const CardProduct = ({ selectedProducts, setSelectedProducts }) => {

    const handleRemove = (removeSelectedProduct) => {
        console.log(selectedProducts);
        let filteredPlayer = selectedProducts.filter(
            selectedProduct => selectedProduct.id !== removeSelectedProduct.id
        )
        setSelectedProducts(filteredPlayer);
    }

    const totalPrice = selectedProducts.reduce(
        (total, product) => total + product.price, 0
    );

    // let totalPrice = 0;
    // for (const product of selectedProducts) {
    //     totalPrice = totalPrice + product.price;
    // }

    return (
        <div className="px-2 py-6 lg:p-10 space-y-6 border-2 border-[#F2F2F2] rounded-2xl">
            <h4 className="font-bold text-2xl text-[#101727]">Your Cart</h4>
            <div className="space-y-4">
                {
                    selectedProducts.map((selectedProduct, index) =>
                        <div key={index} className="flex justify-between gap-1 lg:gap-0 items-center bg-[#F9FAFC] rounded-2xl p-5">
                            {/* <h1>{selectedProducts.length}</h1> */}
                            <div className="flex gap-4 items-center ">
                                <div className="w-12 h-12 lg:w-15 lg:h-15 rounded-[50%] bg-white border-1 border-[#F2F2F2] p-3.5">
                                    <img src={selectedProduct.icon} alt="" className="" />
                                </div>
                                <div>
                                    <h6 className="text-base font-semibold lg:text-xl text-[#101727] lg:mb-2">{selectedProduct.name}</h6>
                                    <p className="font-medium text-base text-[#627382] leading-5">${selectedProduct.price}</p>
                                </div>
                            </div>
                            <a className="link link-hover font-bold text-xs lg:text-base text-[#FF3980]"
                                onClick={() => handleRemove(selectedProduct)}>Remove</a>
                        </div>
                    )
                }
            </div>
            <div className="flex justify-between items-center">
                <p className="text-[#627382] font-normal text-base">Total:</p>
                <h4 className="font-bold text-2xl text-[#101727]">${totalPrice}</h4>
            </div>
            <div>
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[100px] text-base font-bold text-white btn-block py-6">Proceed to Checkout</button>
            </div>
        </div>

    );
};

export default CardProduct;