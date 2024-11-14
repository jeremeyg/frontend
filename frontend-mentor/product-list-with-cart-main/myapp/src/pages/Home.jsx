import React, { useEffect, useState } from "react";
import ProductList from "../components/Menu";

const Home = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8000/menu")
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);
    return <div className="home">{data && <ProductList data={data} />}</div>;
};

export default Home;
