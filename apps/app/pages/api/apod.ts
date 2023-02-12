import { endpoint, requireAuthentication, sendError } from 'utils/endpoint';
// .use(requireAuthentication)

import { handleApodByDate } from 'models/APODModel';

export default endpoint().get(async (req, res) => {
  const date = req.query.date as string;
  try {
    const apod = await handleApodByDate(date);
    console.log('🚀 ~ apod', apod);
    if (!apod) return sendError(req, res, 'APOD not found');
    return res.status(200).json(apod);
  } catch (ex) {
    return sendError(req, res, 'Internal server error');
  }
});
