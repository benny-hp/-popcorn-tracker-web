import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Movie } from "../interfaces";
import Link from "./Link";
interface Props {
  data: Movie;
}

const MyImage = styled(Image)`
  border-radius: 7px;
`;
const MovieCard = ({ data }: Props) => {
  const { title, poster_path, release_date, id } = data;
  return (
    <Grid item xs={4} sm={3} md={2}>
      <div style={{ maxWidth: "150px" }}>
        <Link href={`/${id}`}>
          <MyImage src={poster_path} height={225} width={150} />
        </Link>
      </div>

      <Typography
        variant="h6"
        fontSize={16}
        component={Link}
        href={`/${id}`}
        noLinkStyle
        color={"text.primary"}
        sx={[
          {
            textDecoration: "none",
          },
          {
            "&:hover": {
              color: "orange",
            },
          },
        ]}
      >
        {title}
      </Typography>

      <Typography variant="caption" component={"p"}>
        {new Date(release_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </Typography>
    </Grid>
  );
};

export default MovieCard;