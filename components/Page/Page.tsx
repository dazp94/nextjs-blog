import React, { ReactElement } from "react";
import styled from "styled-components";

import Header from "../Header";
import Helmet from "../Helmet";

const PageContainer = styled.div`
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Page = ({ children }): ReactElement => (
  <PageContainer>
    <Helmet />
    <Header />
    <ChildrenContainer>{children}</ChildrenContainer>
  </PageContainer>
);

export default Page;
