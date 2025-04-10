/**
 * @file src/components/ui/upload-button.tsx
 * File upload button component
 */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UploadCloud, Loader2 } from "lucide-react";

interface UploadButtonProps {
  // Client-side props
  endpoint: string;
  onClientUploadComplete?: (
    res?: Array<{ url: string; name: string; size: number }>
  ) => void;
  onUploadError?: (error: Error) => void;
  // File constraints
  maxSize?: number; // in MB
  allowedFileTypes?: string[];
}

export const UploadButton = ({
  endpoint,
  onClientUploadComplete,
  onUploadError,
  maxSize = 5, // 5MB default
  allowedFileTypes,
}: UploadButtonProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // This is a mock implementation - in a real app, you would use a real
  // upload service like UploadThing or direct upload to Supabase storage
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size exceeds ${maxSize}MB limit`);
      if (onUploadError)
        onUploadError(new Error(`File size exceeds ${maxSize}MB limit`));
      return;
    }

    // Validate file type if specified
    if (allowedFileTypes && allowedFileTypes.length > 0) {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      const fileType = `.${fileExtension}`;
      if (
        !allowedFileTypes.includes(fileType) &&
        !allowedFileTypes.includes(file.type)
      ) {
        setError(
          `File type not allowed. Allowed types: ${allowedFileTypes.join(", ")}`
        );
        if (onUploadError) onUploadError(new Error(`File type not allowed`));
        return;
      }
    }

    setIsUploading(true);
    setError(null);

    try {
      // Simulate upload - in a real app, this would be an actual upload
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Generate a mock URL
      const mockResult = [
        {
          url: `https://storage.pharmart.app/${endpoint}/${file.name}`,
          name: file.name,
          size: file.size,
        },
      ];

      if (onClientUploadComplete) onClientUploadComplete(mockResult);
    } catch (err) {
      console.error("Upload error:", err);
      setError("Failed to upload file");
      if (onUploadError) onUploadError(err as Error);
    } finally {
      setIsUploading(false);
      // Reset the input
      e.target.value = "";
    }
  };

  return (
    <div>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="relative"
        disabled={isUploading}
      >
        {isUploading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Uploading...
          </>
        ) : (
          <>
            <UploadCloud className="mr-2 h-4 w-4" />
            Upload File
          </>
        )}
        <input
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleFileChange}
          disabled={isUploading}
          accept={allowedFileTypes?.join(",")}
        />
      </Button>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

UploadButton.displayName = "UploadButton";
