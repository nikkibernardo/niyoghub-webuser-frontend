import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon, Info as InfoIcon } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { BsChatLeftTextFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// Municipalities with latitude and longitude
const municipalities = {
  Agdangan: { latitude: 13.8798, longitude: 122.2019 },
  Alabat: { latitude: 14.1072, longitude: 122.0111 },
  Atimonan: { latitude: 14.0027, longitude: 121.9216 },
  Buenavista: { latitude: 13.8283, longitude: 121.8126 },
  Burdeos: { latitude: 14.8484, longitude: 121.925 },
  Calauag: { latitude: 13.9606, longitude: 122.2875 },
  Candelaria: { latitude: 13.9276, longitude: 121.4237 },
  Catanauan: { latitude: 13.5929, longitude: 122.3188 },
  Dolores: { latitude: 13.9611, longitude: 121.449 },
  "General Luna": { latitude: 13.6961, longitude: 122.1657 },
  "General Nakar": { latitude: 14.7678, longitude: 121.4894 },
  Guinayangan: { latitude: 13.9123, longitude: 122.4311 },
  Gumaca: { latitude: 13.8541, longitude: 122.0972 },
  Infanta: { latitude: 14.751, longitude: 121.6522 },
  Jomalig: { latitude: 14.72, longitude: 122.4328 },
  Lopez: { latitude: 13.8809, longitude: 122.2594 },
  Lucban: { latitude: 14.1131, longitude: 121.5511 },
  "Lucena City": { latitude: 13.9373, longitude: 121.617 },
  Macalelon: { latitude: 13.7421, longitude: 122.1815 },
  Mauban: { latitude: 14.1916, longitude: 121.7304 },
  Mulanay: { latitude: 13.5261, longitude: 122.3994 },
  "Padre Burgos": { latitude: 13.869, longitude: 121.8123 },
  Pagbilao: { latitude: 13.9673, longitude: 121.6912 },
  Panukulan: { latitude: 14.8082, longitude: 121.742 },
  Patnanungan: { latitude: 14.67, longitude: 122.3084 },
  Perez: { latitude: 14.0227, longitude: 121.8137 },
  Pitogo: { latitude: 13.7833, longitude: 122.1277 },
  Plaridel: { latitude: 13.9894, longitude: 122.1226 },
  Polillo: { latitude: 14.7168, longitude: 121.9242 },
  Quezon: { latitude: 13.924, longitude: 122.2072 },
  Real: { latitude: 14.6637, longitude: 121.6074 },
  Sampaloc: { latitude: 14.1164, longitude: 121.4975 },
  "San Andres": { latitude: 13.5031, longitude: 122.6803 },
  "San Antonio": { latitude: 13.9805, longitude: 121.3761 },
  "San Francisco": { latitude: 13.58, longitude: 122.4801 },
  "San Narciso": { latitude: 13.4814, longitude: 122.4958 },
  Sariaya: { latitude: 13.9644, longitude: 121.5261 },
  Tagkawayan: { latitude: 14.0759, longitude: 122.4453 },
  "Tayabas City": { latitude: 14.0269, longitude: 121.5945 },
  Tiaong: { latitude: 13.9628, longitude: 121.3277 },
  Unisan: { latitude: 13.8324, longitude: 122.0618 },

};

// Create a custom icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const ZoomControls = ({ onInfoClick, onMessageClick }) => {
  const navigate = useNavigate();
  const map = useMap();

  const handleZoomIn = () => {
    if (map) map.setZoom(map.getZoom() + 1);
  };

  const handleZoomOut = () => {
    if (map) map.setZoom(map.getZoom() - 1);
  };

  const navigateChat = () => {
    navigate('/chat-support'); 
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
        backgroundColor: "#f0f0f0", // Light gray background
        borderRadius: "8px",
        padding: "8px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Message Button */}
      <IconButton onClick={navigateChat} style={{ color: "black" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="24px"
          height="24px"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 11H6v-2h12v2zm0-4H6V7h12v2zm0 8H6v-2h12v2z" />
        </svg>
      </IconButton>

      {/* Zoom In Button */}
      <IconButton onClick={handleZoomIn} style={{ color: "black" }}>
        <AddIcon />
      </IconButton>

      {/* Zoom Out Button */}
      <IconButton onClick={handleZoomOut} style={{ color: "black" }}>
        <RemoveIcon />
      </IconButton>

      {/* Info Button */}
      <IconButton onClick={onInfoClick} style={{ color: "black" }}>
        <InfoIcon />
      </IconButton>
    </div>
  );
};



const LegendModal = ({ legendOpen, setLegendOpen }) => {
  return (
    <Dialog open={legendOpen} onClose={() => setLegendOpen(false)} maxWidth="xs">
      <DialogTitle
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "bold",
          color: "black", 
        }}
      >
        Soil Suitability Color Legend
      </DialogTitle>
      <DialogContent>
        <ul style={{ listStyle: "none", padding: 0, fontWeight: "bold" }}>
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
          paddingBottom: "20px",
        }}
      >
        <IconButton
          onClick={() => setLegendOpen(false)}
          style={{ color: "black", backgroundColor: "transparent" }}
        >
          <CloseIcon />
        </IconButton>
      </div>
    </Dialog>
  );
};

// Main Map Component
const Map = ({ selectedMunicipality }) => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [legendOpen, setLegendOpen] = useState(false);

  useEffect(() => {
    if (selectedMunicipality && municipalities[selectedMunicipality]) {
      const { latitude, longitude } = municipalities[selectedMunicipality];
      setMarkerPosition([latitude, longitude]);
    } else {
      setMarkerPosition(null);
    }
  }, [selectedMunicipality]);

  return (
    <>
      <MapContainer
        center={[14.15, 121.65]}
        zoom={8}
        zoomControl={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        {markerPosition && (
          <Marker position={markerPosition} icon={customIcon}>
            <Tooltip direction="top" offset={[0, -20]} permanent>
              {selectedMunicipality}
            </Tooltip>
          </Marker>
        )}
        <ZoomControls onInfoClick={() => setLegendOpen(true)} />
      </MapContainer>
      <LegendModal legendOpen={legendOpen} setLegendOpen={setLegendOpen} />
    </>
  );
};

export default Map;
