import "./Home.css";
import { category } from "../../data/data";
import { SearchBox,Modal} from "../../components/index";
import {useState} from "react";

export const Home = () => {
  const [isModalActive,setModalActive]=useState(false);
  return (
    <div className="home__section flex-col">
      <SearchBox />
      <div className="category__container top-gutter-lg">
        {category.map((quiz) => (
         <div className="category">
           <div onClick={()=>setModalActive(prev=>!prev)} >
             <div className="img-container">
            <img src={quiz.image} alt="" className="responsive-img" />
             </div>

             <div className="category__content">
               <h3>{quiz.name}</h3>
            </div>
           </div>
         </div>
       ))}
      </div>
      <Modal isModalActive={isModalActive} setModalActive={setModalActive}/>
    </div>


  );
};