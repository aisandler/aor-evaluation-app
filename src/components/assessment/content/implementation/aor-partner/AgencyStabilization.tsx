import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, CheckCircle2, TrendingUp, BarChart2 } from 'lucide-react';

const AgencyStabilization: React.FC = () => {
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
            "GA Configuration Audit",
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
      phase: "Week 1 - 2  (2/24 - 3/7)",
      initiatives: [
        {
          title: "Media & Campaign Planning",
          description: "Implement campaign architecture and strategy across all brands (where applicable)",
          deliverables: [
            "Strategy Development & Alignment",
            "Goal Setting",
            "Establishing Monthly, Quarterly, and Yearly Campaign Planning",
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

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-gray-600" />
            <CardTitle className="text-xl font-medium">eCommerce Stabilization Plan</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="font-medium text-gray-900 mb-2">Analytics & Measurement Framework</div>
              <div className="text-sm text-gray-600">
                Proper implementation of tracking and filtering required to enable accurate 
                performance measurement and optimization.
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="font-medium text-gray-900 mb-2">Media Campaign Management & Strategy</div>
              <div className="text-sm text-gray-600">
                Clear architecture and measurement framework needed across all brands 
                to ensure proper performance tracking and optimization.
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="font-medium text-gray-900 mb-2">Reporting Framework</div>
              <div className="text-sm text-gray-600">
                Comprehensive reporting framework required to demonstrate value and enable 
                data-driven optimization across channels.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workstreams */}
      {Object.entries(workstreams).map(([key, stream]) => (
        <Card key={key}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-gray-600" />
                <CardTitle className="text-xl font-medium">{stream.title}</CardTitle>
              </div>
              <div className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                {stream.phase}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {stream.initiatives.map((initiative, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex flex-col gap-4 mb-4">
                    <div>
                      <div className="font-medium text-gray-900">{initiative.title}</div>
                      <div className="text-sm text-gray-600 mt-1">{initiative.description}</div>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    {initiative.deliverables.map((deliverable, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Risk Factors */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <CardTitle className="text-xl font-medium">Risk Factors</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="font-medium text-amber-900">Data Quality Dependencies</div>
              <div className="text-sm text-amber-700 mt-1">
                Clean data required for proper performance measurement and optimization.
                Any delays in data quality remediation will impact subsequent workstreams.
              </div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="font-medium text-amber-900">Resource Availability</div>
              <div className="text-sm text-amber-700 mt-1">
                Multiple concurrent workstreams require dedicated resources.
                Resource constraints may impact delivery timeline.
              </div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="font-medium text-amber-900">Platform Integration</div>
              <div className="text-sm text-amber-700 mt-1">
                Complex integration requirements across multiple platforms.
                Technical limitations may impact implementation approach.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgencyStabilization;