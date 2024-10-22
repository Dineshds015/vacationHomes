export const Home = () => {
    return <>
    <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    {/* <h2>Vacation Homes and Rentals</h2> */}
                    <h1>Welcome to Sunset Getaways</h1>
                    <p>
At Sunset Getaways, we specialize in offering the perfect escape for travelers seeking comfort, relaxation, and adventure. Our handpicked vacation homes and rentals are designed to provide a seamless blend of luxury and coziness, making your stay unforgettable. Whether you're dreaming of a serene beachside retreat, a cozy cabin in the mountains, or a vibrant city apartment, we have the ideal home-away-from-home waiting for you.
                    </p>

                    <div className="btn btn-group">
                        <a href="/contact"><button className="btn">Connect now</button></a>
                        <a href="/service"><button className="btn secondary-btn">learn more</button></a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/Images/V2.png" alt="Home image" width="400" height="500"/>
                </div>
            </div>
        </section>
    </main>
    </>;
};