import {
  PUSHER_APP_KEY,
  PUSHER_APP_SECRET,
} from './ENV';

import uuid from 'uuid';

export default new Pusher(PUSHER_APP_KEY, {
  authTransport: 'client',
  clientAuth: {
    key: PUSHER_APP_KEY,
    secret: PUSHER_APP_SECRET,
    user_id: uuid.v1(),
    user_info: {}
  }
});
