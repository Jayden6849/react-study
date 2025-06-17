import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [params, setParams] = useSearchParams();

    // params.get("value");
    // -> localhost:5173/?value=____ : 해당하는 값을 가리키게 됨

    return (
        <div>
            HomePage
        </div>
    );
};

export default Home;