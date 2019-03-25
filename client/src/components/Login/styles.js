import { createStyles } from '@material-ui/core/styles';

export const styles = ({ spacing }) =>
  createStyles({
    container: {
      backgroundImage: "url(/assets/juan-pablo-ahumada-unsplash.jpg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "inherit"
    },
    item: {
      background: "rgba(255,255,255,0.5)",
      padding: spacing.unit * 4,
      textAlign: "center"
    },
    logo: {
      maxWidth: 100,
      width: "100%",
      display: "block",
      margin: "auto"
    },
    paper: {
      marginTop: spacing.unit * 2
    }
  });
