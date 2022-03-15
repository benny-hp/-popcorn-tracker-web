import { Box, Button } from "@mui/material";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import { Movie, UpdateMovie } from "../../interfaces";
import { CircularRating } from "../ui";
import DateAndTime from "./DateAndTime";
import Genre from "./Genre";
import Title from "./Title";
import Trailer from "./Trailer";
import Tagline from "./Tagline";
import Overview from "./Overview";
import StatusAndVote from "./StatusAndVote";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

import WatchedButton from "./WatchedButtom";
import WatchlistButton from "./WatchlistButton";
interface Props {
  data: Movie;
  handleUpdate: (watched: UpdateMovie) => void;
}

const MovieDetails = ({ data, handleUpdate }: Props) => {
  const {
    poster_path,
    title,
    release_date,
    original_language,
    genres,
    runtime,
    vote_average,
    video,
    tagline,
    overview,
    status,
    homepage,
    vote_count,
    backdrop_path,
    watched,
  } = data;
  let size = useWindowSize();
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "minmax(100px, max-content) minmax(200px, 1fr)",
          background: {
            md: `linear-gradient(rgba(0, 0, 0, 0.927),rgba(0, 0, 0, 0.9)) , center / cover no-repeat url(${backdrop_path})`,
          },
        }}
      >
        <Image src={poster_path} height={450} width={300} />

        <Box sx={{ paddingLeft: 2 }}>
          <Title title={title} release_date={release_date} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              columnGap: 1,
              marginBottom: 1,
            }}
          >
            <DateAndTime
              release_date={release_date}
              original_language={original_language}
              runtime={runtime}
            />

            <Genre genres={genres} />
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <CircularRating value={vote_average * 10} />
            <Trailer video={video} />
          </Box>
          <Tagline tagline={tagline} />
          {size > 600 && (
            <Box mt={2} sx={{ display: "flex", gap: 2 }}>
              <WatchedButton
                watched={watched}
                onClick={() => handleUpdate({ watched: true })}
              />
              <WatchlistButton
                watched={watched}
                onClick={() => handleUpdate({ watched: false })}
              />
            </Box>
          )}
          {size > 900 && (
            <>
              <Overview overview={overview} />
              <StatusAndVote
                homepage={homepage}
                release_date={release_date}
                status={status}
                vote_count={vote_count}
              />
            </>
          )}
        </Box>
      </Box>
      {size < 900 && (
        <>
          {size < 600 && (
            <Box
              mt={2}
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <WatchedButton
                watched={watched}
                onClick={() => handleUpdate({ watched: true })}
              />
              <WatchlistButton
                watched={watched}
                onClick={() => handleUpdate({ watched: false })}
              />
            </Box>
          )}

          <Overview overview={overview} />
          <StatusAndVote
            homepage={homepage}
            release_date={release_date}
            status={status}
            vote_count={vote_count}
          />
        </>
      )}
    </>
  );
};

export default MovieDetails;
