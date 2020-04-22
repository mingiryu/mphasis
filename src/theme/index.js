import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Times",
        subtitle1: {
            fontSize: 14
        },
        body1: {
            fontSize: 18
        },
        body2: {
            fontSize: 14,
        },
        h2: {
            fontWeight: 1500,
        },
        h4: {
            fontSize: 38,
            fontWeight: 1500
        }
    }
});
export default responsiveFontSizes(theme);