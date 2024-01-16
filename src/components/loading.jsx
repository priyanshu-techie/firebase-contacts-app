import Style from "../style/loading.module.css";

const Loading = () => {
  return (
    <div className={Style.loadingContainer}>
      <div className={Style.loadingSpinner}></div>
    </div>
  );
};

export default Loading;
