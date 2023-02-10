
import { endpoint, requireAuthentication, sendError } from "utils/endpoint";
// .use(requireAuthentication)

import { getApod } from "models/APODModel";

export default endpoint()
  .get(async (req, res) => {
    console.log('🚀 ~ req', req);
    const apiKey = req.apiKey
    console.log('🚀 ~ apiKey', apiKey);
    const apod = await getApod(apiKey!)
    if (apod.status !== 200) return sendError(req, res, `There an error. Status: ${apod.status}`);

    return res.status(200).json(apod.body); 
  });
