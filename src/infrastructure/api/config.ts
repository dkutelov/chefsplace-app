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

const configWrapper = new Config({
  apiUrl: "http://localhost:8000/api/v1/",
  fetch: fetchAPI,
});

export function getConfig() {
  return configWrapper.getConfig();
}
