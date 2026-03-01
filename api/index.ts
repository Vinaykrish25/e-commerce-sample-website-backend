import { createServer } from '../src/main';
import server from '../src/main';

let app: any;

export default async (req: any, res: any) => {
  if (!app) {
    app = await createServer(server);
  }
  return app.getHttpAdapter().getInstance()(req, res);
};
