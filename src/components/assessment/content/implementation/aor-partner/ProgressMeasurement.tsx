import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle2, BarChart2, Target, Calendar, StickyNote } from 'lucide-react';

interface DeliverableStatus {
  [key: string]: {
    [key: string]: {
      [key: string]: boolean;
    };
  };
}

interface Notes {
  [key: string]: string;
}

const ProgressMeasurement: React.FC = () => {
  // State for tracking deliverable completion
  const [deliverableStatus, setDeliverableStatus] = useState<DeliverableStatus>(() => {
    // Try to load from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('deliverableStatus');
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return {};
  });

  // State for tracking notes
  const [notes, setNotes] = useState<Notes>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('workstreamNotes');
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return {};
  });

  // Save to localStorage when status changes
  useEffect(() => {
    localStorage.setItem('deliverableStatus', JSON.stringify(deliverableStatus));
  }, [deliverableStatus]);

  // Save notes to localStorage when they change
  useEffect(() => {
    localStorage.setItem('workstreamNotes', JSON.stringify(notes));
  }, [notes]);

  // Handle note changes
  const handleNoteChange = (streamId: string, value: string) => {
    setNotes(prev => ({
      ...prev,
      [streamId]: value
    }));
  };

  // Calculate progress for a workstream
  const calculateProgress = (streamId: string) => {
    const stream = workstreams[streamId as keyof typeof workstreams];
    if (!stream) return 0;
    
    let total = 0;
    let completed = 0;
    
    stream.initiatives.forEach((initiative, initiativeIdx) => {
      initiative.deliverables.forEach((_, deliverableIdx) => {
        total++;
        if (deliverableStatus[streamId]?.[initiativeIdx.toString()]?.[deliverableIdx.toString()]) {
          completed++;
        }
      });
    });
    
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };

  // Calculate progress for an initiative
  const calculateInitiativeProgress = (streamId: string, initiativeId: string) => {
    const stream = workstreams[streamId as keyof typeof workstreams];
    if (!stream) return 0;
    
    const initiative = stream.initiatives[parseInt(initiativeId)];
    if (!initiative) return 0;
    
    const total = initiative.deliverables.length;
    let completed = 0;
    
    initiative.deliverables.forEach((_, idx) => {
      if (deliverableStatus[streamId]?.[initiativeId]?.[idx.toString()]) {
        completed++;
      }
    });
    
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };

  // Toggle deliverable status
  const toggleDeliverable = (streamId: string, initiativeId: string, deliverableId: string) => {
    setDeliverableStatus(prev => {
      const newStatus = JSON.parse(JSON.stringify(prev)); // Deep clone to ensure proper state update
      if (!newStatus[streamId]) newStatus[streamId] = {};
      if (!newStatus[streamId][initiativeId]) newStatus[streamId][initiativeId] = {};
      
      // Toggle the specific deliverable
      const currentValue = newStatus[streamId][initiativeId][deliverableId];
      newStatus[streamId][initiativeId][deliverableId] = !currentValue;
      
      return newStatus;
    });
  };

  // Toggle all deliverables in an initiative
  const toggleAllInInitiative = (streamId: string, initiativeId: string, deliverables: string[]) => {
    setDeliverableStatus(prev => {
      const newStatus = JSON.parse(JSON.stringify(prev)); // Deep clone to ensure proper state update
      if (!newStatus[streamId]) newStatus[streamId] = {};
      if (!newStatus[streamId][initiativeId]) newStatus[streamId][initiativeId] = {};
      
      // Check if all are currently checked
      const allChecked = deliverables.every((_, idx) => 
        newStatus[streamId]?.[initiativeId]?.[idx.toString()]
      );
      
      // Toggle all deliverables in the initiative
      deliverables.forEach((_, idx) => {
        newStatus[streamId][initiativeId][idx.toString()] = !allChecked;
      });
      
      return newStatus;
    });
  };

  const workstreams = {
    measurement: {
      title: "Analytics & Measurement Framework",
      phase: "Week 1-2 (2/24 - 3/7)",
      initiatives: [
        {
          title: "Data Quality Remediation",
          description: "Deploy proper analytics filtering and establish clean reporting baseline",
          deliverables: [
            "Bot filtering / bad traffic remediation",
            "Conversion & event tracking validation / setup",
            "GTM Audit and Tagging Validation",
            "GA Configuration Audit"
          ]
        },
        {
          title: "Attribution Modeling",
          description: "Implement comprehensive attribution across channels",
          deliverables: [
            "Attribution model mapping",
            "Cross-channel tracking setup / validation",
            "Multi-channel attribution validation",
            "Lead source tracking",
            "Full journey attribution validation",
            "Campaign attribution validation"
          ]
        }
      ]
    },
    campaigns: {
      title: "Media Campaign Management & Strategy",
      phase: "Week 1-2 (2/24 - 3/7)",
      initiatives: [
        {
          title: "Media & Campaign Planning",
          description: "Implement campaign architecture and strategy across all brands",
          deliverables: [
            "Strategy Development & Alignment",
            "Goal Setting",
            "Monthly, Quarterly, and Yearly Campaign Planning",
            "Budget allocation framework / Flow Chart Management",
            "Performance tracking criteria and framework",
            "Test & Learn Framework"
          ]
        },
        {
          title: "Performance Optimization",
          description: "Address immediate campaign performance issues",
          deliverables: [
            "Branded search restructure",
            "Weekend campaign activation",
            "Budget reallocation plan",
            "Performance monitoring setup"
          ]
        },
        {
          title: "Channel Strategy",
          description: "Develop comprehensive channel strategy",
          deliverables: [
            "Channel assessment",
            "Performance benchmarks",
            "Growth opportunities",
            "Investment framework"
          ]
        }
      ]
    },
    reporting: {
      title: "Reporting Framework",
      phase: "Week 1-2 (2/24 - 3/7)",
      initiatives: [
        {
          title: "Dashboard Development",
          description: "Create comprehensive reporting dashboard suite",
          deliverables: [
            "KPI framework definition",
            "Dashboard templates",
            "Automated reporting setup",
            "Stakeholder views"
          ]
        },
        {
          title: "Performance Reporting Process",
          description: "Establish regular performance reporting cadence",
          deliverables: [
            "Weekly report template",
            "Monthly deep dive format",
            "Quarterly review framework",
            "Annual planning template"
          ]
        },
        {
          title: "Optimization Framework",
          description: "Develop data-driven optimization process",
          deliverables: [
            "Optimization protocol",
            "Testing framework",
            "Performance triggers",
            "Action planning template"
          ]
        }
      ]
    }
  };

  // Calculate overall progress
  const calculateOverallProgress = () => {
    let totalDeliverables = 0;
    let totalCompleted = 0;

    Object.entries(workstreams).forEach(([streamId, stream]) => {
      stream.initiatives.forEach((initiative, initiativeIdx) => {
        initiative.deliverables.forEach((_, deliverableIdx) => {
          totalDeliverables++;
          if (deliverableStatus[streamId]?.[initiativeIdx.toString()]?.[deliverableIdx.toString()]) {
            totalCompleted++;
          }
        });
      });
    });

    return totalDeliverables === 0 ? 0 : Math.round((totalCompleted / totalDeliverables) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-gray-600" />
              <CardTitle className="text-xl font-medium">Progress Measurement Framework</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-600">Overall Progress:</div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 transition-all duration-300"
                    style={{ width: `${calculateOverallProgress()}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{calculateOverallProgress()}%</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {Object.entries(workstreams).map(([streamId, { title }]) => (
              <div key={streamId} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-gray-900">{title}</div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 transition-all duration-300"
                        style={{ width: `${calculateProgress(streamId)}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{calculateProgress(streamId)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Workstreams */}
      {Object.entries(workstreams).map(([streamId, stream]) => (
        <Card key={streamId}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-gray-600" />
                <CardTitle className="text-xl font-medium">{stream.title}</CardTitle>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 transition-all duration-300"
                      style={{ width: `${calculateProgress(streamId)}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{calculateProgress(streamId)}%</span>
                </div>
                <div className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                  {stream.phase}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {stream.initiatives.map((initiative, initiativeIdx) => (
                <div key={initiativeIdx} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">{initiative.title}</div>
                        <div className="text-sm text-gray-600 mt-1">{initiative.description}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-20 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-green-500 transition-all duration-300"
                              style={{ width: `${calculateInitiativeProgress(streamId, initiativeIdx.toString())}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">
                            {calculateInitiativeProgress(streamId, initiativeIdx.toString())}%
                          </span>
                        </div>
                        <button
                          onClick={() => toggleAllInInitiative(streamId, initiativeIdx.toString(), initiative.deliverables)}
                          className="text-sm text-gray-500 hover:text-gray-700"
                        >
                          Toggle All
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    {initiative.deliverables.map((deliverable, dIdx) => (
                      <div 
                        key={dIdx} 
                        className="flex items-center gap-2 text-sm cursor-pointer"
                        onClick={() => toggleDeliverable(streamId, initiativeIdx.toString(), dIdx.toString())}
                      >
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors
                          ${deliverableStatus[streamId]?.[initiativeIdx.toString()]?.[dIdx.toString()]
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-400 hover:border-gray-600'
                          }`}
                        >
                          {deliverableStatus[streamId]?.[initiativeIdx.toString()]?.[dIdx.toString()] && (
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className={`text-gray-600 ${
                          deliverableStatus[streamId]?.[initiativeIdx.toString()]?.[dIdx.toString()]
                            ? 'line-through text-gray-400'
                            : ''
                        }`}>
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Notes Section */}
              <div className="mt-6 border-t pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <StickyNote className="w-4 h-4 text-gray-600" />
                  <div className="font-medium text-gray-900">Notes</div>
                </div>
                <textarea
                  value={notes[streamId] || ''}
                  onChange={(e) => handleNoteChange(streamId, e.target.value)}
                  placeholder="Add notes for this workstream..."
                  className="w-full min-h-[100px] p-3 rounded-lg border border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    text-sm text-gray-600 resize-y"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProgressMeasurement;