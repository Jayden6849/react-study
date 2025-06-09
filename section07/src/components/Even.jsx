import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        // 클린업, 정리함수 == useEffect 안에서 콜백 함수를 반환하는 함수
        return () => {
            console.log("unmount");
        };
    }, []);
    
    return <div>짝수입니다.</div>;
};

export default Even;