import type { NextPage } from "next";
import Nav from "../../src/components/Nav";
import useMovies from "../../src/hooks/useMovies";
import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Wrapper } from "../../src/components/ui";
import MovieCard from "../../src/components/MovieCard";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

interface FormInput {
  query: string;
}

const schema = yup
  .object({
    query: yup.string().required(),
  })
  .required();

const Home: NextPage = () => {
  const { push, query: pathQuery } = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    setQuery(data.query);
    push(`/search?query=${data.query}`, undefined, { shallow: true });
  };

  const [query, setQuery] = useState("");
  useEffect(() => {
    setQuery(pathQuery.query as string);
  }, [pathQuery.query]);

  const { searchMoviesApi } = useMovies();
  const { data } = searchMoviesApi(query);

  return (
    <>
      <Nav returnButton />

      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Controller
              name="query"
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={errors.query?.message ? true : false}
                  variant="filled"
                  fullWidth={true}
                  sx={{ marginBottom: "1rem" }}
                  color="info"
                  placeholder="search for movie"
                />
              )}
            />
            <IconButton
              size="small"
              color="inherit"
              aria-label="search movie"
              type="submit"
            >
              <SearchIcon fontSize="large" />
            </IconButton>
          </Box>
        </form>
        <Typography mb={2} sx={{ color: "#ff1744" }}>
          {errors.query?.message}
        </Typography>
        <Grid container columnSpacing={2} rowGap={2}>
          {data?.results?.map((movie) => (
            <MovieCard data={movie} key={movie.id} />
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export default Home;
