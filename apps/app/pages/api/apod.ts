import { endpoint, requireAuthentication, sendError } from 'utils/endpoint';
// .use(requireAuthentication)

import { NextApiRequest } from 'next';
import { handleApodByDate } from '../../models/APODModel';

export default endpoint().get(
  async (
    req: NextApiRequest & {
      query: { date: Date };
    },
    res
  ) => {
    const date = req.query.date;
    if (!date) return sendError(req, res, 'Date is required');
    try {
      const apod = await handleApodByDate(date);
      if (!apod) return sendError(req, res, 'APOD not found');
      return res.status(200).json(apod);
    } catch (ex) {
      return sendError(req, res, 'Internal server error');
    }
  }
);
