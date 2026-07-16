import gradient from "gradient-string";

export const TITLE_TEXT = `
 IIIII        DDDD     OOO    N   N  TTTTT        K   K  N   N   OOO   W   W
   I          D   D   O   O   NN  N    T          K  K   NN  N  O   O  W   W
   I          D   D   O   O   N N N    T          KKK    N N N  O   O  W W W
   I          D   D   O   O   N  NN    T          K  K   N  NN  O   O  WW WW
 IIIII        DDDD     OOO    N   N    T          K   K  N   N   OOO   W   W
 `;

const catppuccinTheme = {
  pink: "#F5C2E7",
  mauve: "#CBA6F7",
  red: "#F38BA8",
  maroon: "#E78284",
  peach: "#FAB387",
  yellow: "#F9E2AF",
  green: "#A6E3A1",
  teal: "#94E2D5",
  sky: "#89DCEB",
  sapphire: "#74C7EC",
  lavender: "#B4BEFE",
};

export const renderTitle = () => {
  const terminalWidth = process.stdout.columns || 80;
  const titleLines = TITLE_TEXT.split("\n");
  const titleWidth = Math.max(...titleLines.map((line) => line.length));

  if (terminalWidth < titleWidth) {
    const simplifiedTitle = `I dont know`;
    console.log(gradient(Object.values(catppuccinTheme)).multiline(simplifiedTitle));
  } else {
    console.log(gradient(Object.values(catppuccinTheme)).multiline(TITLE_TEXT));
  }
};
