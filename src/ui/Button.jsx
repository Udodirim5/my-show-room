import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ bg }) => bg || "#007bff"}; /* Default: Blue */
  color: ${({ color }) => color || "white"}; /* Default: White */
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ fontSize }) => fontSize || "1rem"}; /* Default: 1rem */
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ bg }) => (bg ? darkenColor(bg) : "#0056b3")};
  }
`;

// Function to darken color for hover effect
const darkenColor = (color) => {
  let r, g, b;
  if (color.startsWith("#")) {
    const hex = color.substring(1);
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    return "#0056b3"; // Fallback hover color
  }
  return `rgb(${Math.max(0, r - 30)}, ${Math.max(0, g - 30)}, ${Math.max(
    0,
    b - 30
  )})`;
};

const Button = ({
  children,
  onClick,
  type,
  icon,
  fontSize,
  disabled = false,
  backgroundColor,
  color,
  ...props
}) => {
  return (
    <StyledButton
    type={type || "button"}
      bg={backgroundColor}
      onClick={disabled ? undefined : onClick} // Prevent clicks if disabled
      disabled={disabled}
      color={color}
      fontSize={fontSize}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </StyledButton>
  );
};

export default Button;
