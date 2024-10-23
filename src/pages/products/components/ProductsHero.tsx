import { FC } from "react";
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};

const ProductsHero: FC = () => {
  return (
    <Box
      sx={{
        background: "#e2daef",
        minHeight: { lg: "80vh", md: "75vh", sm: "70vh", xs: "auto" },
        width: "100%",
        py: { xs: 5, sm: 8, md: 10, lg: 12 },
      }}
    >
      <Container>
        <Grid
          container
          spacing={5}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <motion.img
              style={{ width: "100%", maxWidth: "500px" }}
              src="/images/books.png"
              alt="Books"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={3}>
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    color: "#bbaae0",
                    fontSize: {
                      lg: "24px",
                      md: "22px",
                      sm: "20px",
                      xs: "18px",
                    },
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Choose Your Brain Food
                </Typography>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: {
                      lg: "28px",
                      md: "26px",
                      sm: "24px",
                      xs: "22px",
                    },
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Sales up to 70% off
                </Typography>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      md: "15px",
                      sm: "14px",
                      xs: "13px",
                    },
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Welcome to our virtual haven for book enthusiasts! Explore a
                  curated collection of literary gems, spanning genres and
                  authors. Immerse yourself in captivating narratives,
                  educational resources, and timeless classics. Discover the joy
                  of reading with our diverse selection.
                </Typography>
              </motion.div>

              <motion.div
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    textTransform: "none",
                    background: "#bbaae0",
                    color: "#fff",
                    width: "140px",
                    transition: "background 0.3s ease",
                    "&:hover": {
                      background: "#a89acb",
                    },
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Explore More
                </Button>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductsHero;
