import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle2, BarChart2, Target, Calendar } from 'lucide-react';

const ProgressMeasurement: React.FC = () => {
  const executionMetrics = {
    analytics: {
      title: "Analytics Implementation",
      weight: 40,
      milestones: [
        {
          task: "Bot Filtering Implementation",
          weight: 25,
          checkpoints: [
            "Filter configuration complete",
            "Testing validation complete",
            "Documentation delivered",
            "Live implementation verified"
          ]
        },
        {
          task: "Cross-Platform Tracking",
          weight: 45,
          checkpoints: [
            "GA4 configuration optimized",
            "Magento integration complete",
            "Salesforce tracking implemented",
            "Cross-platform validation complete"
          ]
        },
        {
          task: "Attribution Setup",
          weight: 30,
          checkpoints: [
            "Model configuration complete",
            "Lead source tracking active",
            "Revenue attribution validated",
            "Reporting templates created"
          ]
        }
      ]
    },
    campaigns: {
      title: "Campaign Optimization",
      weight: 35,
      milestones: [
        {
          task: "Campaign Architecture",
          weight: 40,
          checkpoints: [
            "Structure documentation complete",
            "Brand hierarchy established",
            "Budget framework defined",
            "Implementation verified"
          ]
        },
        {
          task: "Performance Optimization",
          weight: 35,
          checkpoints: [
            "Branded search revised",
            "Weekend campaigns active",
            "Budget reallocation complete",
            "Performance tracking live"
          ]
        },
        {
          task: "LinkedIn Exploration",
          weight: 25,
          checkpoints: [
            "Strategy framework defined",
            "Audience analysis complete",
            "Test campaign structured",
            "Measurement plan created"
          ]
        }
      ]
    },
    reporting: {
      title: "Reporting Framework",
      weight: 25,
      milestones: [
        {
          task: "Dashboard Development",
          weight: 40,
          checkpoints: [
            "KPI framework defined",
            "Templates created",
            "Automation configured",
            "Stakeholder views live"
          ]
        },
        {
          task: "Performance Reporting",
          weight: 35,
          checkpoints: [
            "Brand reporting active",
            "Revenue tracking live",
            "Lead reporting configured",
            "Attribution visible"
          ]
        },
        {
          task: "Executive Insights",
          weight: 25,
          checkpoints: [
            "Strategic dashboard live",
            "ROI visualization active",
            "Trend analysis enabled",
            "Action recommendations flowing"
          ]
        }
      ]
    }
  };

  const performanceMetrics = {
    revenue: {
      title: "Revenue Performance",
      metrics: [
        {
          name: "E-commerce Revenue",
          definition: "Total revenue from digital channels",
          frequency: "Weekly",
          source: "GA4 + Magento"
        },
        {
          name: "Average Order Value",
          definition: "Average revenue per transaction",
          frequency: "Weekly",
          source: "GA4 + Magento"
        },
        {
          name: "Revenue by Brand",
          definition: "Revenue split across active brands",
          frequency: "Weekly",
          source: "GA4 + Magento"
        }
      ]
    },
    acquisition: {
      title: "Lead Generation",
      metrics: [
        {
          name: "Lead Volume",
          definition: "Total qualified leads generated",
          frequency: "Weekly",
          source: "Salesforce"
        },
        {
          name: "Lead Source Attribution",
          definition: "Lead distribution by channel",
          frequency: "Weekly",
          source: "GA4 + Salesforce"
        },
        {
          name: "Cost per Lead",
          definition: "Investment required per lead",
          frequency: "Weekly",
          source: "GA4 + Ad Platforms"
        }
      ]
    },
    efficiency: {
      title: "Channel Efficiency",
      metrics: [
        {
          name: "Channel ROAS",
          definition: "Return on ad spend by channel",
          frequency: "Weekly",
          source: "GA4 + Ad Platforms"
        },
        {
          name: "Conversion Rate",
          definition: "Leads/sales per session",
          frequency: "Weekly",
          source: "GA4"
        },
        {
          name: "Cost per Conversion",
          definition: "Investment per conversion",
          frequency: "Weekly",
          source: "GA4 + Ad Platforms"
        }
      ]
    }
  };

  return (
    <div className="space-y-6">
      {/* Execution Metrics */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-gray-600" />
            <CardTitle className="text-xl font-medium">Execution Metrics</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {Object.entries(executionMetrics).map(([key, section]) => (
              <div key={key} className="bg-white rounded-lg border p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-medium text-gray-900">{section.title}</div>
                  <div className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    Weight: {section.weight}%
                  </div>
                </div>
                <div className="space-y-4">
                  {section.milestones.map((milestone, idx) => (
                    <div key={idx} className="border-t pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">{milestone.task}</div>
                        <div className="text-sm text-gray-600">
                          Weight: {milestone.weight}%
                        </div>
                      </div>
                      <div className="grid gap-2">
                        {milestone.checkpoints.map((checkpoint, cpIdx) => (
                          <div key={cpIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="text-gray-400 h-4 w-4" />
                            <span className="text-sm text-gray-600">{checkpoint}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Business Performance Metrics */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-gray-600" />
            <CardTitle className="text-xl font-medium">Business Performance Metrics</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {Object.entries(performanceMetrics).map(([key, section]) => (
              <div key={key} className="bg-white rounded-lg border p-4">
                <div className="font-medium text-gray-900 mb-4">{section.title}</div>
                <div className="space-y-4">
                  {section.metrics.map((metric, idx) => (
                    <div key={idx} className="border-t pt-4">
                      <div className="grid gap-2">
                        <div className="font-medium text-gray-800">{metric.name}</div>
                        <div className="text-sm text-gray-600">{metric.definition}</div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">
                            Frequency: {metric.frequency}
                          </span>
                          <span className="text-gray-500">
                            Source: {metric.source}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Review Protocol */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-600" />
            <CardTitle className="text-xl font-medium">Review Protocol</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">Weekly Review Protocol</h3>
            <div className="space-y-2 text-sm text-blue-800">
              <p>• Implementation progress review every Monday</p>
              <p>• Performance metric updates every Friday</p>
              <p>• Stakeholder updates distributed end-of-week</p>
              <p>• Action items documented and assigned within 24 hours</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressMeasurement;