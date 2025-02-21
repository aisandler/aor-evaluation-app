import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Target, CheckCircle, Calendar, FileText } from 'lucide-react';

const RFPFramework: React.FC = () => {
  const strategicContext = [
    {
      point: "Cost Structure Optimization",
      details: "Current agency fees exceed industry standards at 57% vs typical 12-20%, representing $150,000 annual optimization potential"
    },
    {
      point: "Data Quality Enhancement",
      details: "20-25% of reported traffic identified as invalid, impacting performance measurement accuracy"
    },
    {
      point: "Strategic Execution",
      details: "Basic campaign execution lacking strategic guidance, evidenced by branded search cannibalization and weekend campaign gaps"
    }
  ];

  const requirements = {
    technical: [
      "Advanced analytics implementation and management",
      "Adobe Commerce/Magento platform expertise",
      "Marketing automation platform integration",
      "Cross-channel tracking and attribution modeling",
      "Data visualization and reporting infrastructure"
    ],
    strategic: [
      "Multi-brand digital strategy development",
      "Performance marketing optimization",
      "Content development framework",
      "Marketplace growth strategy",
      "Technical SEO and content optimization"
    ],
    operational: [
      "Campaign management and optimization",
      "Analytics and reporting framework",
      "Platform maintenance and enhancement",
      "Quality assurance and monitoring",
      "Strategic planning and execution"
    ]
  };

  const timeline = [
    {
      phase: "Phase 1: Initial Screening",
      duration: "2 weeks",
      steps: [
        "RFP distribution to selected agencies",
        "Question and answer period",
        "Initial proposal submissions",
        "First-round evaluation"
      ]
    },
    {
      phase: "Phase 2: Detailed Evaluation",
      duration: "3 weeks",
      steps: [
        "Shortlist development",
        "Agency presentations",
        "Reference checks",
        "Capability assessment",
        "Cost structure analysis"
      ]
    },
    {
      phase: "Phase 3: Final Selection",
      duration: "2 weeks",
      steps: [
        "Partnership model refinement",
        "Service agreement development",
        "Implementation planning",
        "Transition framework development"
      ]
    }
  ];

  const deliverables = {
    initial: [
      "Comprehensive service proposal",
      "Team structure and expertise",
      "Technical capabilities overview",
      "Case studies and references",
      "Investment framework"
    ],
    final: [
      "Strategic partnership approach",
      "Service delivery model",
      "Value creation framework",
      "Implementation roadmap",
      "Performance measurement system"
    ]
  };

  return (
    <div className="space-y-6">
      {/* Strategic Context */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-gray-600" />
            <CardTitle className="text-xl font-medium">Strategic Context</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {strategicContext.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-gray-900">{item.point}</div>
                <div className="text-gray-600 mt-1">{item.details}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Partner Requirements */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-gray-600" />
            <CardTitle className="text-xl font-medium">Partner Requirements</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Technical Requirements</h3>
              <div className="space-y-2">
                {requirements.technical.map((req, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                    {req}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Strategic Requirements</h3>
              <div className="space-y-2">
                {requirements.strategic.map((req, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                    {req}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Operational Requirements</h3>
              <div className="space-y-2">
                {requirements.operational.map((req, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                    {req}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-600" />
            <CardTitle className="text-xl font-medium">Selection Timeline</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {timeline.map((phase, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-medium text-gray-900">{phase.phase}</div>
                  <div className="text-sm bg-white px-3 py-1 rounded-full text-gray-600">
                    {phase.duration}
                  </div>
                </div>
                <div className="space-y-2">
                  {phase.steps.map((step, stepIdx) => (
                    <div key={stepIdx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-gray-400" />
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Deliverables */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-gray-600" />
            <CardTitle className="text-xl font-medium">Required Deliverables</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Initial Submission</h3>
              <div className="space-y-2">
                {deliverables.initial.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Final Submission</h3>
              <div className="space-y-2">
                {deliverables.final.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded text-sm text-gray-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RFPFramework;