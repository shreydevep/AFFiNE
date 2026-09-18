/** OpenAI-compatible gateway documented at https://api.aiwave.live/v1 */
export const AIWAVE_BASE_URL = 'https://api.aiwave.live/v1';

export const DEFAULT_OPENAI_MODEL = 'gpt-3.5-turbo';

export const DEFAULT_AIWAVE_MODEL = 'deepseek/deepseek-v4-pro';

export type OpenAIClientConfig = {
  openAIApiKey: string;
  baseUrl: string | null;
  modelName: string;
};

export function resolveOpenAIModelName(modelName: string | null): string {
  const trimmed = modelName?.trim();
  return trimmed ? trimmed : DEFAULT_OPENAI_MODEL;
}

export function resolveOpenAIBasePath(baseUrl: string | null): string | undefined {
  const trimmed = baseUrl?.trim();
  if (!trimmed) {
    return undefined;
  }
  return trimmed.replace(/\/$/, '');
}

export function buildChatOpenAIFields(
  config: OpenAIClientConfig
): {
  openAIApiKey: string;
  modelName: string;
  configuration?: { basePath: string };
} {
  const basePath = resolveOpenAIBasePath(config.baseUrl);
  return {
    openAIApiKey: config.openAIApiKey,
    modelName: resolveOpenAIModelName(config.modelName),
    ...(basePath ? { configuration: { basePath } } : {}),
  };
}
