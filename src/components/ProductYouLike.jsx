import React from "react";
import "./Hero.css";

const ProductYouLike = () => {
  const products = [


    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Mud Cutlery Set 1',
      href: '#',
      price: '$35',
      imageSrc: 'https://th.bing.com/th/id/OIG2.uSvMzc.28dAq8wSeHKbh?w=1024&h=1024&rs=1&pid=ImgDetMain',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Mud Cutlery Set 1',
      href: '#',
      price: '$89',
      imageSrc: 'https://th.bing.com/th/id/OIG2.5sEfjFJsTO4gxlIe4WKS?w=1024&h=1024&rs=1&pid=ImgDetMain',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Mud Tea Set',
      href: '#',
      price: '$35',
      imageSrc: 'https://th.bing.com/th/id/OIG2.wX.fdw92GW9AapUUpd5t?w=1024&h=1024&rs=1&pid=ImgDetMain',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },

  ]


  return (
    <div className="w-full flex justify-center sm:p-20 py-60 p-12">
      <div className="w-full">
        <h1 className="text-3xl text-center underline decoration-1">You may also like</h1>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductYouLike;
