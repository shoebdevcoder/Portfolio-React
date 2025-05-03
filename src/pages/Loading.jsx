import React from "react";

const Loading = () => {
  return (
    <div style={styles.container}>
      <img
        src="/Animation - 1746280753010.gif"
        alt=""
        style={styles.gif}
      />
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  gif: {
    width: "150px",
    height: "150px",
  },
};

export default Loading;
