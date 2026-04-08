import * as React from "react";
import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import { Navbar, RightSidebar, Sidebar } from "../components/common";
import styled from "styled-components";

const MainContent = styled.div<{ isPreview?: boolean }>`
  display: flex;
  flex: 1;
  height: ${(props) => (props.isPreview ? "100vh" : "calc(100vh - 64px)")};
  overflow: hidden;
`;

const ContentArea = styled.main<{ isPreview?: boolean }>`
  flex: 1;
  padding: ${(props) => (props.isPreview ? "0" : "2rem")};
  background-color: ${(props) => (props.isPreview ? "white" : "#f3f4f6")};
  overflow-y: auto;
  position: relative;
`;

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();
  const isPreview = location.pathname === "/preview";

  return (
    <React.Fragment>
      {!isPreview && <Navbar />}
      <MainContent isPreview={isPreview}>
        {!isPreview && <Sidebar />}
        <ContentArea isPreview={isPreview}>
          <Outlet />
        </ContentArea>
        {!isPreview && <RightSidebar />}
      </MainContent>
    </React.Fragment>
  );
}
