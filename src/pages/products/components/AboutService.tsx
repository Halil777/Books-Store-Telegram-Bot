import { FC } from "react";
import { Container, Grid, Stack, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import PaymentIcon from "@mui/icons-material/Payment";
import HighQualityIcon from "@mui/icons-material/HighQuality";

const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const AboutService: FC = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ py: { xs: 5, sm: 8, md: 10, lg: 12 } }}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  borderRadius: "12px",
                  border: "1px solid #e2daef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <DownloadIcon sx={{ fontSize: 30, color: "#bbaae0" }} />
              </Box>
              <Stack>
                <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                  Quick Downloading
                </Typography>
                <Typography sx={{ color: "darkgray", fontSize: "15px" }}>
                  Fast access to your content with our high-speed download
                  services.
                </Typography>
              </Stack>
            </Stack>
          </motion.div>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={12}>
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  borderRadius: "12px",
                  border: "1px solid #e2daef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <PaymentIcon sx={{ fontSize: 30, color: "#bbaae0" }} />
              </Box>
              <Stack spacing={1}>
                <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                  Secure Payment
                </Typography>
                <Typography sx={{ color: "darkgray", fontSize: "15px" }}>
                  Shop confidently with our secure payment system for worry-free
                  transactions.
                </Typography>
              </Stack>
            </Stack>
          </motion.div>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={12}>
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  borderRadius: "12px",
                  border: "1px solid #e2daef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <HighQualityIcon sx={{ fontSize: 30, color: "#bbaae0" }} />
              </Box>
              <Stack spacing={1}>
                <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                  Best Quality
                </Typography>
                <Typography sx={{ color: "darkgray", fontSize: "15px" }}>
                  Experience top-notch quality products that exceed expectations
                  and stand the test of time.
                </Typography>
              </Stack>
            </Stack>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutService;
