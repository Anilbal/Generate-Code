import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navbar, Sidebar } from "../components/common";
import styled from "styled-components";

export const MainContent=styled.div`
`

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar />
      <MainContent>
        <Sidebar />
        <Outlet />
      </MainContent>
    </React.Fragment>
  );
}
