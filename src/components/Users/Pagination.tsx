import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const StyledPagination = styled.div`
  display: grid;
  ${(props: { size: number }) =>
    props.size &&
    css`
      grid-template-columns: repeat(10, 1fr);
    `}
  grid-template-rows: 50px;
  align-items: center;
  padding: 10px;

  div {
    border: 1px solid black;
    cursor: pointer;
    padding: 10px;
  }
`;

const StyledPages = styled.div`
  color: ${(props: { active: number }) => props.active && 'red'};
`;

type PropsType = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination: React.FC<PropsType> = ({ totalCount, pageSize, currentPage, onChangePage }) => {
  let pagesCount = Math.ceil(totalCount / pageSize);

  const pages: Array<number> = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionSize = 10;
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState<number>(1);
  const leftPointer = (portionNumber - 1) * portionSize + 1;
  const rightPointer = portionNumber * portionSize;

  return (
    <StyledPagination size={pages.length}>
      {pages
        .filter((page) => page >= leftPointer && page <= rightPointer)
        .map((page) => (
          <StyledPages active={currentPage === page} key={page} onClick={() => onChangePage(page)}>
            {page}
          </StyledPages>
        ))}
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>
      )}
      {portionCount > portionNumber && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
      )}
    </StyledPagination>
  );
};

export default Pagination;
