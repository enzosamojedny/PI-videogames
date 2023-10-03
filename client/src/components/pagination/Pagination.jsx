import { useState } from "react";

const currentPagetion = ({ currentPage, setCurrentPage, max }) => {
    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(parseInt(input) + 1);
        setCurrentPage(parseInt(currentPage) + 1);
    };

    const backPage = () => {
        setInput(parseInt(input) - 1);
        setCurrentPage(parseInt(currentPage) - 1);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
                disabled={currentPage === 1 || currentPage < 1}
                onClick={backPage}
                style={{ color: 'black', backgroundColor: 'white', padding: '5px', fontSize: '2rem' }}
            >
                {'<'}
            </button>
            <p style={{ color: 'white', fontSize: '2rem', margin: '0px 5px 0px 5px' }}>{Math.ceil(currentPage)}</p>
            <button
                disabled={currentPage === Math.ceil(max) || currentPage > Math.ceil(max)}
                onClick={nextPage}
                style={{ color: 'black', backgroundColor: 'white', padding: '5px', fontSize: '2rem' }}
            >
                {'>'}
            </button>
        </div>
    );
};

export default currentPagetion;
