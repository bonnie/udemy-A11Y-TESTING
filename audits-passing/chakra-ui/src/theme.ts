import { extendTheme } from "@chakra-ui/react";

const inputDefaultProps = {
  borderColor: "brand.800",
  focusBorderColor: "brand.600",
  hoverBorderColor: "brand.700",
  _before: {
    borderColor: "brand.700",
  },
  _after: {
    borderColor: "brand.700",
  },
};

export const theme = extendTheme({
  fonts: {
    heading: "Proza Libre",
    body: "Proza Libre",
  },
  colors: {
    brand: {
      100: "#fff0e5",
      200: "#ffdec8",
      600: "#c64f00",
      700: "#b34700",
      800: "#1a202c",
      900: "#1a0a00",
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.200",
        color: "brand.900",
        fontSize: "100%",
      },
      section: {
        maxWidth: "1240px",
        margin: "1.5em auto",
        padding: "0 0.5em",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        border: "none",
        borderRadius: "2em",
        padding: "0.5em 1em",
        boxShadow: "0.07em 0.15em 0.5em 0 rgba(0, 0, 0, 0.4)",
        fontSize: "1.2em",
        margin: "0.5em",
        _hover: {
          bg: "brand.600",
        },
      },
      defaultProps: {
        bg: "brand.700",
        color: "brand.300",
      },
    },
    Text: {
      variants: {
        quotation: {
          backgroundImage: "url('/quote.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "2em 2.5em",
          paddingTop: "1.15em",
          textIndent: "2.15em",
          display: "block",
        },
        emphasis: {
          color: "brand.600",
        },
      },
      sizes: {
        md: { fontSize: "1.5em" },
        lg: { fontSize: "2em" },
        xl: { fontSize: "3em" },
        xxl: { fontSize: "4em" },
      },
    },
    Input: {
      defaultProps: inputDefaultProps,
    },
    Select: {
      defaultProps: inputDefaultProps,
    },
  },
});
