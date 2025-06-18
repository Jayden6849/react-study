import { useSearchParams } from "react-router-dom";
import Header from './../components/Header';
import Button from './../components/Button';
import DiaryList from "./../components/DiaryList";

const Home = () => {
    const [params, setParams] = useSearchParams();

    // params.get("value");
    // -> localhost:5173/?value=____ : 해당하는 값을 가리키게 됨

    return (
        <div>
            <Header title={"2025년 6월"} 
                leftChild={<Button text={"<"} />} 
                rightChild={<Button text={">"} />} />
            <DiaryList />
        </div>
    );
};

export default Home;