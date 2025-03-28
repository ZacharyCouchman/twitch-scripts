import axios from "axios";
import "dotenv/config";

{/* https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#client-credentials-grant-flow */ }

// GET App Access Token from Twitch
export async function getAppAccessToken() {
  const clientCredentials = await axios.post(`https://id.twitch.tv/oauth2/token`, {
    headers: {
      'client_id': `${process.env.TWITCH_CLIENT_ID}`,
      'client_secret': `${process.env.TWITCH_CLIENT_SECRET}`,
      'grant_type': 'client_credentials'
    }
  });
  console.log(clientCredentials.data);

  return clientCredentials.data;
};

getAppAccessToken()
  .then(() => process.exit())
  .catch(err => console.error(err));