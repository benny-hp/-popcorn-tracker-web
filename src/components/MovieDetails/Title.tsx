import { Typography } from "@mui/material";
interface Props {
  title: string;
  release_date: string;
}
const Title = ({ title, release_date }: Props) => {
  return (
    <Typography mb={2} variant="h5" fontWeight={500}>
      {title}{" "}
      <Typography color={"text.secondary"} variant="h5" component={"span"}>
        ({new Date(release_date).getFullYear()})
      </Typography>
    </Typography>
  );
};

export default Title;
