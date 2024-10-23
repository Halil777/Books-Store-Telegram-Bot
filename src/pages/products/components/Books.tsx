import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import { FC } from "react";
import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const hoverVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  },
};

const Books: FC = () => {
  return (
    <Container>
      <Stack direction="row" spacing={2} width="100%" alignItems="center">
        <Typography
          sx={{
            fontSize: { lg: "26px", md: "24px", sm: "20px", xs: "18px" },
            fontWeight: 600,
          }}
        >
          Deals Of The Week
        </Typography>
        <Divider
          sx={{
            flexGrow: 1,
            borderColor: "#6C5DD3",
            height: "2px",
          }}
        />
      </Stack>
      <Grid container spacing={3} sx={{ py: { xs: 2, sm: 3, md: 3, lg: 3 } }}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Box
              component={motion.div}
              variants={hoverVariants}
              sx={{
                padding: 2,
                borderRadius: "16px",
                textAlign: "center",
                border: "1px solid #e0e0e0",
                cursor: "pointer",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <motion.img
                src="/images/books.png"
                alt="The Never Garden"
                style={{ width: "100%", borderRadius: "12px", height: "230px" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "#333",
                  }}
                >
                  Helena Paquet
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#777", fontSize: "16px" }}
                >
                  The Never Garden
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#333", fontSize: "18px", mt: 1 }}
                >
                  $25.00
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  borderRadius: "24px",
                  backgroundColor: "#6C5DD3",
                  "&:hover": {
                    backgroundColor: "#5a49b9",
                  },
                  textTransform: "none",
                  px: 4,
                  py: 1,
                }}
              >
                Buy Now
              </Button>
            </Box>
          </motion.div>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Box
              component={motion.div}
              variants={hoverVariants}
              sx={{
                padding: 2,
                borderRadius: "16px",
                textAlign: "center",
                border: "1px solid #e0e0e0",
                cursor: "pointer",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <motion.img
                src="/images/1984.webp"
                alt="The Never Garden"
                style={{ width: "100%", borderRadius: "12px", height: "230px" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "#333",
                  }}
                >
                  Helena Paquet
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#777", fontSize: "16px" }}
                >
                  The Never Garden
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#333", fontSize: "18px", mt: 1 }}
                >
                  $25.00
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  borderRadius: "24px",
                  backgroundColor: "#6C5DD3",
                  "&:hover": {
                    backgroundColor: "#5a49b9",
                  },
                  textTransform: "none",
                  px: 4,
                  py: 1,
                }}
              >
                Buy Now
              </Button>
            </Box>
          </motion.div>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Box
              component={motion.div}
              variants={hoverVariants}
              sx={{
                padding: 2,
                borderRadius: "16px",
                textAlign: "center",
                border: "1px solid #e0e0e0",
                cursor: "pointer",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <motion.img
                src="/images/Moby Dick.jpg"
                alt="The Never Garden"
                style={{ width: "100%", borderRadius: "12px", height: "230px" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "#333",
                  }}
                >
                  Helena Paquet
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#777", fontSize: "16px" }}
                >
                  The Never Garden
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#333", fontSize: "18px", mt: 1 }}
                >
                  $25.00
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  borderRadius: "24px",
                  backgroundColor: "#6C5DD3",
                  "&:hover": {
                    backgroundColor: "#5a49b9",
                  },
                  textTransform: "none",
                  px: 4,
                  py: 1,
                }}
              >
                Buy Now
              </Button>
            </Box>
          </motion.div>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Box
              component={motion.div}
              variants={hoverVariants}
              sx={{
                padding: 2,
                borderRadius: "16px",
                textAlign: "center",
                border: "1px solid #e0e0e0",
                cursor: "pointer",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <motion.img
                src="/images/Pride and Prejudice.jpg"
                alt="The Never Garden"
                style={{ width: "100%", borderRadius: "12px", height: "230px" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "#333",
                  }}
                >
                  Helena Paquet
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#777", fontSize: "16px" }}
                >
                  The Never Garden
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#333", fontSize: "18px", mt: 1 }}
                >
                  $25.00
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  borderRadius: "24px",
                  backgroundColor: "#6C5DD3",
                  "&:hover": {
                    backgroundColor: "#5a49b9",
                  },
                  textTransform: "none",
                  px: 4,
                  py: 1,
                }}
              >
                Buy Now
              </Button>
            </Box>
          </motion.div>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Box
              component={motion.div}
              variants={hoverVariants}
              sx={{
                padding: 2,
                borderRadius: "16px",
                textAlign: "center",
                border: "1px solid #e0e0e0",
                cursor: "pointer",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <motion.img
                src="/images/The Alchemist.jpg"
                alt="The Never Garden"
                style={{ width: "100%", borderRadius: "12px", height: "230px" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "#333",
                  }}
                >
                  Helena Paquet
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#777", fontSize: "16px" }}
                >
                  The Never Garden
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#333", fontSize: "18px", mt: 1 }}
                >
                  $25.00
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  borderRadius: "24px",
                  backgroundColor: "#6C5DD3",
                  "&:hover": {
                    backgroundColor: "#5a49b9",
                  },
                  textTransform: "none",
                  px: 4,
                  py: 1,
                }}
              >
                Buy Now
              </Button>
            </Box>
          </motion.div>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Box
              component={motion.div}
              variants={hoverVariants}
              sx={{
                padding: 2,
                borderRadius: "16px",
                textAlign: "center",
                border: "1px solid #e0e0e0",
                cursor: "pointer",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <motion.img
                src="/images/The Cathcher in the rye.webp"
                alt="The Never Garden"
                style={{ width: "100%", borderRadius: "12px", height: "230px" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "#333",
                  }}
                >
                  Helena Paquet
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#777", fontSize: "16px" }}
                >
                  The Never Garden
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#333", fontSize: "18px", mt: 1 }}
                >
                  $25.00
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  borderRadius: "24px",
                  backgroundColor: "#6C5DD3",
                  "&:hover": {
                    backgroundColor: "#5a49b9",
                  },
                  textTransform: "none",
                  px: 4,
                  py: 1,
                }}
              >
                Buy Now
              </Button>
            </Box>
          </motion.div>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Box
              component={motion.div}
              variants={hoverVariants}
              sx={{
                padding: 2,
                borderRadius: "16px",
                textAlign: "center",
                border: "1px solid #e0e0e0",
                cursor: "pointer",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <motion.img
                src="/images/The Great Gatsby.jpg"
                alt="The Never Garden"
                style={{ width: "100%", borderRadius: "12px", height: "230px" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "#333",
                  }}
                >
                  Helena Paquet
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#777", fontSize: "16px" }}
                >
                  The Never Garden
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#333", fontSize: "18px", mt: 1 }}
                >
                  $25.00
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  borderRadius: "24px",
                  backgroundColor: "#6C5DD3",
                  "&:hover": {
                    backgroundColor: "#5a49b9",
                  },
                  textTransform: "none",
                  px: 4,
                  py: 1,
                }}
              >
                Buy Now
              </Button>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Books;
