import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";

interface HealthIssue {
  type: string;
  severity: "low" | "medium" | "high";
  description: string;
}

interface HealthAnalysis {
  overallHealth: "healthy" | "moderate" | "poor";
  healthScore: number;
  issues: HealthIssue[];
  recommendations: string[];
  immediateActions: string[];
}

interface PlantHealthProps {
  analysis: HealthAnalysis | null;
  isLoading: boolean;
}

export function PlantHealth({ analysis, isLoading }: PlantHealthProps) {
  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />
              <p>Analyzing plant health...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!analysis) return null;

  const severityColor = {
    healthy: "text-green-500",
    moderate: "text-yellow-500",
    poor: "text-red-500",
  };

  const severityIcon = {
    healthy: <CheckCircle2 className="h-5 w-5 text-green-500" />,
    moderate: <AlertCircle className="h-5 w-5 text-yellow-500" />,
    poor: <XCircle className="h-5 w-5 text-red-500" />,
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            {severityIcon[analysis.overallHealth]}
            <h3 className="text-lg font-semibold capitalize">
              {analysis.overallHealth} Health Status
            </h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Health Score</span>
              <span>{analysis.healthScore}%</span>
            </div>
            <Progress value={analysis.healthScore} className="h-2" />
          </div>
        </div>

        {analysis.issues.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium">Identified Issues</h4>
            <div className="space-y-2">
              {analysis.issues.map((issue, index) => (
                <Alert key={index} variant={issue.severity === "high" ? "destructive" : "default"}>
                  <AlertDescription className="flex justify-between items-center">
                    <span>{issue.description}</span>
                    <span className="text-sm capitalize">{issue.severity} severity</span>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
          </div>
        )}

        {analysis.recommendations.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium">Recommendations</h4>
            <ul className="space-y-2 list-disc pl-4">
              {analysis.recommendations.map((rec, index) => (
                <li key={index} className="text-muted-foreground">
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        )}

        {analysis.immediateActions.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium">Immediate Actions Needed</h4>
            <ul className="space-y-2 list-disc pl-4">
              {analysis.immediateActions.map((action, index) => (
                <li key={index} className="text-muted-foreground">
                  {action}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
