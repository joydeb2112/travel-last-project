import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="hero bg-[url('./assets/hero.jpg')] bg-cover text-white min-h-screen mb-5 mt-2.5">
                <div className="hero-content text-center">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold">Manchester Flight Tickets</h1>
                        <p className="py-6 text-lg">
                            Travels is a masculine name of French origin. A variant of Travis, this name has various translations to inspire your bundle of joy. Meaning “to cross over” or “from the crossroads,” this name is sure to remind baby to explore each point and corner of the world.
                        </p>
                        <div className='flex justify-center flex-row gap-5'>
                            <button className="btn btn-primary">Get Started</button>
                            <button className="btn">Get Bock</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;