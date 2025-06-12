import './Editor.css';

const Editor = () => {
    return (
        <div className="editor">
            <input placeholder="새로운 todo..." />
            <button>추가</button>
        </div>
    );
};

export default Editor;