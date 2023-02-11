import { endpoint, requireAuthentication, sendError } from 'utils/endpoint';
// .use(requireAuthentication)

import { handleApodByDate } from 'models/APODModel';
import moment from 'moment';

export default endpoint().get(async (req, res) => {
  const today = moment().format('YYYY-MM-DD');
  const apod = await handleApodByDate(today);
  if (!apod) return sendError(req, res, 'APOD not found');
  return res.status(200).json(apod);
});
