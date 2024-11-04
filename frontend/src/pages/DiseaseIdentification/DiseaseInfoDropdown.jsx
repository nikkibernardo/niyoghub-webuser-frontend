import React, { useState } from 'react';
import { IoInformationCircleOutline, IoWarningOutline, IoStopwatchOutline, IoBugOutline, IoLeafOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom'; 
import { FaChevronDown } from "react-icons/fa";

const DiseaseInfoDropdown = ({ highestConfidenceClass }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigation = useNavigate();

  const diseaseInfo = {
    WCLWD_Yellowing: {
      title: "Yellowing/Leaf Spot Disease",
      content: [
        {
          icon: <IoInformationCircleOutline size={24} color="#537F19" />, // Replacing Ionicons with React Icons
          title: "Identification of Disease/Pest",
          content: "Coconut Lethal Yellowing Disease (LYD) is a devastating disease affecting coconut palms and other palm species. It is caused by a phytoplasma, a type of bacteria-like organism that invades the vascular tissues of plants, disrupting nutrient transport and leading to plant death if left untreated."
        },
        {
          icon: <IoWarningOutline size={24} color="#537F19" />,
          title: "Symptoms of Damage",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Premature Nut Drop:</strong> Immature nuts fall early, reducing yield.</li>
              <li><strong>Yellowing of Fronds:</strong> Leaves, starting from the lower ones, yellow and die, spreading upward.</li>
              <li><strong>Necrosis of Inflorescences:</strong> Flower clusters turn black and die, reducing nut production.</li>
              <li><strong>Crown Wilting and Death:</strong> Fronds collapse, crown wilts, leading to the tree's death.</li>
              <li><strong>Stunted Growth:</strong> Younger palms become smaller and weaker.</li>
            </ul>
          )
        },
        {
          icon: <IoStopwatchOutline size={24} color="#537F19" />,
          title: "Prevention",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Use of Disease-Free Planting Materials:</strong> Plant certified, disease-free seedlings. Avoid palms from areas with lethal yellowing.</li>
              <li><strong>Plant Resistant Varieties:</strong> Use resistant varieties like Malayan Dwarf, Maypan Hybrid, and Fiji Dwarf.</li>
              <li><strong>Quarantine Practices:</strong> Restrict the movement of palms from infected areas to prevent spread.</li>
              <li><strong>Monitoring and Early Detection:</strong> Regularly inspect palms for early symptoms like nut drop or yellowing leaves.</li>
            </ul>
          )
        },
        {
          icon: <IoBugOutline size={24} color="#537F19" />,
          title: "Control Measures",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Removal of Infected Trees:</strong> Remove and destroy infected trees to prevent the disease from spreading.</li>
              <li><strong>Chemical Control:</strong> Oxytetracycline injections can temporarily suppress symptoms but must be repeated every 3-4 months. Not a cure.</li>
              <li><strong>Vector Control:</strong> Control insect populations (e.g., Myndus crudus) with insecticides or biological agents to reduce disease spread.</li>
              <li><strong>Sanitation Practices:</strong> Maintain sanitation in nurseries and fields by removing debris or infected materials.</li>
              <li><strong>Pruning and Care of Healthy Palms:</strong> Proper pruning improves airflow and reduces the risk of insect infestations.</li>
            </ul>
          )
        },
        {
          icon: <IoLeafOutline size={24} color="#537F19" />,
          title: "Resistant Coconut Variety",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Malayan Dwarf:</strong> Yellow, Red, and Green Dwarfs show significant resistance and adapt well to tropical climates.</li>
              <li><strong>Maypan Hybrid:</strong> A cross between Malayan Dwarf and Panama Tall, bred for resistance and widely planted in the Philippines.</li>
              <li><strong>Fiji Dwarf:</strong> Resistant, though a slower grower, and suitable for tropical conditions.</li>
            </ul>
          )
        }
      ],
    },
    WCLWD_DryingofLeaflets: {
      title: "Drying of Leaflets",
      content: [
        {
          icon: <IoInformationCircleOutline size={24} color="#537F19" />, // Replacing Ionicons with React Icons
          title: "Identification of Disease/Pest",
          content: "The drying of leaflets in coconut trees can be associated with a range of factors, including diseases, nutrient deficiencies, or environmental stresses. One of the notable diseases that causes drying of leaflets is Coconut Leaf Blight or Leaf Rot Disease. This condition can be caused by various pathogens, such as fungi or bacteria, and environmental factors that affect the health of the tree."
        },
        {
          icon: <IoWarningOutline size={24} color="#537F19" />,
          title: "Symptoms of Damage",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Drying and Browning of Leaflets:</strong> Small yellow to brown spots appear on older leaves, leading to leaflet drying and curling.</li>
              <li><strong>Progressive Leaf Drying:</strong> Leaves dry out from the tips, turning brown and brittle as the
              disease worsens.</li>
              <li><strong>Wilting of Leaves: </strong> Entire leaves may wilt, becoming pale or grayish.</li>
              <li><strong>Reduced Yield: </strong> Severe infections reduce coconut yield as leaf drying limits photosynthesis.</li>
              <li><strong>Crown Dieback: </strong> In extreme cases, the upper parts of the palm dry and collapse.</li>
            </ul>
          )
        },
        {
          icon: <IoStopwatchOutline size={24} color="#537F19" />,
          title: "Prevention",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Proper Planting Practices: </strong> Ensure good spacing to promote air circulation and reduce
              humidity.</li>
              <li><strong>Use Disease-Free Seedlings: </strong> Plant certified, healthy seedlings to prevent disease
              introduction.</li>
              <li><strong>Regular Monitoring: </strong> Inspect palms regularly for early signs of leaf drying, especially
              after rain.</li>
              <li><strong>Nutrient Management: </strong> Provide proper nutrients (nitrogen, potassium, zinc) to maintain
              tree health.</li>
            </ul>
          )
        },
        {
          icon: <IoBugOutline size={24} color="#537F19" />,
          title: "Control Measures",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Pruning of Infected Leaves: </strong> Prune and dispose of infected fronds to prevent disease spread;
              burn or bury materials far from the plantation.</li>
              <li><strong>Fungicide Treatment:  </strong> Apply copper-based or systemic fungicides early in infection to
              control spread.</li>
              <li><strong>Improved Drainage: </strong> Enhance drainage to prevent water stagnation, which encourages
              fungal infections.</li>
              <li><strong>Sanitation Practices: </strong>  Remove dead leaves and debris to reduce fungal pathogen habitats.</li>
            </ul>
          )
        },
        {
          icon: <IoLeafOutline size={24} color="#537F19" />,
          title: "Resistant Coconut Variety",
          content: (
            <div>
              <p>Resistant coconut varieties for preventing leaflet drying,
              suitable for the Philippine climate include:</p>
              <ul className="list-disc ml-5 space-y-2">
                <li><strong>Malayan Dwarf:</strong> Green, Yellow, and Red varieties are resistant to leaf blight and fungal diseases, thriving in humid conditions.</li>
                <li><strong>Tacunan Dwarf:</strong> Local variety, drought-tolerant, and resistant to leaf blight. </li>
                <li><strong>Baybay Tall:</strong> Adaptable to various climates, resistant to leaf diseases.</li>
                <li><strong>San Ramon Tall:</strong> Strong resistance to leaf blight and drought; thrives in high humidity.</li>
                <li><strong>Maypan Hybrid:</strong> Bred for resistance to leaf blight and environmental stress.</li>
              </ul>
            </div>
          )
        }       
      ],
    },      
    WCLWD_Flaccidity: {
      title: "Flaccidity",
      content: [
        {
          icon: <IoInformationCircleOutline size={24} color="#537F19" />, // Replacing Ionicons with React Icons
          title: "Identification of Disease/Pest",
          content: "Flaccidity disease in coconut trees, also known as coconut bud rot, is a serious disease caused by fungal or bacterial pathogens, particularly Phytophthora palmivora. It primarily affects the growing point or bud of the coconut palm, leading to the eventual death of the tree if not controlled."
        },
        {
          icon: <IoWarningOutline size={24} color="#537F19" />,
          title: "Symptoms of Damage",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Flaccid, Drooping Leaves:</strong> Leaves near the bud become limp and droop, especially younger ones.</li>
              <li><strong>Softening of the Growing Point:</strong> The bud softens and rots, causing an unpleasant odor as decay progresses.</li>
              <li><strong>Yellowing and Browning of Leaves:</strong> Affected leaves turn yellow and brown, drying up as the disease spreads.</li>
              <li><strong>Bud Collapse:</strong> The terminal bud collapses, leading to the tree's death; the entire crown may die in advanced stages.</li>
            </ul>
          )
        },
        {
          icon: <IoStopwatchOutline size={24} color="#537F19" />,
          title: "Prevention",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Use of Disease-Free Seedlings:</strong> Plant certified disease-free seedlings to prevent pathogen introduction.</li>
              <li><strong>Good Drainage:</strong> Ensure proper drainage to prevent waterlogging, which encourages fungal growth.</li>
              <li><strong>Regular Monitoring:</strong> Inspect palms regularly, especially during rainy seasons, for early signs of bud rot and flaccidity.</li>
            </ul>
          )
        },
        {
          icon: <IoBugOutline size={24} color="#537F19" />,
          title: "Control Measures",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Fungicide Application:</strong> Apply systemic fungicides like metalaxyl or copper-based fungicides early to control infection.</li>
              <li><strong>Removal of Infected Trees:</strong> Remove and destroy severely affected trees to prevent disease spread to nearby palms.</li>
              <li><strong>Sanitation:</strong> Maintain proper sanitation by removing debris and infected materials from the plantation.</li>
            </ul>
          )
        },
        {
          icon: <IoLeafOutline size={24} color="#537F19" />,
          title: "Resistant Coconut Variety",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Malayan Dwarf:</strong> Resistant to bud rot and fungal infections.</li>
              <li><strong>Maypan Hybrid:</strong> Bred for resistance to bud rot and flaccidity.</li>
              <li><strong>Tacunan Dwarf:</strong> Resistant to fungal infections, suited for tropical climates like the Philippines.</li>
            </ul>
          )
        }
      ],
    },
    CCI_Caterpillars: {
      title: "Caterpillars",
      content: [
        {
          icon: <IoInformationCircleOutline size={24} color="#537F19" />, // Replacing Ionicons with React Icons
          title: "Identification of Disease/Pest",
          content: "This disease is primarily caused by the feeding of caterpillars (such as the coconut leaf caterpillar) on coconut leaves, leading to significant damage and reduced productivity. These pests can severely weaken the tree by consuming foliage, which affects photosynthesis and overall growth."
        },
        {
          icon: <IoWarningOutline size={24} color="#537F19" />,
          title: "Symptoms of Damage",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Leaf Skeletonization:</strong> Caterpillars feed on leaves, leaving only the veins.</li>
              <li><strong>Chewed or Ragged Leaves:</strong> Leaves appear chewed and ragged with large sections missing.</li>
              <li><strong>Reduced Photosynthesis:</strong> Severe infestations hinder photosynthesis, affecting growth and nut production.</li>
              <li><strong>Frass Droppings:</strong> Presence of caterpillar droppings on leaves or around the tree base indicates infestation.</li>
            </ul>
          )
        },
        {
          icon: <IoStopwatchOutline size={24} color="#537F19" />,
          title: "Prevention",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Regular Monitoring:</strong> Inspect coconut trees often, especially during the rainy season, to catch infestations early.</li>
              <li><strong>Maintain Field Sanitation:</strong> Remove debris and infested leaves to reduce caterpillar breeding sites.</li>
              <li><strong>Promote Biological Control:</strong> Encourage natural predators like birds and parasitoid wasps for a balanced ecosystem.</li>
            </ul>
          )
        },
        {
          icon: <IoBugOutline size={24} color="#537F19" />,
          title: "Control Measures",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Biological Control:</strong> Use natural enemies like parasitoid wasps or predators to control caterpillar populations.</li>
              <li><strong>Insecticide Application:</strong> Apply neem-based products or Bacillus thuringiensis (Bt) during early larval stages.</li>
              <li><strong>Manual Removal:</strong> Regularly inspect and remove infested leaves to limit spread.</li>
              <li><strong>Regular Pruning:</strong> Prune heavily infested leaves to prevent further infestation.</li>
            </ul>
          )
        },
        {
          icon: <IoLeafOutline size={24} color="#537F19" />,
          title: "Resistant Coconut Variety",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Malayan Dwarf:</strong> Resilient against pest infestations, including caterpillars.</li>
              <li><strong>Maypan Hybrid:</strong> Known for its hardiness and resistance to common pests.</li>
              <li><strong>Tacunan Dwarf:</strong> Moderately resistant to pest damage, suited for tropical climates.</li>
            </ul>
          )
        }
      ],
    },
    CCI_Leaflets: {
      title: "Leaflets",
      content: [
        {
          icon: <IoInformationCircleOutline size={24} color="#537F19" />, // Replacing Ionicons with React Icons
          title: "Identification of Disease/Pest",
          content: "This disease affects coconut trees, causing their leaflets to dry up and die due to various pathogens, particularly fungal infections. It can result from environmental stressors, including drought or excessive rainfall, which can weaken the trees and make them more susceptible to infections."
        },
        {
          icon: <IoWarningOutline size={24} color="#537F19" />,
          title: "Symptoms of Damage",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Yellowing of Leaflets:</strong> Leaflets turn yellow and dry, indicating nutrient deficiencies or infection.</li>
              <li><strong>Wilting and Drying:</strong> Leaves become brittle and dry, starting from tips and margins.</li>
              <li><strong>Premature Leaf Drop:</strong> Severely affected leaves may drop early, reducing photosynthesis.</li>
              <li><strong>Fungal Structures:</strong> Infected leaves may display black spots or powdery mildew.</li>
            </ul>
          )
        },
        {
          icon: <IoStopwatchOutline size={24} color="#537F19" />,
          title: "Prevention",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Use Disease-Free Seedlings:</strong> Plant certified disease-free seedlings to prevent pathogens.</li>
              <li><strong>Ensure Good Drainage:</strong> Prevent waterlogging around palms to reduce fungal growth.</li>
              <li><strong>Regular Monitoring:</strong> Inspect palms frequently, especially during rainy seasons.</li>
            </ul>
          )
        },
        {
          icon: <IoBugOutline size={24} color="#537F19" />,
          title: "Control Measures",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Fungicide Application:</strong> Apply systemic fungicides like metalaxyl or copper-based fungicides to control the spread of the pathogen.</li>
              <li><strong>Removal of Infected Trees:</strong> Remove and destroy severely affected trees to prevent the spread of the disease to other nearby palms.</li>
              <li><strong>Sanitation:</strong> Maintain proper field sanitation by removing debris and infected materials from the plantation.</li>
            </ul>
          )
        },
        {
          icon: <IoLeafOutline size={24} color="#537F19" />,
          title: "Resistant Coconut Variety",
          content: (
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Malayan Dwarf:</strong> Known for its resistance to leaf blight and fungal diseases that can cause leaflet drying.</li>
              <li><strong>Tacunan Dwarf:</strong> A local variety that shows resilience to environmental stress and diseases affecting leaf health.</li>
              <li><strong>Baybay Tall:</strong> Adaptable variety with resistance to leaf diseases, suitable for various climates, including the Philippines.</li>
            </ul>
          )
        }
      ],
    },
  };

  const selectedDisease = diseaseInfo[highestConfidenceClass];

  const toggleCollapse = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
    <div className="w-full mt-5 border-2 border-gray-300 p-4 rounded-lg md:p-6 lg:p-8 max-w-2xl mx-auto">
      {selectedDisease.content.map((section, index) => (
        <div key={index} className="mb-4">
          <button 
            className="w-full text-left p-2 md:p-3 lg:p-4 bg-gray-100 hover:bg-gray-200 rounded-lg flex justify-between items-center" 
            onClick={() => toggleCollapse(index)}
          >
            <div className="flex flex-row items-center space-x-2">
              {section.icon} 
              <span className="text-base md:text-lg lg:text-xl font-medium mr-10">{section.title}</span>
            </div>
            <span className={`xl:ml-40 lg:ml-40 md:ml-40 sm:ml-40 ss:ml-40 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
            <FaChevronDown />
            </span>
          </button>
          {expandedIndex === index && (
            <div className="mt-2 p-2 md:p-3 lg:p-4 bg-white rounded-lg shadow-lg w-full">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="flex flex-col items-center pt-10">
      <p>Not satisfied witht he result?
        <a href="/chat-support" className="ml-1 text-[#537F19] hover:underline font-bold">Click here to chat with an expert now!</a>
      </p>
      <div className="flex flex-col md:flex-row items-center pt-5">
        <button
          className="text-[#537F19] hover:underline font-bold"
          onClick={() => window.history.back()}
        >
          Diagnose Again
        </button>
        <p className="mt-1 md:ml-1">if you would like to take another diagnosis</p>
      </div>
                
    </div>
    </>
  );
};

export default DiseaseInfoDropdown;
