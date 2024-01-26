import { PaginationConstant } from '../../../../constants/pagination.constants.ts';

const loop = (start: number, end: number, pagesData: number[]) => {
  for (let index = start; index < end; index++) {
    pagesData.push(index);
  }
};

export const getPagesData = ({
  currentPage,
  allPages,
  pageSize,
}: {
  currentPage: number;
  allPages: number;
  pageSize: number;
}) => {
  const result: any[] = [];

  const pagesCount = allPages ? Math.ceil(allPages / pageSize) : 1;

  if (currentPage - PaginationConstant.PageSiblingsCount <= 1) {
    loop(1, currentPage + 1, result);
  } else {
    result.push(1, PaginationConstant.Multipoint);
    loop(currentPage - PaginationConstant.PageSiblingsCount, currentPage + 1, result);
  }

  if (currentPage + PaginationConstant.PageSiblingsCount >= pagesCount) {
    loop(currentPage + 1, pagesCount + 1, result);
  } else {
    loop(currentPage + 1, currentPage + 1 + PaginationConstant.PageSiblingsCount, result);
    result.push(PaginationConstant.Multipoint, pagesCount);
  }
  return { pages: result, latestPage: pagesCount };
};
