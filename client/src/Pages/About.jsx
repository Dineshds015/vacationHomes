// export const About = () => {
//     return <h1>Hello About Page</h1>;
// };


import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user} = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <p> Welcome, {
                user ? `${user.username} to Sunset Getaways` : 'to Sunset Getaways'
                } </p>
              <h1>Why Choose Us? </h1>
              <p>
              We offer a diverse selection of homes, each chosen for its unique charm, comfort, and location. Whether you're seeking a romantic getaway, a family-friendly retreat, or a solo adventure, our properties cater to every type of traveler.
              </p>
              <p>
              At Sunset Getaways, we go beyond just booking your stay. Our team is committed to providing personalized recommendations and exceptional support throughout your vacation, ensuring a stress-free experience from start to finish.
              </p>
              <p>
              We believe location is key to the perfect getaway. That's why our vacation homes are located in some of the most picturesque destinations, allowing you to soak in breathtaking sunsets, stunning views, and local attractions at your leisure.
              </p>
              <p>
              We understand that every traveler has different needs and budgets. Our range of homes offers flexible pricing, ensuring that everyone can find a beautiful, affordable place to stay without compromising on quality.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/Images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};