import React, { use } from "react";
import ProductCard from "./ProductCard";
import CartList from "./CartList";

const ProductCollection = ({
  modelPromise,
  activeTab,
  setActiveTab,
  cartData,
  setCartData,
}) => {
  const models = use(modelPromise);

  return (
    <div className='container mx-auto space-y-5 pb-20'>
      <h2 className='text-5xl font-bold text-center text-slate-900'>
        Premium Digital Tools
      </h2>
      <p className='text-[16px] text-center text-slate-600'>
        Choose from our curated collection of premium digital products designed
        <br />
        to boost your productivity and creativity.
      </p>
      <div className='flex justify-center mt-6'>
        <div className='tabs tabs-boxed rounded-full bg-white border border-slate-300'>
          <input
            type='radio'
            name='my_tabs'
            className='tab !h-12 !rounded-full checked:!bg-gradient-to-r checked:from-[#6130f7] checked:to-[#9a1ffa] checked:!text-white w-40'
            aria-label='Products'
            defaultChecked
            onClick={() => setActiveTab("products")}
          />
          <input
            type='radio'
            name='my_tabs'
            className='tab !h-12 !rounded-full checked:!bg-gradient-to-r checked:from-[#6130f7] checked:to-[#9a1ffa] checked:!text-white w-40'
            aria-label={`Cart (${cartData.length})`}
            onClick={() => setActiveTab("cart")}
          />
        </div>
      </div>

      {activeTab === "products" && (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-8 justify-items-center mt-12'>
          {models.map((model) => (
            <ProductCard
              key={model.id}
              model={model}
              cartData={cartData}
              setCartData={setCartData}
            />
          ))}
        </div>
      )}

      {activeTab === "cart" && (
        <div className='gap-y-10 justify-items-center mt-12 px-20'>
          <CartList cartData={cartData} setCartData={setCartData} />
        </div>
      )}
    </div>
  );
};

export default ProductCollection;
