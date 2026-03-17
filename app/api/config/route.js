// Runtime config from server env (Azure can set API_URL, APP_* without NEXT_PUBLIC_)
export async function GET() {
  return Response.json({
    apiUrl: process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || '',
    appProducerUrl: process.env.APP_PRODUCER_URL || process.env.NEXT_PUBLIC_APP_PRODUCER_URL || '',
    appTruckUrl: process.env.APP_TRUCK_URL || process.env.NEXT_PUBLIC_APP_TRUCK_URL || '',
    appHubUrl: process.env.APP_HUB_URL || process.env.NEXT_PUBLIC_APP_HUB_URL || '',
    appCourierUrl: process.env.APP_COURIER_URL || process.env.NEXT_PUBLIC_APP_COURIER_URL || '',
    appTrackingUrl: process.env.APP_TRACKING_URL || process.env.NEXT_PUBLIC_APP_TRACKING_URL || '',
  });
}
