import { useAuth } from "../store/auth";
import "./Service.css"; // Link to the CSS file

export const Service = () => {
    const { services } = useAuth();

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>
            <div className="grid">
                {
                    services.map((curElem) => {
                        const { _id, propertyName, propertyType, location, pricePerNight } = curElem;

                        return (
                            <div className="card" key={_id}>
                                <div className="card-img">
                                    <img src="/Images/P6.jpg" alt={propertyName} className="image" />
                                </div>
                                <div className="card-details">
                                    <div className="grid-two-cols">
                                        <p>Property Name: {propertyName}</p>
                                        <p>Property Type: {propertyType}</p>
                                    </div>
                                    <h2>Location: {location}</h2>
                                    <p>Price per Night: ${pricePerNight}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};
