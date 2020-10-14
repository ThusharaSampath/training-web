const useStyles = (theme) => ({
    root: {
      maxWidth: "800px",
      overflow: "hidden",
      padding: "10px",
    },
    card: {
      borderRadius: "25px",
      margin: "20px",
      padding: "10px",
      overflow: "hidden",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      color: "rgb(0, 158, 231)",
      fontSize: "xx-large",
    },
    
    container:{
      width:"80%",
      alignItems:"center"
    },
    pos: {
      marginBottom: 12,
    },
    btn: {
      backgroundColor: "rgb(0, 158, 231)",
    },
    logo: {
      height: "150px",
      top: "100px",
      right: "70px",
      opacity: "0.5",
      position: "absolute",
      zIndex: "0",
    },
    logoS: {
      height: "20px",
  
      zIndex: "0",
    },
    
  });

  export default useStyles