import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Checkbox, FormGroup, FormControlLabel, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Menu as MenuIcon, HelpOutline as HelpIcon,  InfoOutlined as InfoIcon, PlaceOutlined as PlaceIcon } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close"; 

const municipalityData = {
  // Highly Suitable (Green)
  Lucban: {
    suitability: { color: "green", label: "Highly Suitable" },
    intercropping: ["Coffee Varieties", "Banana Cultivars"],
  },
  Sariaya: {
    suitability: { color: "green", label: "Highly Suitable" },
    intercropping: ["Banana Cultivars", "Cacao Varieties"],
  },
  Mulanay: {
    suitability: { color: "green", label: "Highly Suitable" },
    intercropping: ["Corn Varieties", "Coffee Varieties"],
  },
  "San Francisco": {
    suitability: { color: "green", label: "Highly Suitable" },
    intercropping: ["Cacao Varieties", "Banana Cultivars"],
  },
  "San Andres": {
    suitability: { color: "green", label: "Highly Suitable" },
    intercropping: ["Corn Varieties", "Banana Cultivars"],
  },
  "San Narciso": {
    suitability: { color: "green", label: "Highly Suitable" },
    intercropping: ["Coffee Varieties", "Cacao Varieties"],
  },
  Lopez: {
    suitability: { color: "green", label: "Highly Suitable" },
    intercropping: ["Coffee Varieties", "Corn Varieties"],
  },
  Buenavista: {
    suitability: { color: "green", label: "Highly Suitable" },
    intercropping: ["Cacao Varieties", "Banana Cultivars"],
  },
  Guinayangan: {
    suitability: { color: "green", label: "Highly Suitable" },
    intercropping: ["Banana Cultivars", "Corn Varieties"],
  },
  Gumaca: {
    suitability: { color: "green", label: "Highly Suitable" },
    intercropping: ["Coffee Varieties", "Corn Varieties"],
  },
  "General Luna": {
    suitability: { color: "green", label: "Highly Suitable" },
    intercropping: ["Banana Cultivars", "Coffee Varieties"],
  },

  // Moderately Suitable (Yellow)
  "Lucena City": {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Banana Cultivars", "Cacao Varieties"],
  },
  "Tayabas City": {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Coffee Varieties", "Corn Varieties"],
  },
  Mauban: {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Banana Cultivars", "Corn Varieties"],
  },
  Atimonan: {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Coffee Varieties", "Banana Cultivars"],
  },
  Macalelon: {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Corn Varieties", "Coffee Varieties"],
  },
  Pitogo: {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Cacao Varieties", "Corn Varieties"],
  },
  Catanauan: {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Banana Cultivars", "Coffee Varieties"],
  },
  Unisan: {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Corn Varieties", "Banana Cultivars"],
  },
  "Padre Burgos": {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Coffee Varieties", "Cacao Varieties"],
  },
  Pagbilao: {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Banana Cultivars", "Corn Varieties"],
  },
  Infanta: {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Coffee Varieties", "Cacao Varieties"],
  },
  Real: {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Cacao Varieties", "Corn Varieties"],
  },
  Polillo: {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Banana Cultivars", "Cacao Varieties"],
  },
  Panukulan: {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Corn Varieties", "Coffee Varieties"],
  },
  Patnanungan: {
    suitability: { color: "yellow", label: "Moderately Suitable" },
    intercropping: ["Banana Cultivars", "Corn Varieties"],
  },

  // Marginally Suitable (Orange)
  "General Nakar": {
    suitability: { color: "orange", label: "Marginally Suitable" },
    intercropping: ["Coffee Varieties", "Corn Varieties"],
  },
  Calauag: {
    suitability: { color: "orange", label: "Marginally Suitable" },
    intercropping: ["Corn Varieties", "Banana Cultivars"],
  },
  Plaridel: {
    suitability: { color: "orange", label: "Marginally Suitable" },
    intercropping: ["Coffee Varieties", "Cacao Varieties"],
  },
  Tagkawayan: {
    suitability: { color: "orange", label: "Marginally Suitable" },
    intercropping: ["Banana Cultivars", "Corn Varieties"],
  },
  Quezon: {
    suitability: { color: "orange", label: "Marginally Suitable" },
    intercropping: ["Cacao Varieties", "Coffee Varieties"],
  },

  // Currently Not Suitable (Red)
  Alabat: {
    suitability: { color: "red", label: "Currently Not Suitable" },
    intercropping: ["Limited suitability for Banana Cultivars"],
  },
  Perez: {
    suitability: { color: "red", label: "Currently Not Suitable" },
    intercropping: ["Limited suitability for Cacao Varieties"],
  },
  Jomalig: {
    suitability: { color: "red", label: "Currently Not Suitable" },
    intercropping: ["Limited suitability for Corn Varieties"],
  },
  Burdeos: {
    suitability: { color: "red", label: "Currently Not Suitable" },
    intercropping: ["Limited suitability for Coffee Varieties"],
  },
};

