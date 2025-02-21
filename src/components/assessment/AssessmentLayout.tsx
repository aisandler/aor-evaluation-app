import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronRight, ChevronLeft, Workflow } from 'lucide-react';
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

// Update the component mapping
const componentMap: { [key: string]: React.ComponentType<any> } = {
  'rfp-framework': RFPFramework,
  'agency-stabilization': AgencyStabilization,
  'progress-measurement': ProgressMeasurement,
  'data-quality-framework': DataQualityFramework,
};

const AssessmentLayout: React.FC = () => {
  const [activeArea, setActiveArea] = useState<string>('implementation');
  const [activeTab, setActiveTab] = useState('rfp-framework');

  useEffect(() => {
    // Get the content area element
    const contentArea = document.querySelector('.content-area');
    if (contentArea) {
      contentArea.scrollTop = 0;
    }
  }, [activeTab]); // This will run whenever activeTab changes

  const flattenNavigation = useCallback(() => {
    return navigation.flatMap(section => 
      section.children?.flatMap(item => {
        if (item.children && item.children.length > 0) {
          return [item, ...item.children];
        }
        return item;
      }) || []
    );
  }, []);

  const findCurrentIndex = useCallback(() => {
    const flatNav = flattenNavigation();
    return flatNav.findIndex(item => item.id === activeTab);
  }, [activeTab, flattenNavigation]);

  const navigatePages = useCallback((direction: 'prev' | 'next') => {
    const flatNav = flattenNavigation();
    const currentIndex = findCurrentIndex();
    const newIndex = direction === 'next' 
      ? Math.min(currentIndex + 1, flatNav.length - 1)
      : Math.max(currentIndex - 1, 0);
    
    if (flatNav[newIndex]) {
      handleTabChange(flatNav[newIndex].id);
    }
  }, [findCurrentIndex, flattenNavigation]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          navigatePages('next');
          break;
        case 'ArrowLeft':
          navigatePages('prev');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigatePages]);

  const handleSectionClick = (sectionId: string): void => {
    // Implementation can be added when needed
    console.log('Section clicked:', sectionId);
  };

  const renderContent = () => {
    console.log('Current activeSection:', activeTab);
    const Component = componentMap[activeTab];
    if (Component) {
      return <Component />;
    }
    return null;
  };

  const getCurrentPath = () => {
    // Reset path for each calculation
    const path: { title: string; id: string }[] = [];
    
    // Find the current section and item
    for (const section of navigation) {
      const currentItem = section.children?.find(item => item.id === activeTab);
      
      if (currentItem) {
        // We found the matching item, add both section and item to path
        path.push({ title: section.title, id: section.id });
        path.push({ title: currentItem.title, id: currentItem.id });
        break; // Exit loop once we've found our path
      }
    }

    return path;
  };

  // Update area and reset navigation state
  const handleAreaClick = (areaId: string): void => {
    setActiveArea(areaId);
  };

  // Update getCurrentTheme to be more specific
  const getCurrentTheme = (id: string): { primary: string; secondary: string; accent: string } => {
    const area = configMainAreas.find((a: Area) => a.id === id);
    return area?.theme || configMainAreas[0].theme;
  };

  // Update the theme classes based on current area
  const getThemeClasses = (areaId: string) => {
    const area = mainAreas.find(a => a.id === areaId);
    const isActive = activeArea === areaId;
    
    if (!area) return '';

    // Map area IDs to specific Tailwind classes to ensure they're included in the build
    const themeMap = {
      'implementation': {
        active: 'bg-amber-100 text-amber-900 border-b-[3px] border-amber-600 shadow-sm',
        hover: 'hover:text-amber-700 hover:bg-amber-50'
      }
    } as const;

    if (areaId !== 'implementation') {
      return isActive ? '' : 'text-gray-600';
    }

    return isActive
      ? themeMap.implementation.active
      : `text-gray-600 ${themeMap.implementation.hover}`;
  };

  // Get icon color classes based on area
  const getIconClasses = (areaId: string) => {
    const isActive = activeArea === areaId;
    const themeMap = {
      'implementation': { 
        active: 'text-amber-600', 
        hover: 'group-hover:text-amber-500' 
      }
    } as const;

    if (areaId !== 'implementation') {
      return isActive ? 'text-gray-600' : 'text-gray-400';
    }

    return isActive
      ? themeMap.implementation.active
      : `text-gray-400 ${themeMap.implementation.hover}`;
  };

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

        {/* Enhanced main area navigation */}
        <div className="flex px-6 gap-2 border-t bg-gray-50 pt-2">
          {mainAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => handleAreaClick(area.id)}
              className={`
                flex items-center gap-2 px-6 py-3 
                text-sm font-medium rounded-t-lg 
                transition-all duration-200 ease-in-out
                ${getThemeClasses(area.id)}
              `}
            >
              <area.icon className={`h-5 w-5 ${getIconClasses(area.id)}`} />
              {area.title}
            </button>
          ))}
        </div>
      </header>

      {/* Main content area with theme context */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div 
          className={`
            transition-all duration-300 ease-in-out
            border-r bg-white overflow-y-auto
            w-72
          `}
        >
          {/* Updated sidebar navigation content */}
          {navigation
            .filter(section => section.id === activeArea)
            .map((section) => (
              <div key={section.id} className="py-2">
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-300">
                  {section.children?.map((item) => (
                    <div key={item.id}>
                      <button
                        onClick={() => handleTabChange(item.children?.[0]?.id || item.id)}
                        className={`
                          w-full text-left px-4 py-2 text-sm font-bold text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors
                          ${activeTab === item.id
                            ? 'bg-amber-50 text-amber-600 font-medium'
                            : 'text-gray-600'
                          }
                        `}
                      >
                        {item.title}
                      </button>
                      {item.children && (
                        <div className="ml-4 space-y-1 border-l-2 border-gray-200">
                          {item.children.map((subItem) => (
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
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Main content with themed elements */}
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
            {renderContent()}
          </div>
          
          {/* Navigation buttons */}
          <div className="fixed bottom-8 right-8 flex gap-2">
            <button
              onClick={() => navigatePages('prev')}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              disabled={findCurrentIndex() === 0}
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={() => navigatePages('next')}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              disabled={findCurrentIndex() === navigation.flatMap(s => s.children).length - 1}
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentLayout;