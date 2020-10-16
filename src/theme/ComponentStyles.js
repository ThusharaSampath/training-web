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
  title: {
    textAlign: "left",
    fontSize: "xx-large",
  },
  content: {
    textAlign: "left",
  },
  // Form styles
  submitBtn: {
    width: "100px",
    height: "20px",
    borderRadius: "25px",
    Right:"25px",
  },
  form: {
    //backgroundColor: "black",
    alignItems: "left",
    textAlingment: "left",
  },
  left: {
    textAlign: "left",
    left: "0px",
    //backgroundColor: "red",
  },
  right:{
    //backgroundColor: "blue",
    textAlign: "right",
  },
  container: {
    width: "92%",
    alignItems: "left",
    textAlingment: "left",
    margin:"25px",
    right:"250px"
   
   // backgroundColor: "green",
  },
  date: {
    textAlign: "left",
    marginLeft: "10px",
  },
  textIpTitle: {
    padding: "5px",
    borderRadius: "25px",
    backgroundColor: "lightskyblue",
    opacity: "0.5",
    width: "60%",
    transition: "width 1s",
    borderBottom: "none",
    marginLeft: "0px",
    marginRight: "5px",
    "&:hover": {
      width: "95%",
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
