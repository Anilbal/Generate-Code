import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navbar, RightSidebar, Sidebar } from "../components/common";
import styled from "styled-components";

const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

const ContentArea = styled.main<{ isPreview?: boolean }>`
  flex: 1;
  padding: ${(props) => (props.isPreview ? "0" : "2rem")};
  background-color: ${(props) => (props.isPreview ? "white" : "#f3f4f6")};
  overflow-y: auto;
`;

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar />
      <MainContent>
        <Sidebar />
        <ContentArea>
          <Outlet />
        </ContentArea>
        <RightSidebar />
      </MainContent>
    </React.Fragment>
  );
}
