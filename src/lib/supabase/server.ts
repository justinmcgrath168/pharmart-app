/**
 * @file lib/supabase/server.ts
 * @description Supabase client for server-side usage
 */

// import { cookies } from 'next/headers'
// import { createServerClient } from '@supabase/ssr'

// export const createClient = () => {
//   const cookieStore = cookies()

//   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
//   const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

//   if (!supabaseUrl || !supabaseAnonKey) {
//     throw new Error('Missing Supabase environment variables')
//   }

//   return createServerClient(
//     supabaseUrl,
//     supabaseAnonKey,
//     {
//       cookies: {
//         get(name) {
//           return cookieStore.get(name)?.value
//         },
//         set(name, value, options) {
//           cookieStore.set({ name, value, ...options })
//         },
//         remove(name, options) {
//           cookieStore.set({ name, value: '', ...options })
//         },
//       },
//     }
//   )
// }
