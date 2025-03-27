// src/theme.js

export const lightTheme = {
  background: "linear-gradient(to bottom right, #f3f5f7, #f9f9f9)",
  logo: "linear-gradient(45deg, #ff4500, #ff8c00)",
  text: "#10041c",
  paleText: "#10041c60",
  shadow: "#000000",
  liteShadow: "#00000078",
  border: "#000000",

  // New additions
  cardBackground: "#ffffff", // Light background for cards
  buttonBackground: "#10041c", // Dark buttons for contrast
  buttonText: "#ffffff", // White text on buttons
  inputBackground: "#ffffff", // White input fields
  inputText: "#10041c", // Dark text for readability
  hoverEffect: "#10041c20", // Light hover effect
};

export const darkTheme = {
  background: "linear-gradient(to bottom right, #1a1a2e, #16213e)",
  logo: "linear-gradient(45deg, #8a2be2, #00bfff)",
  text: "#ffffff",
  paleText: "#ffffff60",
  shadow: "#000000",
  liteShadow: "#00000078",
  border: "#000000",

  // New additions
  cardBackground: "#0f0f1f", // Dark background for cards
  buttonBackground: "#ffffff", // White buttons for contrast
  buttonText: "#10041c", // Dark text on buttons
  inputBackground: "#1a1a2e", // Dark input fields
  inputText: "#ffffff", // White text for readability
  hoverEffect: "#ffffff20", // Light hover effect
};
