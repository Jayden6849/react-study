import './Header.css';
import Button from './Button';

const Header = () => {

    let isLogin = true;
    let text = "";

    return (
    <>
        <header>
            <Button clase="loginBtn" text={isLogin ? text = "로그인" : text = "로그아웃"}/>
        </header>
    </>
    )

};

export default Header;