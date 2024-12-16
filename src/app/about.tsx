export default function About (){
    return (<>
    
                        <section className="bg-gray-100 py-12">
                            <div className="container mx-auto px-4 text-center">
                                <img src="https://placehold.co/1200x300" alt="Contact Banner" className="mx-auto mb-4"/>
                                <h1 className="text-3xl font-bold">Contact</h1>
                                <p className="text-gray-500">Home &gt; Contact</p>
                            </div>
                        </section>
    
                        <section className="py-12">
                            <div className="container mx-auto px-4">
                                <h2 className="text-2xl font-bold text-center mb-4">Get In Touch With Us</h2>
                                <p className="text-center text-gray-500 mb-8">
                                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                                </p>
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                                        <div className="flex items-start">
                                            <i className="fas fa-map-marker-alt text-2xl text-yellow-500 mr-4"></i>
                                            <div>
                                                <h3 className="text-lg font-bold">Address</h3>
                                                <p>236 5th SE Avenue, New York NY10000, United States</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                                        <div className="flex items-start">
                                            <i className="fas fa-phone text-2xl text-yellow-500 mr-4"></i>
                                            <div>
                                                <h3 className="text-lg font-bold">Phone</h3>
                                                <p>Mobile: +(84) 546-6789</p>
                                                <p>Hotline: +(84) 456-6789</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                                        <div className="flex items-start">
                                            <i className="fas fa-clock text-2xl text-yellow-500 mr-4"></i>
                                            <div>
                                                <h3 className="text-lg font-bold">Working Time</h3>
                                                <p>Monday-Friday: 9:00 - 22:00</p>
                                                <p>Saturday-Sunday: 9:00 - 21:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full md:w-1/2 px-4 mb-8">
                                        <form>
                                            <div className="mb-4">
                                                <label className="block text-gray-700">Your name</label>
                                                <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Abc"/>
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700">Email address</label>
                                                <input type="email" className="w-full border border-gray-300 p-2 rounded" placeholder="Abc@def.com"/>
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700">Subject</label>
                                                <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="This is an optional"/>
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700">Message</label>
                                                <textarea className="w-full border border-gray-300 p-2 rounded" placeholder="Hi! I'd like to ask about"></textarea>
                                            </div>
                                            <button className="bg-yellow-500 text-white px-4 py-2 rounded">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
    
                        <section className="bg-gray-100 py-12">
                            <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
                                <div className="flex items-center mb-4 md:mb-0">
                                    <i className="fas fa-trophy text-2xl text-yellow-500 mr-4"></i>
                                    <div>
                                        <h3 className="text-lg font-bold">High Quality</h3>
                                        <p className="text-gray-500">crafted from top materials</p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-4 md:mb-0">
                                    <i className="fas fa-shield-alt text-2xl text-yellow-500 mr-4"></i>
                                    <div>
                                        <h3 className="text-lg font-bold">Warranty Protection</h3>
                                        <p className="text-gray-500">Over 2 years</p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-4 md:mb-0">
                                    <i className="fas fa-shipping-fast text-2xl text-yellow-500 mr-4"></i>
                                    <div>
                                        <h3 className="text-lg font-bold">Free Shipping</h3>
                                        <p className="text-gray-500">Order over 150 $</p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-4 md:mb-0">
                                    <i className="fas fa-headset text-2xl text-yellow-500 mr-4"></i>
                                    <div>
                                        <h3 className="text-lg font-bold">24 / 7 Support</h3>
                                        <p className="text-gray-500">Dedicated support</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </>
                      
                );
            };
    
