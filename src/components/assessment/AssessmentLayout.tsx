import React, { useState } from 'react';
import Image from 'next/image';
import AgencyStabilization from './content/implementation/aor-partner/AgencyStabilization';
import ProgressMeasurement from './content/implementation/aor-partner/ProgressMeasurement';
import DataQualityFramework from './content/implementation/aor-partner/DataQualityFramework';

// Add interface for navigation items
interface NavigationItem {
  title: string;
  id: string;
  children?: NavigationItem[];
}

// Define type for navigation pages
interface NavigationPages {
  [key: string]: React.FC;
}

// Update the navigation structure
const navigation: NavigationItem[] = [
  {
    title: "Implementation",
    id: "implementation",
    children: [
      {
        title: "Project Components",
        id: "project-components",
        children: [
          { title: "Agency Stabilization", id: "agency-stabilization" },
          { title: "Progress Measurement", id: "progress-measurement" },
          { title: "Data Quality Framework", id: "data-quality-framework" }
        ]
      }
    ]
  }
];

const AssessmentLayout: React.FC = () => {
  const [activeArea] = useState<string>('implementation');
  const [activeTab, setActiveTab] = useState('agency-stabilization');

  const navigatePages: NavigationPages = {
    'agency-stabilization': AgencyStabilization,
    'progress-measurement': ProgressMeasurement,
    'data-quality-framework': DataQualityFramework
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const ActiveComponent = navigatePages[activeTab] || AgencyStabilization;

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