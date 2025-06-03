const Button = ({text, color = "crimson"}) => {

    const onClickButton = () => {
        console.log('test');
    }

    return (
    <>
        <div className="header-right">
            <button
            onClick={onClickButton}
            style={{display: 'flex', backgroundColor: text === '로그인' ? 'green' : color, color: 'white',}}>
                {text}
            </button>
        </div>
    </>
        
    )

};

export default Button;