const useStyles = (theme) => ({
  //DiaryCard styles
  DiaryCardStyle: {
    borderRadius: "25px",
    margin: "20px",
    padding: "10px",
    overflow: "hidden",
    width: "325px",
    backgroundColor: "lightskyblue",
  },
  btn: {
    backgroundColor: "lightskyblue",
    boxShadow: "none",
  },
  // Form styles
  submitBtn: {
    width: "120%",
    height:"20px",
    borderRadius:"25px"

  },
  container:{
    width:"80%",
    alignItems:"center"
  },
  textIpTitle: {
    padding:"5px",
    borderRadius: "25px",
    backgroundColor: "lightskyblue",
    opacity: "0.5",
    width: "60%",
    transition: "width 1s",
    borderBottom: "none",
    
    "&:hover": {
      width: "100%",
    },
    "&:hover .textIpDicpt": {
        width: "50%",
      },
  },
  textIpDicpt: {
    padding:"5px",
    borderRadius: "25px",
    backgroundColor: "lightskyblue",
    opacity: "0.5",
    borderBottom: "none",
    
  },
  head: {
    color: "white",
  },

  //toolbar styles
});

export default useStyles;
