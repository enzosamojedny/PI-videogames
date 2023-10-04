
const currentPagetion = ({ currentPage, setCurrentPage, max }) => {

    const nextPage = () => {
        setCurrentPage(parseInt(currentPage) + 1);
    };

    const backPage = () => {
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
            <p style={{ color: 'white', fontSize: '2rem', margin: '0px 5px 0px 5px' }}>{Math.ceil(currentPage)} of {Math.ceil(max)}</p>
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
