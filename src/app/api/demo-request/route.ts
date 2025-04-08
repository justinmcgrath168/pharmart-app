/**
 * @file app/api/demo-request/route.ts
 * @description API route for handling demo request submissions
 */
/**
import { NextRequest, NextResponse } from "next/server";
import { submitDemoRequest, DemoRequestData } from "@/lib/services/demoRequest";
import { z } from "zod";

// Validation schema
const demoRequestSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters." }),
  pharmacySize: z.string({ required_error: "Please select pharmacy size." }),
  interests: z
    .array(z.string())
    .nonempty({ message: "Please select at least one product." }),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input
    const result = demoRequestSchema.safeParse(body);

    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Submit demo request
    const data = result.data as DemoRequestData;
    const response = await submitDemoRequest(data);

    if (!response.success) {
      return NextResponse.json(
        {
          success: false,
          error: response.error,
        },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Demo request submitted successfully",
    });
  } catch (error) {
    console.error("Error in demo request API route:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
 */
