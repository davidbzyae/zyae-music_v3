import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  darken,
  lighten,
  styled,
} from "@mui/material";
import { FlaticonIcon, ImageIcon, LinkButton } from "@/components";

import { AccountControls } from "@/features/auth";
import { JSX } from "react";
import { NavPlaylists } from "@/features/playlists";
import { colors } from "@/styles";
import { useNavigate } from "react-router-dom";

const navRoutes = [
  {
    title: "Home",
    icon: "music-alt",
    to: "/",
  },
  {
    title: "Explore",
    icon: "world",
    to: "/explore",
  },
  {
    title: "Saved",
    icon: "bookmark",
    to: "/saved",
  },
];

const StyledLinkButton = styled(LinkButton)(({ theme }) =>
  theme.unstable_sx({
    px: 2.5,

    justifyContent: "left",
    gap: 2.5,
  })
);

const Navbar = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Stack
      width="20vw"
      minWidth="210px"
      maxWidth="300px"
      height="100vh"
      px={1.5}
    >
      <Stack
        height={64}
        direction="row"
        alignItems="center"
        spacing={1.5}
        ml={1.25}
        onClick={() => navigate("/")}
        sx={{
          cursor: "pointer",
          ":hover": {
            "> h5": { textDecoration: "underline" },
          },
        }}
      >
        <ImageIcon
          url="https://zyae.net/assets/images/brand/zyae/zm_logo.png"
          size={32}
        />
        <Typography variant="h5" fontSize={28}>
          Music
        </Typography>
      </Stack>
      <Stack spacing={0.5}>
        {navRoutes.map((route) => {
          return (
            <StyledLinkButton
              key={route.title}
              to={route.to}
              activeProps={{
                variant: "translucent",
                children: (
                  <>
                    <FlaticonIcon icon={`fi fi-sr-${route.icon}`} />
                    {route.title}
                  </>
                ),
              }}
            >
              <FlaticonIcon icon={`fi fi-rr-${route.icon}`} />
              {route.title}
            </StyledLinkButton>
          );
        })}
      </Stack>
      <Divider
        sx={{ my: 2, mx: -1.5, borderColor: lighten(colors.bg, 0.075) }}
      />
      <NavPlaylists />
    </Stack>
  );
};

const StyledInput = styled("input")(({ theme }) =>
  theme.unstable_sx({
    pl: 2,

    width: "100%",
    maxWidth: "400px",

    color: "text.primary",
    fontSize: 16,

    bgcolor: "transparent",
    border: `solid 1px ${lighten(colors.bg, 0.1)}`,
    borderRadius: "22px",
    borderRight: "none",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,

    "&::placeholder": {
      color: darken(colors.accent, 0.5),
    },
    "&:focus": {
      outline: "solid 2px",
      outlineColor: colors.primary,
    },
  })
);

const SearchBar = (): JSX.Element => {
  return (
    <Stack direction="row" width="100%">
      <StyledInput type="text" placeholder="Search Zyae Music" />
      <Button
        variant="translucent"
        sx={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        <FlaticonIcon icon="fi fi-rr-search" />
      </Button>
    </Stack>
  );
};

const Header = (): JSX.Element => {
  return (
    <AppBar position="relative" color="transparent" sx={{ pr: "18px" }}>
      <Toolbar disableGutters>
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
        >
          <SearchBar />
          <AccountControls />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

const PlayerBar = (): JSX.Element => {
  if (1 == (2 as number)) return <></>;
  else
    return (
      <Stack
        direction="row"
        spacing={2}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          py: 1.5,
          px: 2.5,
          width: "100vw",
        }}
      >
        <FlaticonIcon
          sx={{
            p: 2,
            bgcolor: lighten(colors.bg, 0.1),
            color: "text.secondary",
            borderRadius: 0.5,
          }}
          icon="fi fi-sr-music-alt"
          size={20}
        />
        <Stack
          spacing={1.25}
          justifyContent="center"
          width="100%"
          maxWidth={200}
        >
          <Box
            component="span"
            sx={{
              display: "flex",

              height: 14,
              bgcolor: lighten(colors.bg, 0.1),
              borderRadius: 7,
            }}
          />
          <Box
            component="span"
            sx={{
              display: "flex",

              width: "75%",

              height: 14,
              bgcolor: lighten(colors.bg, 0.1),
              borderRadius: 7,
            }}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="right"
          width="100%"
        >
          <IconButton size="large">
            <FlaticonIcon icon="fi fi-sr-rewind" size={1} />
          </IconButton>
          <IconButton size="large">
            <FlaticonIcon
              icon="fi fi-sr-play"
              sx={{ fontSize: "26px !important" }}
            />
          </IconButton>
          <IconButton size="large">
            <FlaticonIcon icon="fi fi-sr-forward" size={1} />
          </IconButton>
        </Stack>
      </Stack>
    );
};

const Main = styled("main")(({ theme }) =>
  theme.unstable_sx({
    position: "relative",

    height: "calc(100vh - 64px - 76px)",

    bgcolor: "background.default",

    border: `solid 1px ${lighten(colors.bg, 0.075)}`,
    borderRight: "none",
    // borderBottom: "none",
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,

    overflow: "hidden",
  })
);

type DesktopLayoutProps = {
  children: React.ReactNode;
};

export const DesktopLayout = ({
  children,
}: DesktopLayoutProps): JSX.Element => {
  return (
    <Grid container flexWrap="nowrap" bgcolor={lighten(colors.bg, 0.015)}>
      <CssBaseline />
      <Navbar />
      <Grid item xs>
        <Header />
        <Main>{children}</Main>
        <PlayerBar />
      </Grid>
    </Grid>
  );
};
