import React from 'react';
import styled from 'styled-components';

const Button = ({ children, color = "red", onClick, className, ...props }) => {
  // Add touch event handlers to fix mobile active state
  const handleTouchStart = (e) => {
    e.currentTarget.classList.add('button-active');
  };
  
  const handleTouchEnd = (e) => {
    e.currentTarget.classList.remove('button-active');
  };

  return (
    <StyledButton 
      color={color} 
      onClick={onClick} 
      className={className}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      <span className="button-content">{children}</span>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1rem;
  background-color: transparent;
  border: 2px solid ${props => 
    props.color === "red" ? "#ef4444" : 
    props.color === "orange" ? "#f97316" : 
    props.color === "green" ? "#22c55e" : "#ef4444"};
  color: ${props => 
    props.color === "red" ? "#ef4444" : 
    props.color === "orange" ? "#f97316" : 
    props.color === "green" ? "#22c55e" : "#ef4444"};
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  min-height: 2.2rem;
  transition: background-color 0.15s ease, color 0.15s ease;
  
  /* Tamaño mínimo para facilitar el click en mobile */
  min-width: 80px;
  touch-action: manipulation;
  
  /* Animación al clickear - solo para desktop */
  @media (hover: hover) {
    &:active {
      background-color: ${props => 
        props.color === "red" ? "#ef4444" : 
        props.color === "orange" ? "#f97316" : 
        props.color === "green" ? "#22c55e" : "#ef4444"};
      color: white;
    }
  }
  
  /* Clase para manejar el estado activo en mobile */
  &.button-active {
    background-color: ${props => 
      props.color === "red" ? "#ef4444" : 
      props.color === "orange" ? "#f97316" : 
      props.color === "green" ? "#22c55e" : "#ef4444"};
    color: white;
  }
  
  .button-content {
    position: relative;
    z-index: 2;
  }
  
  /* Preserve color for nested elements that need to maintain their color */
  .preserve-color {
    color: inherit !important;
  }
`;

export default Button;