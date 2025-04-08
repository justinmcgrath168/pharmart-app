/**
 * @file lib/services/demoRequest.ts
 * @description Service for handling demo request submissions
 */

/**
import { createClient } from '@/lib/supabase/server'

export interface DemoRequestData {
  name: string
  email: string
  phone: string
  company: string
  pharmacySize: string
  interests: string[]
}

export async function submitDemoRequest(data: DemoRequestData) {
  try {
    const supabase = createClient()
    
    const { error } = await supabase
      .from('demo_requests')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          pharmacy_size: data.pharmacySize,
          interests: data.interests,
          status: 'new',
          created_at: new Date().toISOString(),
        },
      ])
    
    if (error) {
      throw error
    }
    
    // Send notification email (this would be implemented with a service like SendGrid)
    await sendNotificationEmail(data)
    
    return { success: true }
  } catch (error) {
    console.error('Error submitting demo request:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}

// This would be implemented with an email service like SendGrid or Mailchimp
async function sendNotificationEmail(data: DemoRequestData) {
  // Example implementation (would be replaced with actual email service)
  console.log('Sending notification email for demo request:', data)
  
  // In a real implementation, this would use an email service API
  // Example with SendGrid:
  // const msg = {
  //   to: 'sales@pharmart.com',
  //   from: 'noreply@pharmart.com',
  //   subject: 'New Demo Request',
  //   text: `New demo request from ${data.name} at ${data.company}`,
  //   html: `<p>New demo request details:</p>
  //          <ul>
  //            <li>Name: ${data.name}</li>
  //            <li>Email: ${data.email}</li>
  //            <li>Phone: ${data.phone}</li>
  //            <li>Company: ${data.company}</li>
  //            <li>Pharmacy Size: ${data.pharmacySize}</li>
  //            <li>Interests: ${data.interests.join(', ')}</li>
  //          </ul>`,
  // }
  // await sgMail.send(msg)
  
  return true
}
   */
