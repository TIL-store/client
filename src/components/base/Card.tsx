import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  styled,
  Typography,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';

interface Props {
  author: {
    name: string;
    imgSrc: string;
    url: string;
  };
  thumbnail: string;
  title: string;
  description: string;
  team: string;
  date: string;
}

const CardInfo = styled('div')`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;

    a {
      display: lock;
      font-size: 16px;
      line-height: 1.43;
      color: inherit;
      text-decoration: none;
    }

    span:last-child {
      display: block;
      width: 100%;
      font-size: 14px;
    }
  }
`;

const ClampTypography = styled(Typography)`
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default function CustomCard({
  author,
  thumbnail,
  title,
  description,
  team,
  date,
}: Props) {
  return (
    <Card component="article" sx={{ maxWidth: 345 }}>
      <CardInfo>
        <Avatar alt="user profile" src={author.imgSrc} />
        <div>
          <a href={author.url}>{author.name}</a>
          <Chip label={team} size="small" />
          <span>{date}</span>
        </div>
      </CardInfo>
      <CardMedia component="img" height="194" image={thumbnail} alt="" />
      <CardContent>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <ClampTypography variant="body2">{description}</ClampTypography>
      </CardContent>
    </Card>
  );
}
