import './loader.css'

function Loader() {
  // useEffect(() => {
  //   document.body.classList.add('loader');
  //   return () => {
  //     document.body.classList.remove('loader');
  //   };
  // }, []);
  return (
    <div className="loader-container">
      <div className="loader" style={{ backgroundColor: 'black' }}></div>
    </div>
  )
}

export default Loader
