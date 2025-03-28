import axios from "axios";
import "dotenv/config";
{/** https://dev.twitch.tv/docs/api/reference/#get-drops-entitlements */ }

export async function getDropsEntitlements(userId?: number, gameId?: number) {
  let dropsUrl = "https://api.twitch.tv/helix/entitlements/drops";

  if (userId && gameId) {
    dropsUrl += `?user_id=${userId}&game_id=${gameId}`;
  } else if (userId) {
    dropsUrl += `?user_id=${userId}`
  } else if (gameId) {
    dropsUrl += `?game_id=${gameId}`;
  }

  const dropsEntitlements = await axios.get(dropsUrl, {
    headers: {
      'Authorization': `Bearer ${process.env.APP_ACCESS_TOKEN}`,
      'client-id': `${process.env.TWITCH_CLIENT_ID}`
    }
  });

  console.log(dropsEntitlements.data);
  return dropsEntitlements;
}

const userId = 1285219581;
const gameId = 879360720;

getDropsEntitlements(userId, gameId)
  .then(() => process.exit())
  .catch(err => console.error(err))