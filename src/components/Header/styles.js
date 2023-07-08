import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  titleT: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      backgroundColor: "#FF6EC7",
      borderRadius: "10px",
      margin: "19px 0px",
    },
    textTransform: "none",
  },
  TitleFrame: {
    display: "flex",
    flexDirection: "row",
    columnGap: "10px",
  },
  logo: {
    marginTop: "23px",
  },
  ButtonFrame: {
    columnGap: "19px",
    flexDirection: "row",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    textTransform: "none",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchLabel: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    textTransform: "none",
    borderRadius: "10px",
    borderBottom: "2px solid #FF6EC7",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  ButtonFrame1: {
    flexDirection: "column",
    rowGap: "5px",
  },
}));
