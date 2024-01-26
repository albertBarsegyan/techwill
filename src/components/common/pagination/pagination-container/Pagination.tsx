import { PaginationConstant } from '../../../../constants/pagination.constants.ts';
import { getPagesData } from './pagination.utils.ts';
import { paginationStyles } from './pagination.styles.ts';
import { MultipointSmallIcon } from '../../../../icons/multipoint-icon.tsx';
import { ArrowLeft, ArrowLeftDouble, ArrowRight, ArrowRightDouble } from '../../../../icons/arrow-icons.tsx';
import { PaginationButton } from '../pagination-button/pagination-button.tsx';
import { Box, Stack } from '@mui/material';

export function Pagination({
  allPages,
  currentPage,
  handlePage,
  pageSize,
}: {
  allPages: number;
  pageSize: number;
  currentPage: number;
  handlePage: (page: number) => void;
}) {
  const styles = paginationStyles();
  const { pages, latestPage } = getPagesData({
    currentPage,
    allPages,
    pageSize,
  });

  if (pages.length === 1) {
    return null;
  }

  return (
    <Box sx={styles.wrapper}>
      <PaginationButton isActive={currentPage > 1} onClick={() => handlePage(1)}>
        <ArrowLeftDouble />
      </PaginationButton>
      <PaginationButton isActive={currentPage > 1} onClick={() => handlePage(currentPage - 1)}>
        <ArrowLeft />
      </PaginationButton>
      {pages.map((page) => {
        if (page === PaginationConstant.Multipoint) {
          return (
            <PaginationButton key={page} isActive={false}>
              <Stack direction={'row'} alignItems="center" justifyContent="center" sx={styles.multipoint}>
                <MultipointSmallIcon />
              </Stack>
            </PaginationButton>
          );
        }

        return (
          <PaginationButton isActive={currentPage !== page} key={page} onClick={() => handlePage(page)}>
            {page}
          </PaginationButton>
        );
      })}

      <PaginationButton onClick={() => handlePage(currentPage + 1)} isActive={currentPage < latestPage}>
        <ArrowRight />
      </PaginationButton>
      <PaginationButton onClick={() => handlePage(latestPage)} isActive={currentPage < latestPage}>
        <ArrowRightDouble />
      </PaginationButton>
    </Box>
  );
}
