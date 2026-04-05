import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 260px;
  height: calc(100vh - 64px); /* Subtracting navbar height */
  background-color: var(--color-background);
  border-right: 1px solid var(--color-border);
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  position: sticky;
  top: 64px;
  align-self: flex-start;
`;

export const SidebarItem = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: ${(props) => (props.isActive ? "#ffffff" : "#374151")};
  background-color: ${(props) => (props.isActive ? "#1f2937" : "transparent")};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #d4d7ddff;
    // color: #111827;
  }

  svg {
    color: ${(props) => (props.isActive ? "#ffffff" : "#6b7280")};
  }
`;

export const SidebarTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #72767dff;
  margin-bottom: 0.5rem;
  padding: 0 1rem;
`;
