import copraPriceImage from "../../assets/copraPrice.jpg";
import { Box, Typography, Card, CardContent, TextField } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info"; 
import LayoutRegisterOut from "../../layout/LayoutRegisterOut";

const CopraPriceOut = () => {
  return (
    <>
    <LayoutRegisterOut>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          gap: 4,
          px: { xs: 2, md: 8 },
          mt: 4,
        }}
      >
        {/* Left Column - Text Section */}
        <Box sx={{ flex: 1 }}>

        <Typography
          sx={{
            fontSize: "30px",
            paddingBottom: "5px",
            fontWeight: "bold",
            color: "#537F19",
            textShadow: "2px 2px 4px gray", // Gray shadow
          }}
        >
          COPRA AND WHOLENUT PRICE WATCH
        </Typography>
          {/* Date Picker */}
          <TextField
            label="Choose date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            sx={{ mb: 4 }}
          />

          {/* Informational Card */}
          <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <InfoIcon sx={{ color: "black" }} />
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Keeping an eye on the daily prices of copra and whole nuts is essential for you as a coconut farmer.
                </Typography>
              </Box>
              <Typography variant="body2">
                It helps you make smarter decisions about when to sell your produce. By staying informed about price fluctuations, you can sell at the right time to maximize your profits and ensure financial stability.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Right Column - Image Section */}
        <Box
          sx={{
            flex: 2, // Larger image section
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              padding: "30px", // Padding inside the border
              border: "1px solid black", // Black border
              borderRadius: "4px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              display: "inline-block",
            }}
          >
            <img
              src={copraPriceImage}
              alt="Copra Price Watch"
              style={{
                maxWidth: "100%",
                display: "block", // Prevent inline spacing issues
              }}
            />
          </Box>
        </Box>
      </Box>
    </LayoutRegisterOut>
    </>
  );
};

export default CopraPriceOut;