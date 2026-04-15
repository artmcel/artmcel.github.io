const KofiButton = () => {
    return (
        <button className="kofi-button">
            <a href="https://ko-fi.com/jessartdev" target="_blank" rel="noopener noreferrer">
                <img
                    src="https://cdn.ko-fi.com/cdn/kofi3.png?v=6"
                    alt="Buy Me a Coffee at ko-fi.com"
                    style={{ height: "36px" }}
                />
            </a>
        </button>
    );
}

export default KofiButton;