/**
 * Module dependencies.
 */
import * as path from 'path';

/**
 * Expose
 */
const configs = {
  root: path.normalize(`${__dirname}/..`),
  requestTimeOut: 1500,
  prefixPath: "http://localhost:3000",
  easApiPrefix: "http://localhost:3000/eas-api-intra/v1",
  orchestrationApiPrefix: "http://localhost:3000/orchestration-api-intra/v1",
  questionApiPrefix: "http://localhost:3000/question-api-intra/v1"
};

export default { configs };
