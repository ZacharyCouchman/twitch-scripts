import axios from "axios";
import "dotenv/config";

{/** https://dev.twitch.tv/docs/api/reference/#update-drops-entitlements */ }

export async function updateTwitchEntitlement(twitchId: number, entitlementIds: string[]) {
  const updateEntitlementResult = await axios.patch(`https://api.twitch.tv/helix/entitlements/drops`, {
    headers: {
      'client_id': `${process.env.TWITCH_CLIENT_ID}`,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.APP_ACCESS_TOKEN}`
    },
    body: {
      'fulfillment_status': 'FULFILLED',
      'entitlement_ids': entitlementIds
    }
  });
  console.log(updateEntitlementResult.data);

  return updateEntitlementResult.data;
};

// updateTwitchEntitlement()
//   .then(() => process.exit())
//   .catch(err => console.error(err))