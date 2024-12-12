import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError } from "../util";

const Home = () => {
  const [loggedinUser, setLoggedinUser] = useState("");
  const [products, setProducts] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedinUser(localStorage.getItem("loggedinUser"));
    // console.log("Home ->", loggedinUser);
  }, []);

  const handleLogOut = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedinUser");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const fetchProduts = async () => {
    try {
      const url = "http://localhost:8000/products";
      const headers = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      // console.log(result);
      setProducts(result);
    } catch (err) {
      handleError(err);
    }
  };

  useEffect(() => {
    fetchProduts();
  }, []);

  return (
    <div>
      <h1>Welcome {loggedinUser}</h1>
      <div>
        {products &&
          products.map((item, idx) => (
            <ul key={idx}>
              <span>
                {item.name}: {item.price}
              </span>
            </ul>
          ))}
      </div>
      <button type="submit" onClick={handleLogOut}>
        Log Out
      </button>

      <ToastContainer />
    </div>
  );
};

export default Home;
