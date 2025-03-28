import axios from "axios";
import "dotenv/config";

{/* https://dev.twitch.tv/docs/api/reference/#get-users */ }

// GET user by twitch id
export async function getUserById(userId: number) {
  const userResponse = await axios.get(`https://api.twitch.tv/helix/users?id=${userId}`, {
    headers: {
      'Authorization': `Bearer ${process.env.APP_ACCESS_TOKEN}`,
      'client-id': `${process.env.TWITCH_CLIENT_ID}`
    }
  });
  console.log(userResponse.data);
};

const userId = 1285219581; // set twitch user id to find

getUserById(userId)
  .then(() => process.exit())
  .catch(err => console.error(err));

// GET user by twitch username / login
// export async function getUserByLogin(username: string) {
//   const userResponse = await axios.get(`https://api.twitch.tv/helix/users?login=${username}`, {
//     headers: {
//       'Authorization': `Bearer ${process.env.APP_ACCESS_TOKEN}`,
//       'client-id': `${process.env.TWITCH_CLIENT_ID}`
//     }
//   });
//   console.log(userResponse.data);
// };

// const username = 'zachimxtest'; // set twitch user id to find

// getUserByLogin(username)
//   .then(() => process.exit())
//   .catch(err => console.error(err));