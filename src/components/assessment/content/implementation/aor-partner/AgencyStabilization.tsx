import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, CheckCircle2, Calendar, TrendingUp, BarChart2, FileText } from 'lucide-react';

const AgencyStabilization = () => {
  const workstreams = {
    measurement: {
      title: "Analytics & Measurement Framework",
      phase: "Week 1-2 (2/17 - 3/1)",
      initiatives: [
        {
          title: "Data Quality Remediation",
          description: "Deploy proper analytics filtering and establish clean reporting baseline",
          deliverables: [
            "Bot filtering implementation",
            "Proper conversion tracking setup",
            "Data quality validation framework",
            "Clean reporting templates"
          ],
          owner: "AWG Analytics Team",
          dependencies: "Access to all brand properties"
        },
        {
          title: "Cross-Platform Integration",
          description: "Establish proper tracking across Magento, Salesforce, and GA4",
          deliverables: [
            "Integration requirements documentation",
            "Tracking implementation plan",
            "Testing protocol development",
            "Performance validation framework"
          ],
          owner: "AWG Technical Team",
          dependencies: "Platform documentation"
        },
        {
          title: "Attribution Modeling",
          description: "Implement comprehensive attribution across channels",
          deliverables: [
            "Attribution model definition",
            "Cross-channel tracking setup",
            "Lead source documentation",
            "Revenue tracking implementation"
          ],
          owner: "AWG Analytics Lead",
          dependencies: "Clean data baseline"
        }
      ]
    },
    campaigns: {
      title: "Campaign Architecture",
      phase: "Week 2-3 (3/4 - 3/15)",
      initiatives: [
        {
          title: "Campaign Structure",
          description: "Implement proper campaign architecture across all brands",
          deliverables: [
            "Campaign naming convention",
            "Budget allocation framework",
            "Performance tracking setup",
            "Optimization protocol"
          ],
          owner: "AWG Campaign Team",
          dependencies: "Brand guidelines"
        },
        {
          title: "Performance Optimization",
          description: "Address immediate campaign performance issues",
          deliverables: [
            "Branded search restructure",
            "Weekend campaign activation",
            "Budget reallocation plan",
            "Performance monitoring setup"
          ],
          owner: "AWG Performance Team",
          dependencies: "Clean analytics data"
        },
        {
          title: "Channel Strategy",
          description: "Develop comprehensive channel strategy",
          deliverables: [
            "Channel assessment",
            "Performance benchmarks",
            "Growth opportunities",
            "Investment framework"
          ],
          owner: "AWG Strategy Team",
          dependencies: "Performance baseline"
        }
      ]
    },
    reporting: {
      title: "Reporting Framework",
      phase: "Week 3-4 (3/18 - 3/29)",
      initiatives: [
        {
          title: "Dashboard Development",
          description: "Create comprehensive reporting dashboard suite",
          deliverables: [
            "KPI framework definition",
            "Dashboard templates",
            "Automated reporting setup",
            "Stakeholder views"
          ],
          owner: "AWG Analytics Team",
          dependencies: "Clean data streams"
        },
        {
          title: "Performance Reporting",
          description: "Establish regular performance reporting cadence",
          deliverables: [
            "Weekly report template",
            "Monthly deep dive format",
            "Quarterly review framework",
            "Annual planning template"
          ],
          owner: "AWG Account Team",
          dependencies: "Dashboard completion"
        },
        {
          title: "Optimization Framework",
          description: "Develop data-driven optimization process",
          deliverables: [
            "Optimization protocol",
            "Testing framework",
            "Performance triggers",
            "Action planning template"
          ],
          owner: "AWG Performance Team",
          dependencies: "Reporting framework"
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
            <CardTitle className="text-xl font-medium">Agency Stabilization Plan</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="font-medium text-gray-900 mb-2">Analytics Foundation</div>
              <div className="text-sm text-gray-600">
                Proper implementation of tracking and filtering required to enable accurate 
                performance measurement and optimization.
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="font-medium text-gray-900 mb-2">Campaign Structure</div>
              <div className="text-sm text-gray-600">
                Clear campaign architecture and measurement framework needed across all brands 
                to ensure proper performance tracking and optimization.
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="font-medium text-gray-900 mb-2">Reporting Integration</div>
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
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="font-medium text-gray-900">{initiative.title}</div>
                      <div className="text-sm text-gray-600 mt-1">{initiative.description}</div>
                    </div>
                    <div className="flex flex-col gap-2 text-sm min-w-[200px]">
                      <div className="bg-white p-2 rounded">
                        <span className="text-gray-500">Owner:</span>
                        <span className="ml-2 text-gray-900">{initiative.owner}</span>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <span className="text-gray-500">Dependencies:</span>
                        <span className="ml-2 text-gray-900">{initiative.dependencies}</span>
                      </div>
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