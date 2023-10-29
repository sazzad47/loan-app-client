import { Circles } from 'react-loader-spinner';

const LoadingSpinner = () => {
 

  return (
    <div id="spinner" style={{ display: 'none', zIndex: "10000", width: "100%", height: "100%", justifyContent: "center", alignItems: "center", position: 'fixed', backgroundColor: "rgba(16, 16, 16, 0.5)" }}>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    </div>
  );
};

export default LoadingSpinner;