import "reflect-metadata";

import Init from "./init";

// Load Controllers
import AuthenticationController from "./authentication/authentication.controller";
import DeficiencyController from "./deficiency/deficiency.controller";
import ResearchController from "./research/research.controller";
import VerificationController from "./verification/verification.controller";

const app = new Init([
  new AuthenticationController(),
  new DeficiencyController(),
  new ResearchController(),
  new VerificationController(),
]);

app.listen();
