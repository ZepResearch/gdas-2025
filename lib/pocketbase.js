import PocketBase from "pocketbase"

// Create a singleton PocketBase instance
const pb = new PocketBase("http://gdas-pocketbase-289683-194-164-149-251.traefik.me")

// Disable auto cancellation for server-side requests
pb.autoCancellation(false)

export default pb
export function getPocketBaseClient() {
  // For server-side rendering, always create a fresh instance
  if (typeof window === "undefined") {
    const pb = new PocketBase("https://zep-research.pockethost.io")
    pb.autoCancellation(false)
    return pb
  }
}
export async function getJournals() {
  try {
    const pb = getPocketBaseClient()

    // Get the start and end dates for 2025
    const startDate = '2025-01-01 00:00:00'
    const endDate = '2025-12-31 23:59:59'

    // Fetch journals from 2025 only, sorted by creation date (newest first)
    const records = await pb.collection("Journals").getFullList({
      sort: "-created",
      filter: `created >= '${startDate}' && created <= '${endDate}'`
    })

    return records
  } catch (error) {
    console.error("Error fetching journals:", error)
    return []
  }
}

export async function getJournalById(id) {
  try {
    const pb = getPocketBaseClient()
    const record = await pb.collection("Journals").getOne(id)
    return record
  } catch (error) {
    console.error(`Error fetching journal with ID ${id}:`, error)
    return null
  }
}
// Type definitions for better type safety


// Utility function to fetch timeline data with error handling
export async function fetchTimelineData() {
  try {
    const records = await pb.collection("ICAIR_dates").getFullList({
      sort: "created",
      
      // Add any additional filters if needed
      // filter: 'status = "active"',
    })

    // Validate and sanitize data
    return records.filter((record) => record.title && record.date && record.description)
  } catch (error) {
    console.error("PocketBase fetch error:", error)
    throw new Error("Failed to fetch timeline data")
  }
}

// Function to fetch a single timeline item
export async function fetchTimelineItem(id) {
  try {
    const record = await pb.collection("ICAIR_dates").getOne(id)
    return record
  } catch (error) {
    console.error("Failed to fetch timeline item:", error)
    return null
  }
}
