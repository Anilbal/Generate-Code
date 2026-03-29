import styled from "styled-components";

export const NavbarContainer = styled.nav`
  height: 64px;
  border-bottom: 1px solid var(--color-border);
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  h1 {
    color: var(--color-primary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
  }
`;

export const IconWrapper = styled.div`
  background: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Button = styled.button<{ variant?: "outline" | "solid" }>`
  padding: 6px 10px;
  display: flex;
  align-items: center;
  gap:6px;
  border-radius: 6px;
  background-color: ${({ variant }) =>
    variant === "solid" ? "var(--color-primary)" : "transparent"};
  color: ${({ variant }) =>
    variant === "solid" ? "var(--color-background)" : "inherit"};
  border: ${({ variant }) =>
    variant === "outline" ? "1px solid var(--color-border)" : "none"};
`;
