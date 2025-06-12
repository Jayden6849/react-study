import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h3>오늘은 📅</h3>
            <h1>{new Date().toLocaleDateString('ko-KR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h1>
        </div>
    );
};

export default Header;