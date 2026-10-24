import React, { use } from 'react';

const Product = ({ Place }) => {

    const Product = use(Place);
    return (
        <div className='flex flex-wrap items-center justify-between gap-5'>
            {Product.map((place) => (
                <div key={place.id} className="card bg-base-100 w-96 shadow-sm mb-5">
                    <figure>
                        <img className='h-[350px] w-[370px] rounded-2xl' src={place.img} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{place.name}</h2>
                        <h4 className='font-semibold text-sm'>{place.location}</h4>
                        <p>{place.information}</p>
                        <p className='font-semibold'>{place.duration}</p>
                        <h5 className='text-lg font-semibold'>${place.price}</h5>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"> Let's Tour </button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Product;