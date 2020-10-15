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
    width: "150%",
    height: "20px",
    borderRadius: "25px",
    //marginLeft:"5px"
  },
  form: {
   // backgroundColor: "black",
    alignItems: "left",
    textAlingment: "left",
  },
  left: {
    textAlign: "left",
    left: "0px",
  },
  container: {
    width: "90%",
    alignItems: "left",
    textAlingment: "left",
    margin:"25px",
    //backgroundColor: "green",
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
    leftMargin: "0px",
    "&:hover": {
      width: "100%",
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
