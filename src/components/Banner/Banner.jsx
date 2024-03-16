

const Banner = () => {
    return (
        <div className="container mx-auto mt-4">
            <div className="hero h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/Kj5J6tX/photo-1538333581680-29dd4752ddf2.jpg'}}>
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