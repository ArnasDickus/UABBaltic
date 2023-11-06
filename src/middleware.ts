import { stackMiddlewares } from "./middlewares/stack-middlewares";
import { withLanguage } from "./middlewares/with-language";

const middlewares = [withLanguage];
export default stackMiddlewares(middlewares);
