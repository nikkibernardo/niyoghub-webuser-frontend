import { useState } from "react";
import Layout from "../../layout/Layout";
import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";

const SoilProfile = () => {
  const [selectedMunicipality, setSelectedMunicipality] = useState("");

  return (
    <>
      <Layout>
        <div className="flex flex-col md:flex-row h-screen">
          <Sidebar setSelectedMunicipality={setSelectedMunicipality} />
          <Map selectedMunicipality={selectedMunicipality} />
        </div>
      </Layout>
    </>
  );
};

export default SoilProfile;