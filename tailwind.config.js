/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        30: "30%",
        32: "32px",
      },
      colors: {
        /*-------baseColors-----------*/
        white: "white",
        failure: "#ED4B9E",
        failure33: "#ED4B9E33",
        primary: "#1FC7D4",
        primary0f: "#1FC7D40f",
        primary3D: "#1FC7D43D",
        primaryBright: "#53DEE9",
        primaryDark: "#0098A1",
        success: "#31D0AA",
        success19: "#31D0AA19",
        warning: "#FFB237",
        warning2D: "#ED4B9E2D",
        warning33: "#ED4B9E33",

        /*-------additionalColors-----------*/
        binance: "#F0B90B",
        overlay: "#452a7a",
        gold: "#FFC700",
        silver: "#B2B2B2",
        bronze: "#E7974D",

        /*-------lightColors-----------*/
        lightSecondary: "#7645D9",
        lightSecondary80: "#7645D980",
        lightBackground: "#FAF9FA",
        lightBackgroundDisabled: "#E9EAEB",
        lightBackgroundAlt: "#FFFFFF",
        lightBackgroundAlt2: "rgba(255, 255, 255, 0.7)",
        lightCardBorder: "#E7E3EB",
        lightContrast: "#191326",
        lightDropdown: "#F6F6F6",
        lightDropdownDeep: "#EEEEEE",
        lightInvertedContrast: "#FFFFFF",
        lightInput: "#eeeaf4",
        lightInputSecondary: "#d7caec",
        lightTertiary: "#EFF4F5",
        lightText: "#280D5F",
        lightText99: "#280D5F99",
        lightTextDisabled: "#BDC2C4",
        lightTextSubtle: "#7A6EAA",
        lightDisabled: "#E9EAEB",

        /*-------darkColors-----------*/
        darkSecondary: "#9A6AFF",
        darkSecondary80: "#9A6AFF80",
        darkBackground: "#08060B",
        darkBackgroundDisabled: "#3c3742",
        darkBackgroundAlt: "#27262c",
        darkBackgroundAlt2: "rgba(39, 38, 44, 0.7)",
        darkCardBorder: "#383241",
        darkContrast: "#FFFFFF",
        darkDropdown: "#1E1D20",
        darkDropdownDeep: "#100C18",
        darkInvertedContrast: "#191326",
        darkInput: "#372F47",
        darkInputSecondary: "#262130",
        darkPrimaryDark: "#0098A1",
        darkTertiary: "#353547",
        darkText: "#F4EEFF",
        darkText99: "#F4EEFF99",
        darkTextDisabled: "#666171",
        darkTextSubtle: "#B8ADD2",
        darkDisabled: "#524B63",
      },

      /*----------------fonts--------------------------- */

      fontFamily: {
        "sans": ["Kanit"],
      },

      fontSize: {
        fontSizeHeader: "64px",
        fontSizeSubheader: "40px",
        fontSizeParagraph: "20px",
        fontSizeCopy: "16px",
        fontSizeButton: "16px",
        fontSizeGeneral: "12px",
      },

      fontWeight: {
        fontLightWeight: 400,
        fontHeavyWeight: 600,
      },

      lineHeight: {
        lineHeightH1: "70.4px",
        lineHeightH2: "44px",
        lineHeightPar: "22px",
        lineHeightCopy: "22px",
        lineHeightButton: "22px",
        lineHeightGeneral: "8px",
      },

      /*----------------boxShadows--------------------------- */
      boxShadow: {
        level1: "0px 2px 12px -8px (#191326, 0.1), 0px 1px 1px (#191326, 0.05)",
        active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px (#1FC7D4, 0.4)",
        success:
          "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
        warning:
          "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
        focus:
          "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
        inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
        tooltip:
          "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
        button: "0px -1px 0px 0px #0E0E2C66 inset",
      },

      /*----------------borderWidth--------------------------- */
      borderWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
      },

      /*----------------borderRadius--------------------------- */
      borderRadius: {
        0: "0px",
        small: "4px",
        default: "16px",
        card: "24px",
        circle: "50%",
      },

      /*----------------keyframes--------------------------- */
      keyframes: {
        ghost: {
          "0%": { opacity: "0.9" },
          "50%": { opacity: "0.1" },
          "100%": { opacity: "0.9" },
        },

        float: {
          "0%": { transform: "translate(0px)" },
          "50%": { transform: "translate(10px, 5px)" },
          "100%": { transform: "translate(0px)" },
        },

        animation: {
          ghosting: "2s ghost ease-in-out infinite",
          floating: "3s ease-in-out infinite none running float",
        },
      },
    },
  },
  plugins: [],
};


