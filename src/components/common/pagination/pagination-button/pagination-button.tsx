import { paginationButtonStyles } from './pagination-button.styles.ts';
import { PropsWithChildren } from 'react';
import { ButtonComponent } from '../../button/primary-button/primary-button.tsx';

interface PaginationButtonProps extends PropsWithChildren {
  isActive?: boolean;
  onClick?: (event: any) => void | null;
}

export function PaginationButton({ isActive = true, onClick, children }: PaginationButtonProps) {
  const styles = paginationButtonStyles({ isActive });

  return (
    <ButtonComponent onClick={isActive ? onClick : undefined} sx={styles.paginationButton}>
      {children}
    </ButtonComponent>
  );
}
