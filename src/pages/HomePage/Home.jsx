import "./Home.css";
import { Link } from "react-router-dom";
import { category } from "../../data/data";
export const Home = () => {
    return (
      <section className="home__section">
      <div className="category__container top-gutter-md">
        {category.map((quiz) => (
          <div className="category">
            <Link to="/rules">
              <div className="img-container">
              <img src={quiz.image} alt="" className="responsive-img" />
              </div>
              
              <div className="category__content">
                <h3>{quiz.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
    );
  };