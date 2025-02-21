import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import RFPFramework from './content/implementation/aor-partner/RFPFramework';
import AgencyStabilization from './content/implementation/aor-partner/AgencyStabilization';
import ProgressMeasurement from './content/implementation/aor-partner/ProgressMeasurement';
import DataQualityFramework from './content/implementation/aor-partner/DataQualityFramework';
import { mainAreas as configMainAreas, Area } from '@/lib/assessment/areas';

// Add interface for navigation items
interface NavigationItem {
  title: string;
  id: string;
  children?: NavigationItem[];
}

// Define the main navigation areas
interface MainArea {
  id: string;
  title: string;
  icon: React.ElementType;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// Define type for navigation pages
interface NavigationPages {
  [key: string]: React.FC;
}

const mainAreas: MainArea[] = [
  {
    id: 'implementation',
    title: 'AOR Partner Evaluation',
    icon: () => null,
    theme: {
      primary: 'amber-600',
      secondary: 'amber-100',
      accent: 'amber-900'
    }
  }
];

// Update the navigation structure
const navigation: NavigationItem[] = [
  {
    title: "AOR Partner Evaluation",
    id: "implementation",
    children: [
      {
        title: "AOR Partner Evaluation",
        id: "aor-partner",
        children: [
          { title: "RFP Framework", id: "rfp-framework" },
          { title: "Agency Stabilization", id: "agency-stabilization" },
          { title: "Progress Measurement", id: "progress-measurement" },
          { title: "Data Quality Framework", id: "data-quality-framework" }
        ]
      }
    ]
  }
];

const AssessmentLayout: React.FC = () => {
  const [activeArea, setActiveArea] = useState<string>('implementation');
  const [activeTab, setActiveTab] = useState('rfp-framework');

  const navigatePages: NavigationPages = {
    'rfp-framework': RFPFramework,
    'agency-stabilization': AgencyStabilization,
    'progress-measurement': ProgressMeasurement,
    'data-quality-framework': DataQualityFramework
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleAreaClick = (areaId: string): void => {
    setActiveArea(areaId);
  };

  const getCurrentPath = () => {
    const path: { title: string; id: string }[] = [];
    
    // Find the current section and item
    for (const section of navigation) {
      if (section.children) {
        for (const item of section.children) {
          if (item.children) {
            const currentItem = item.children.find(subItem => subItem.id === activeTab);
            if (currentItem) {
              path.push({ title: section.title, id: section.id });
              path.push({ title: item.title, id: item.id });
              path.push({ title: currentItem.title, id: currentItem.id });
              break;
            }
          }
        }
      }
    }
    
    return path;
  };

  const ActiveComponent = navigatePages[activeTab] || RFPFramework;

  return (
    <div className="flex flex-col h-screen">
      <header className="flex flex-col border-b">
        {/* Top bar with logo and title */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Image
              src="/econoco-logo.png"
              alt="Econoco"
              className="h-8 w-auto object-contain"
              style={{ maxWidth: '180px' }}
              width={180}
              height={80}
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Digital Marketing Strategy
              </h1>
              <h2 className="text-lg text-gray-600 font-medium -mt-1">
                & Implementation Project
              </h2>
            </div>
          </div>
          <div className="text-gray-600 font-medium">
            Sandler Digital Advisory
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-72 border-r bg-white overflow-y-auto">
          {navigation
            .filter(section => section.id === activeArea)
            .map((section) => (
              <div key={section.id} className="py-2">
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-300">
                  {section.children?.map((item) => (
                    <div key={item.id}>
                      {item.children?.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleTabChange(subItem.id)}
                          className={`
                            w-full text-left px-4 py-2 text-sm
                            hover:bg-gray-50 transition-colors
                            ${activeTab === subItem.id
                              ? 'bg-amber-50 text-amber-600 font-medium'
                              : 'text-gray-600'
                            }
                          `}
                        >
                          {subItem.title}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          {/* Breadcrumb */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b z-10">
            <div className="px-6 py-3 flex items-center gap-2 text-sm">
              {getCurrentPath().map((item, index) => (
                <React.Fragment key={item.id}>
                  {index > 0 && (
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  )}
                  <span className={
                    index === getCurrentPath().length - 1 
                      ? "font-medium text-gray-900"
                      : "text-gray-500"
                  }>
                    {item.title}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <ActiveComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentLayout;