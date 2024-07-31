interface Product {
  cover: string;
  title: string;
  price: string;
  discount: string;
}
interface ProductDataProps {
  productData: Product;
}

export default function ProductCardv3({ productData }: ProductDataProps) {
  return (
    <div className="flex items-center justify-center p-5 font-inter">
      <div className="w-[30%]">
        <img
          src={productData.cover}
          alt={productData.title}
          className="w-full"
        />
      </div>
      <div className="mx-2 flex-1">
        <div className="mb-3">
          <span className="line-clamp-2 text-[0.8125rem] font-medium tracking-normal">
            {productData.title}
          </span>
        </div>
        <div className="font-dosis font-semibold">
          <span className="mr-2 text-[85%] text-gray-400 line-through">
            ${productData.price}
          </span>
          <span className="text-red-600">${productData.discount}</span>
        </div>
      </div>
    </div>
  );
}
