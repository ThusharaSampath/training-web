const useStyles = (theme) => ({
  //DiaryCard styles
  DiaryCardStyle: {
    borderRadius: "25px",
    margin: "20px",
    padding: "10px",
    overflow: "hidden",
    width: "325px",
    //minWidth: "200px",
    backgroundColor: "lightskyblue",
   // float:"right" 
  },
  btn: {
    backgroundColor: "lightskyblue",
    boxShadow: "none",
  },
  title:{
    textAlign: "left",
    fontSize: "xx-large",
  },
  content:{
    textAlign: "left",
    
  },
  // Form styles
  submitBtn: {
    width: "120%",
    height: "20px",
    borderRadius: "25px",
  },
  container: {
    width: "80%",
    alignItems: "left",
    textAlingment:"left",
  },
  date:{
    textAlign: "left",
    marginLeft:"10px",
  },
  textIpTitle: {
    padding: "5px",
    borderRadius: "25px",
    backgroundColor: "lightskyblue",
    opacity: "0.5",
    width: "60%",
    transition: "width 1s",
    borderBottom: "none",
    left:"0",
    "&:hover": {
      width: "100%",
    },
    "&:hover .textIpDicpt": {
      width: "50%",
    },
  },
  textIpDicpt: {
    padding: "5px",
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
