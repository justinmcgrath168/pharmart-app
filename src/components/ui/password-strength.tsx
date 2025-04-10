/**
 * @file src/components/ui/password-strength.tsx
 * Password strength indicator component
 */
"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle } from "lucide-react";

interface PasswordStrengthIndicatorProps {
  password: string;
}

export const PasswordStrengthIndicator = ({
  password,
}: PasswordStrengthIndicatorProps) => {
  const [strength, setStrength] = useState(0);
  const [checks, setChecks] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  useEffect(() => {
    const newChecks = {
      minLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[^A-Za-z0-9]/.test(password),
    };

    setChecks(newChecks);

    // Calculate strength based on checks
    const trueChecks = Object.values(newChecks).filter(Boolean).length;
    setStrength((trueChecks / 5) * 100);
  }, [password]);

  // Get color based on strength
  const getStrengthColor = () => {
    if (strength < 40) return "bg-red-600";
    if (strength < 80) return "bg-yellow-500";
    return "bg-green-500";
  };

  // Get label based on strength
  const getStrengthLabel = () => {
    if (strength < 40) return "Weak";
    if (strength < 80) return "Moderate";
    return "Strong";
  };

  return (
    <div className="space-y-2 mt-2">
      <div className="flex justify-between items-center">
        <Progress value={strength} className={`h-2 ${getStrengthColor()}`} />
        <span className="text-xs ml-2 text-muted-foreground">
          {getStrengthLabel()}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
        <div className="flex items-center gap-1 text-sm">
          {checks.minLength ? (
            <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <XCircle className="h-3.5 w-3.5 text-muted-foreground" />
          )}
          <span
            className={
              checks.minLength ? "text-green-600" : "text-muted-foreground"
            }
          >
            8+ characters
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm">
          {checks.hasUpperCase ? (
            <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <XCircle className="h-3.5 w-3.5 text-muted-foreground" />
          )}
          <span
            className={
              checks.hasUpperCase ? "text-green-600" : "text-muted-foreground"
            }
          >
            Uppercase letter
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm">
          {checks.hasLowerCase ? (
            <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <XCircle className="h-3.5 w-3.5 text-muted-foreground" />
          )}
          <span
            className={
              checks.hasLowerCase ? "text-green-600" : "text-muted-foreground"
            }
          >
            Lowercase letter
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm">
          {checks.hasNumber ? (
            <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <XCircle className="h-3.5 w-3.5 text-muted-foreground" />
          )}
          <span
            className={
              checks.hasNumber ? "text-green-600" : "text-muted-foreground"
            }
          >
            Number
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm">
          {checks.hasSpecialChar ? (
            <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <XCircle className="h-3.5 w-3.5 text-muted-foreground" />
          )}
          <span
            className={
              checks.hasSpecialChar ? "text-green-600" : "text-muted-foreground"
            }
          >
            Special character
          </span>
        </div>
      </div>
    </div>
  );
};

PasswordStrengthIndicator.displayName = "PasswordStrengthIndicator";