const Sidebar = ({ setSelectedMunicipality }) => {
  const [localMunicipality, setLocalMunicipality] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [coffeeSelected, setCoffeeSelected] = useState(false);
  const [cacaoSelected, setCacaoSelected] = useState(false);
  const [bananaSelected, setBananaSelected] = useState(false);
  const [cornSelected, setCornSelected] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [legendOpen, setLegendOpen] = useState(false); // State for Legend Modal

  const handleMunicipalityChange = (event) => {
    const municipality = event.target.value;
    setSelectedMunicipality(municipality);
    setLocalMunicipality(municipality);
  };

  const handleCheckSuitability = () => {
    const selectedOptions = [];
    if (coffeeSelected) selectedOptions.push({ label: "Coffee", key: "Coffee Varieties" });
    if (cacaoSelected) selectedOptions.push({ label: "Cacao", key: "Cacao Varieties" });
    if (bananaSelected) selectedOptions.push({ label: "Banana", key: "Banana Cultivars" });
    if (cornSelected) selectedOptions.push({ label: "Corn", key: "Corn Varieties" });
  
    if (!localMunicipality) {
      setResultData({
        title: "Error",
        content: "Please select a municipality.",
      });
      setResultsOpen(true);
      return;
    }
  
    if (selectedOptions.length === 0) {
      setResultData({
        title: "Error",
        content: "Please select at least one intercropping option.",
      });
      setResultsOpen(true);
      return;
    }
  
    const municipalityInfo = municipalityData[localMunicipality];
    const { suitability, intercropping } = municipalityInfo;
  
    const optionResults = selectedOptions.map((option) => {
      const isSuitable = intercropping.includes(option.key) ? "Suitable" : "Not Suitable";
      return `${option.label}: ${isSuitable}`;
    });
  
    setResultData({
      title: "Soil Suitability Assessment",
      content: {
        suitabilityLabel: `🟡 ${suitability.label}`,
        intercroppingSuitability: optionResults.join("\n"),
      },
    });
    
    setResultsOpen(true);
  
    // Reset the municipality and intercropping options
    //setLocalMunicipality(""); // Reset the municipality selection
    //setSelectedMunicipality(""); // Reset parent state if needed
    setCoffeeSelected(false); // Reset intercropping checkboxes
    setCacaoSelected(false);
    setBananaSelected(false);
    setCornSelected(false);
  };

  const handleModalClose = () => {
    setResultsOpen(false);
    // Reset state here only if necessary for form reuse
    // setLocalMunicipality(""); // Optional
  };
  
  const sortedMunicipalities = Object.keys(municipalityData).sort();

  return (
    <div className="p-5 w-full md:w-[300px] bg-white mr-0 sm:mr-2.5">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
       <h2
        style={{
          color: "#537F19",
          fontWeight: "bold",
          textTransform: "uppercase",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Gray shadow added
          fontSize: "19.5px", // Larger text
        }}
      >
        Suitability Map
      </h2>

        <IconButton
          onClick={() => setHelpOpen(true)}
          //style={{ backgroundColor: "#E0E0E0", padding: "10px" }} // Gray background
          aria-label="help"
        >
          <HelpIcon style={{ color: "#6C757D",  }} /> {/* Gray icon color */}
        </IconButton>
      </div>

      <FormControl fullWidth>
        <InputLabel id="municipality-label">Municipality</InputLabel>
        <Select
          labelId="municipality-label"
          id="municipality-select"
          value={localMunicipality}
          onChange={handleMunicipalityChange}
        >
          {sortedMunicipalities.map((municipality) => (
            <MenuItem key={municipality} value={municipality}>
              {municipality}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
        <IconButton
          onClick={() => setShowOptions(!showOptions)}
          style={{ marginRight: "10px" }}
        >
          <MenuIcon />
        </IconButton>
        <span style={{ flex: 1 }}>Intercropping Options</span>
      </div>

      {showOptions && (
        <FormGroup style={{ marginTop: "10px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={coffeeSelected}
                onChange={() => setCoffeeSelected(!coffeeSelected)}
              />
            }
            label="Coffee Varieties"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={cacaoSelected}
                onChange={() => setCacaoSelected(!cacaoSelected)}
              />
            }
            label="Cacao Varieties"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={bananaSelected}
                onChange={() => setBananaSelected(!bananaSelected)}
              />
            }
            label="Banana Cultivars"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={cornSelected}
                onChange={() => setCornSelected(!cornSelected)}
              />
            }
            label="Corn Varieties"
          />
        </FormGroup>
      )}

      <Button
        variant="contained"
        style={{
          marginTop: "20px",
          backgroundColor: "#537F19",
          color: "#fff",
          fontWeight: "bold",
        }}
        onClick={handleCheckSuitability}
      >
        Check Suitability
      </Button>

      <Dialog
        open={resultsOpen}
        onClose={() => {
          setResultsOpen(false);
          setLocalMunicipality(""); // Reset municipality after closing modal
          setSelectedMunicipality(""); // Reset selected municipality in parent state if necessary
        }}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          style={{
            backgroundColor: "#515151",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <span>Soil Suitability Assessment</span>
          <IconButton
            onClick={() => {
              setResultsOpen(false);
              setLocalMunicipality(""); // Reset municipality after closing modal
              setSelectedMunicipality(""); // Reset parent state if necessary
            }}
            style={{ color: "#fff" }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ padding: "20px" }}>
          <div style={{ whiteSpace: "pre-line", fontSize: "16px", color: "#333" }}>
            <div
              style={{ color: "#888", fontSize: "14px", marginBottom: "5px" }}
            >
              Quezon Province
              <InfoIcon
                style={{
                  color: "#000",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                onClick={() => setLegendOpen(true)}
              />
            </div>
            {/* Display the selected municipality here */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <PlaceIcon style={{ marginRight: "8px", color: "#000" }} />
              <strong style={{ fontSize: "16px" }}>
                {localMunicipality || "No municipality selected"}
              </strong>
            </div>

            <div style={{ marginTop: "10px" }}>
              <div style={{ fontWeight: "bold" }}>Crop Suitability:</div>
              <div>{resultData?.content.suitabilityLabel}</div>

              <div style={{ marginTop: "10px", fontWeight: "bold" }}>
                Selected Intercropping Suitability:
              </div>
              <div>{resultData?.content.intercroppingSuitability}</div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Legend Modal */}
      <Dialog open={legendOpen} onClose={() => setLegendOpen(false)} maxWidth="xs">
        <DialogTitle
          style={{
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <span>Soil Suitability Color Legend</span>
        </DialogTitle>
        <DialogContent>
          <ul style={{ listStyle: "none", padding: 0, fontWeight: "bold"}}>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <span
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "green",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
             Highly Suitable
            </li>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <span
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "yellow",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
             Moderately Suitable
            </li>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <span
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "orange",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
             Marginally Suitable
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              Not Suitable
            </li>
          </ul>
        </DialogContent>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px", // Adjust the padding as needed
          }}
        >
          <IconButton
            onClick={() => setLegendOpen(false)}
            style={{
              color: "black",
              backgroundColor: "transparent",
              ":hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </Dialog>

      <Dialog
        open={helpOpen}
        onClose={() => setHelpOpen(false)}
        maxWidth="md"
        fullWidth
      >
        {/* Dialog Title */}
        <DialogTitle
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#000",
            textAlign: "left",
          }}
        >
          HOW TO USE SUSTAINABILITY MAP?
          {/* Date */}
          <p
            style={{
              fontSize: "12px",
              color: "#6C757D",
              fontWeight: "lighter",
            }}
          >
            Last Updated April 2024
          </p>
          {/* Horizontal Line */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #D3D3D3",
              marginTop: "10px ",
              width: "100%",
            }}
          />
        </DialogTitle>

        {/* Dialog Content */}
        <DialogContent style={{ padding: "20px", fontSize: "15px" }}>
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            Choose Municipality:
          </p>
          <p>
            Once you've located the Municipality dropdown field, click on it to view
            a list of municipalities within Quezon Province. Select the municipality
            you want to learn about its soil.
          </p>

          <p
            style={{
              fontWeight: "bold",
              marginTop: "15px",
            }}
          >
            Select Barangay:
          </p>
          <p>
            After selecting the municipality, choose the specific barangay you’re
            interested in by clicking on it.
          </p>

          <p
            style={{
              fontWeight: "bold",
              marginTop: "15px",
            }}
          >
            Click Variety of Intercropping:
          </p>
          <p>
            Look for an option button or dropdown menu that allows you to select the
            variety of intercropping for coconut. Click on the option that best suits
            your needs or preferences.
          </p>

          <p
            style={{
              fontWeight: "bold",
              marginTop: "15px",
            }}
          >
            View Results:
          </p>
          <p>
            After selecting the variety of intercropping, the map may display
            suitability ratings or information relevant to your selection. Take note
            of this information for your decision-making process.
          </p>
        </DialogContent>

        {/* Dialog Actions */}
        <DialogActions style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Button
            onClick={() => setHelpOpen(false)}
            variant="contained"
            style={{
              backgroundColor: "#537F19",
              color: "#fff",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            I Understand
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
};

export default Sidebar;
