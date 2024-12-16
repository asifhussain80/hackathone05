'use client';
import App from "next/dist/pages/_app";
import Image from "next/image";
import ReactDOM from "react-dom";

export default function Home() {
  return ( 

                  <main>
                        <section className="relative bg-gray-100 py-20">
                            <img src="https://placehold.co/1200x600" alt="Living room with a chair and a plant" className="w-full h-full object-cover absolute inset-0" />
                            <div className="container mx-auto relative z-10">
                                <div className="bg-yellow-200 p-8 max-w-md">
                                    <h2 className="text-xl font-bold">New Arrival</h2>
                                    <h1 className="text-3xl font-bold mt-2">Discover Our New Collection</h1>
                                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                    <button className="mt-4 bg-yellow-600 text-white px-4 py-2">BUY NOW</button>
                                </div>
                            </div>
                        </section>

                        <section className="py-16">
                            <div className="container mx-auto text-center">
                                <h2 className="text-2xl font-bold">Browse The Range</h2>
                                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
                                    <div>
                                        <img src="https://placehold.co/400x300" alt="Dining room setup" className="w-full h-48 object-cover" />
                                        <h3 className="mt-2">Dining</h3>
                                    </div>
                                    <div>
                                        <img src="https://placehold.co/400x300" alt="Living room setup" className="w-full h-48 object-cover" />
                                        <h3 className="mt-2">Living</h3>
                                    </div>
                                    <div>
                                        <img src="https://placehold.co/400x300" alt="Bedroom setup" className="w-full h-48 object-cover" />
                                        <h3 className="mt-2">Bedroom</h3>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="py-16 bg-gray-100">
                            <div className="container mx-auto text-center">
                                <h2 className="text-2xl font-bold">Our Products</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                                    <div className="relative">
                                        <img src="https://placehold.co/400x300" alt="Stylish cafe chair" className="w-full h-48 object-cover" />
                                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm">-30%</div>
                                        <h3 className="mt-2">Syltherine</h3>
                                        <p className="text-gray-600">Stylish cafe chair</p>
                                        <p className="text-gray-800 font-bold">Rp 2.500.000</p>
                                        <p className="text-gray-400 line-through">Rp 3.500.000</p>
                                    </div>
                                    <div className="relative">
                                        <img src="https://placehold.co/400x300" alt="Stylish cafe chair" className="w-full h-48 object-cover" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
                                            <div className="space-y-2 text-center">
                                                <button className="bg-white text-black px-4 py-2">Add to cart</button>
                                                <div className="space-x-2">
                                                    <i className="fas fa-share"></i>
                                                    <i className="fas fa-exchange-alt"></i>
                                                    <i className="fas fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="mt-2">Leviosa</h3>
                                        <p className="text-gray-600">Stylish cafe chair</p>
                                        <p className="text-gray-800 font-bold">Rp 2.500.000</p>
                                    </div>
                                    <div className="relative">
                                        <img src="https://placehold.co/400x300" alt="Luxury big sofa" className="w-full h-48 object-cover" />
                                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm">-50%</div>
                                        <h3 className="mt-2">Lolito</h3>
                                        <p className="text-gray-600">Luxury big sofa</p>
                                        <p className="text-gray-800 font-bold">Rp 7.000.000</p>
                                        <p className="text-gray-400 line-through">Rp 14.000.000</p>
                                    </div>
                                    <div className="relative">
                                        <img src="https://placehold.co/400x300" alt="Outdoor bar table and stool" className="w-full h-48 object-cover" />
                                        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-sm">New</div>
                                        <h3 className="mt-2">Respira</h3>
                                        <p className="text-gray-600">Outdoor bar table and stool</p>
                                        <p className="text-gray-800 font-bold">Rp 500.000</p>
                                    </div>
                                    <div className="relative">
                                        <img src="https://placehold.co/400x300" alt="Night lamp" className="w-full h-48 object-cover" />
                                        <h3 className="mt-2">Grifo</h3>
                                        <p className="text-gray-600">Night lamp</p>
                                        <p className="text-gray-800 font-bold">Rp 1.500.000</p>
                                    </div>
                                    <div className="relative">
                                        <img src="https://placehold.co/400x300" alt="Small mug" className="w-full h-48 object-cover" />
                                        <h3 className="mt-2">Muggo</h3>
                                        <p className="text-gray-600">Small mug</p>
                                        <p className="text-gray-800 font-bold">Rp 150.000</p>
                                    </div>
                                    <div className="relative">
                                        <img src="https://placehold.co/400x300" alt="Cute bed set" className="w-full h-48 object-cover" />
                                        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-sm">New</div>
                                        <h3 className="mt-2">Pingky</h3>
                                        <p className="text-gray-600">Cute bed set</p>
                                        <p className="text-gray-800 font-bold">Rp 7.000.000</p>
                                        <p className="text-gray-400 line-through">Rp 14.000.000</p>
                                    </div>
                                    <div className="relative">
                                        <img src="https://placehold.co/400x300" alt="Minimalist flower pot" className="w-full h-48 object-cover" />
                                        <h3 className="mt-2">Potty</h3>
                                        <p className="text-gray-600">Minimalist flower pot</p>
                                        <p className="text-gray-800 font-bold">Rp 500.000</p>
                                    </div>
                                </div>
                                <button className="mt-8 bg-gray-800 text-white px-4 py-2">Show More</button>
                            </div>
                        </section>

                        <section className="py-16">
                            <div className="container mx-auto text-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-yellow-200 p-8">
                                        <h2 className="text-2xl font-bold">50+ Beautiful rooms inspiration</h2>
                                        <p className="mt-4">Our designer already made a lot at beautiful prototype of rooms that inspire you</p>
                                        <button className="mt-4 bg-yellow-600 text-white px-4 py-2">Explore More</button>
                                    </div>
                                    <div className="relative">
                                        <img src="https://placehold.co/600x400" alt="Room inspiration" className="w-full h-full object-cover" />
                                        <div className="absolute bottom-4 left-4 bg-white p-4">
                                            <h3 className="text-xl font-bold">Inner Peace</h3>
                                            <p className="text-gray-600">01 — Bed Room</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="py-16 bg-gray-100">
                            <div className="container mx-auto text-center">
                                <h2 className="text-2xl font-bold">Share your setup with <span className="text-yellow-600">#FuniroFurniture</span></h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                                    <img src="https://placehold.co/400x300" alt="User setup 1" className="w-full h-48 object-cover" />
                                    <img src="https://placehold.co/400x300" alt="User setup 2" className="w-full h-48 object-cover" />
                                    <img src="https://placehold.co/400x300" alt="User setup 3" className="w-full h-48 object-cover" />
                                    <img src="https://placehold.co/400x300" alt="User setup 4" className="w-full h-48 object-cover" />
                                    <img src="https://placehold.co/400x300" alt="User setup 5" className="w-full h-48 object-cover" />
                                    <img src="https://placehold.co/400x300" alt="User setup 6" className="w-full h-48 object-cover" />
                                    <img src="https://placehold.co/400x300" alt="User setup 7" className="w-full h-48 object-cover" />
                                    <img src="https://placehold.co/400x300" alt="User setup 8" className="w-full h-48 object-cover" />
                                </div>
                            </div>
                        </section>
                    </main>
                  
            );
        };
        // ReactDOM.render(<App />, document.getElementById('root'))

