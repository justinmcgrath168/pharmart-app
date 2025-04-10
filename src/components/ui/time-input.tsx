/**
 * @file src/components/ui/time-input.tsx
 * Time input component for selecting hours and minutes
 */
"use client";

import { useState, useEffect, forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface TimeInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value?: string;
  onChange?: (value: string) => void;
}

export const TimeInput = forwardRef<HTMLInputElement, TimeInputProps>(
  ({ className, value = "", onChange, disabled, ...props }, ref) => {
    const [hours, setHours] = useState<string>("");
    const [minutes, setMinutes] = useState<string>("");

    // Parse initial value
    useEffect(() => {
      if (value) {
        const [h, m] = value.split(":");
        setHours(h || "");
        setMinutes(m || "");
      }
    }, [value]);

    // Handle hours change
    const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newHours = e.target.value.replace(/[^\d]/g, "");
      if (newHours.length > 2) newHours = newHours.slice(0, 2);

      // Ensure hours is between 0-23
      if (newHours !== "" && parseInt(newHours) > 23) {
        newHours = "23";
      }

      setHours(newHours);
      updateValue(newHours, minutes);
    };

    // Handle minutes change
    const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newMinutes = e.target.value.replace(/[^\d]/g, "");
      if (newMinutes.length > 2) newMinutes = newMinutes.slice(0, 2);

      // Ensure minutes is between 0-59
      if (newMinutes !== "" && parseInt(newMinutes) > 59) {
        newMinutes = "59";
      }

      setMinutes(newMinutes);
      updateValue(hours, newMinutes);
    };

    // Update the overall value and trigger onChange
    const updateValue = (h: string, m: string) => {
      if (h && m && onChange) {
        // Format as HH:MM
        const formattedHours = h.padStart(2, "0");
        const formattedMinutes = m.padStart(2, "0");
        onChange(`${formattedHours}:${formattedMinutes}`);
      }
    };

    // Handle focus on minutes when hours are filled
    const handleHoursKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Tab" && !e.shiftKey) {
        // Don't prevent default tab behavior
      } else if (
        e.key === "ArrowRight" &&
        e.currentTarget.selectionStart === e.currentTarget.value.length
      ) {
        e.preventDefault();
        const minutesInput = e.currentTarget.nextElementSibling
          ?.nextElementSibling as HTMLInputElement;
        if (minutesInput) minutesInput.focus();
      }
    };

    // Handle focus on hours when tabbing backward from minutes
    const handleMinutesKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Tab" && e.shiftKey) {
        // Don't prevent default tab behavior
      } else if (
        e.key === "ArrowLeft" &&
        e.currentTarget.selectionStart === 0
      ) {
        e.preventDefault();
        const hoursInput = e.currentTarget.previousElementSibling
          ?.previousElementSibling as HTMLInputElement;
        if (hoursInput) hoursInput.focus();
      }
    };

    return (
      <div className={cn("flex items-center", className)}>
        <Input
          ref={ref}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="HH"
          value={hours}
          onChange={handleHoursChange}
          onKeyDown={handleHoursKeyDown}
          className="w-14 text-center"
          disabled={disabled}
          {...props}
        />
        <span className="mx-1 text-muted-foreground">:</span>
        <Input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="MM"
          value={minutes}
          onChange={handleMinutesChange}
          onKeyDown={handleMinutesKeyDown}
          className="w-14 text-center"
          disabled={disabled}
        />
      </div>
    );
  }
);

TimeInput.displayName = "TimeInput";
