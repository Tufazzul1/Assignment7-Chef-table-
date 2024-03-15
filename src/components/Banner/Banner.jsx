

const Banner = () => {
    return (
        <div className="container mx-auto mt-4">
            <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1538333581680-29dd4752ddf2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">Indulge in exquisite flavors and unforgettable dining experiences at our restaurant, where culinary artistry meets unparalleled hospitality.Discover the perfect blend of elegance and taste as you savor each <br /> dish amidst a charming ambiance crafted to elevate every moment.</p>
                        <div className="space-x-3">
                            <button className="btn btn-success rounded-full">Explore Now</button>
                            <button className="btn btn-success rounded-full">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;