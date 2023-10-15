'use client';

import styled from "styled-components";
import Link from "next/link";

import { sizes } from "@/global/sizes";

export const Container = styled.div`
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  background-color: var(--color-lighter);

  @media (min-width: ${sizes.laptop}) {
    flex-direction: row-reverse;
  }
`;

export const Navigation = styled.nav`
  background-color: var(--color-white);
  height: 6.4rem;
  border-radius: .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.6rem;

  @media (min-width: ${sizes.tablet}) {
    justify-content: space-between;
  }

  @media (min-width: ${sizes.laptop}) {
    flex-direction: column;
    height: calc(100% - 3.2rem);
    padding: 1.6rem .8rem;
  }
`;

export const Content = styled.main`
  background-color: var(--color-white);
  flex: 1;
  border-radius: .8rem;
  padding: 0 1.6rem;
`;

export const SpacingContainer = styled.span`
  height: 4.8rem;
  width: 4.8rem;
  display: none;

  @media (min-width: ${sizes.tablet}) {
    display: flex;
    align-items: center;
    justify-items: center;
  }
`;

export const ImageContainer = styled(SpacingContainer)`
  object-fit: cover;
  position: relative;

  @media (min-width: ${sizes.tablet}) {
    display: flex;
    align-items: center;
    justify-items: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.2rem;
  width: 100%;
  gap: .8rem;
  max-width: 24rem;

  @media (min-width: ${sizes.laptop}) {
    flex-direction: column;
    max-height: 24rem;
    height: 100%;
    width: 3.2rem;
  }
`;

export const NavigationButton = styled(Link)`
  color: var(--color-dark);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  border-radius: 50%;

  &:hover {
    color: var(--color-main-1);
    border-bottom: .32rem solid var(--color-main-2);
  }
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  line-height: 3rem;
  color: var(--color-main-1);
  padding-left: .8rem;
  border-left: .2rem solid var(--color-main-2);
`;

export const StatisticContainerList = styled.div`
  height: 70vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  border-radius: .8rem;
  scrollbar-width: thin;

  @media (min-width: ${sizes.laptop}) {
    height: 84vh;
  }
`;

export const StatisticContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-main-1);
  padding: 1.6rem;
  border-radius: .8rem;
  border-bottom: .4rem solid var(--color-main-2);
`;

export const StatisticTitle = styled.span`
  font-size: 1.2rem;
  height: 1.6rem;
  color: var(--color-white);
`;

export const StatisticData = styled.span`
  font-size: 4rem;
  height: 4.8rem;
  color: var(--color-white);
`;

export const StatisticDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`


export const StatisticIconContainer = styled.div`
  color: var(--color-white);
`;