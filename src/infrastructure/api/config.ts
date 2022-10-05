import { ApiConfig } from "@types/common/api";
import { fetchAPI } from "./agent";

class Config {
  private config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  getConfig(): ApiConfig {
    return this.config;
  }
}

const isLocal = false;
const url = isLocal
  ? "http://localhost:8000"
  : "https://dry-chamber-19090.herokuapp.com";

const configWrapper = new Config({
  apiUrl: url + "/api/v1/",
  fetch: fetchAPI,
});

export function getConfig() {
  return configWrapper.getConfig();
}
