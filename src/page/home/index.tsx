import Button from "@Component/button";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>home page</h2>
      <Button />
      <div className="">
        <NavLink to={"/"}>home</NavLink>
        <NavLink to={"/products"}>products</NavLink>
      </div>
    </>
  );
};

export default Home;
