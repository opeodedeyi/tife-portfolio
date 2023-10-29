import "./CustomButton.css";

const CustomButton = ({ size="default-size", onClick, disabled, children }) => {
    return (
        <button className={`custom-button ${size}`} onClick={onClick} disabled={disabled}>
            { children }
        </button>
    );
};

export default CustomButton
