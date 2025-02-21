import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle2, Settings, RefreshCw } from 'lucide-react';

const DataQualityFramework: React.FC = () => {
  const frameworkComponents = {
    configuration: {
      title: "Configuration Standards",
      icon: Settings,
      elements: [
        {
          area: "Bot Filtering",
          requirements: [
            "IP-based filter configuration",
            "User agent pattern detection",
            "Known bot exclusion lists",
            "Custom filter rules for suspicious behavior"
          ],
          validation: [
            "Filter effectiveness monitoring",
            "False positive checking",
            "Traffic pattern analysis",
            "Regular rule updates"
          ]
        },
        {
          area: "Conversion Tracking",
          requirements: [
            "Event tracking configuration",
            "Goal setup across properties",
            "E-commerce tracking implementation",
            "Cross-domain tracking setup"
          ],
          validation: [
            "End-to-end conversion path testing",
            "Revenue data reconciliation",
            "Goal completion verification",
            "Cross-platform data consistency"
          ]
        },
        {
          area: "Attribution Setup",
          requirements: [
            "Channel grouping configuration",
            "Custom channel definitions",
            "Source/medium mapping",
            "Campaign parameter standards"
          ],
          validation: [
            "Attribution model testing",
            "Channel classification accuracy",
            "Parameter validation checks",
            "Data import verification"
          ]
        }
      ]
    },
    validation: {
      title: "Quality Control Protocols",
      icon: Shield,
      elements: [
        {
          area: "Weekly Checks",
          requirements: [
            "Traffic quality assessment",
            "Conversion path validation",
            "Revenue data reconciliation",
            "Lead source verification"
          ],
          validation: [
            "Automated quality reports",
            "Manual spot checks",
            "Cross-platform comparison",
            "Anomaly investigation"
          ]
        },
        {
          area: "Platform Integration",
          requirements: [
            "GA4 - Magento sync check",
            "Salesforce data validation",
            "Ad platform data verification",
            "Cross-domain tracking confirmation"
          ],
          validation: [
            "Data flow monitoring",
            "Integration health checks",
            "Error log review",
            "Sync status verification"
          ]
        },
        {
          area: "Data Accuracy",
          requirements: [
            "Revenue data validation",
            "Lead tracking verification",
            "User behavior consistency",
            "Campaign data integrity"
          ],
          validation: [
            "Data sampling analysis",
            "Statistical validation",
            "Trend analysis",
            "Outlier detection"
          ]
        }
      ]
    },
    monitoring: {
      title: "Ongoing Monitoring System",
      icon: RefreshCw,
      elements: [
        {
          area: "Automated Monitoring",
          requirements: [
            "Real-time data quality alerts",
            "Automated validation checks",
            "Performance threshold monitoring",
            "System health checks"
          ],
          validation: [
            "Alert system testing",
            "Threshold validation",
            "Response time monitoring",
            "System reliability checks"
          ]
        },
        {
          area: "Manual Reviews",
          requirements: [
            "Weekly data quality audits",
            "Monthly performance reviews",
            "Quarterly system audits",
            "Annual configuration review"
          ],
          validation: [
            "Audit checklist completion",
            "Review documentation",
            "Finding documentation",
            "Action item tracking"
          ]
        },
        {
          area: "Documentation",
          requirements: [
            "Configuration documentation",
            "Process documentation",
            "Issue resolution guides",
            "Training materials"
          ],
          validation: [
            "Document accuracy check",
            "Regular updates verification",
            "Accessibility confirmation",
            "Comprehension testing"
          ]
        }
      ]
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-gray-600" />
            <CardTitle className="text-xl font-medium">Data Quality Framework</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="font-medium text-gray-900 mb-2">Framework Purpose</div>
              <div className="text-sm text-gray-600">
                Establish comprehensive data quality standards and monitoring protocols to ensure
                accurate performance measurement and optimization capabilities.
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="font-medium text-gray-900 mb-2">Current Challenges</div>
              <div className="text-sm text-gray-600">
                Address existing data quality issues including bot traffic, incomplete conversion
                tracking, and inconsistent campaign parameters.
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="font-medium text-gray-900 mb-2">Expected Outcomes</div>
              <div className="text-sm text-gray-600">
                Clean, consistent, and reliable data across all platforms enabling confident
                decision-making and optimization.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Framework Components */}
      {Object.entries(frameworkComponents).map(([key, component]) => (
        <Card key={key}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <component.icon className="w-5 h-5 text-gray-600" />
              <CardTitle className="text-xl font-medium">{component.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {component.elements.map((element, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium text-gray-900 mb-4">{element.area}</div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-medium text-gray-700 mb-2">Requirements</div>
                      <div className="space-y-2">
                        {element.requirements.map((req, reqIdx) => (
                          <div key={reqIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 mb-2">Validation</div>
                      <div className="space-y-2">
                        {element.validation.map((val, valIdx) => (
                          <div key={valIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Implementation Considerations */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <CardTitle className="text-xl font-medium">Implementation Considerations</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="font-medium text-amber-900">Resource Requirements</div>
              <div className="text-sm text-amber-700 mt-1">
                Dedicated analytics resources required for implementation and ongoing monitoring.
                Consider training needs for team members.
              </div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="font-medium text-amber-900">Platform Dependencies</div>
              <div className="text-sm text-amber-700 mt-1">
                Implementation success dependent on platform access and technical capabilities.
                Early platform assessment recommended.
              </div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="font-medium text-amber-900">Timeline Impact</div>
              <div className="text-sm text-amber-700 mt-1">
                Data quality improvements may impact short-term reporting consistency.
                Clear communication plan needed for stakeholders.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataQualityFramework;