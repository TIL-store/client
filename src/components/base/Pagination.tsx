import { Pagination } from '@mui/material';

interface Props {
  count: number;
}

export default function CustomPagination({ count }: Props) {
  return (
    <Pagination
      variant="outlined"
      shape="rounded"
      count={count}
      color="primary"
    />
  );
}
