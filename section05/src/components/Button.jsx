const Button = ({children, text, color = "black"}) => {
    // 이벤트 객체
    const onClickButton = (e) => {
            console.log(e);
            console.log(text);
        };
    
    return (
        <button
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
        // onMouseOut={onClickButton}
        style={{color:color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

export default Button;