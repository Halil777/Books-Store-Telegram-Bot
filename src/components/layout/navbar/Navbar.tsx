import { FC } from "react";
import {
  Box,
  Stack,
  Container,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        py: 2,
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Logo */}
          <Typography
            sx={{
              fontSize: { lg: "28px", md: "26px", sm: "22px", xs: "20px" },
              fontWeight: 700,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Logo
          </Typography>

          {/* Menu Items for Larger Screens */}
          <Stack
            direction="row"
            spacing={4}
            sx={{
              display: { xs: "none", md: "flex" },
              fontSize: { lg: "18px", md: "17px", sm: "16px" },
            }}
          >
            <Typography
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer", color: "#333" }}
            >
              Books
            </Typography>
          </Stack>

          <IconButton
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" }, color: "#333" }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{ width: 250, padding: 2 }}
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <Typography
                onClick={() => navigate("/")}
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  cursor: "pointer",
                  mb: 2,
                  color: "#333",
                }}
              >
                Books
              </Typography>
            </Box>
          </Drawer>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
