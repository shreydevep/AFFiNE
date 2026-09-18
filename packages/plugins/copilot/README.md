# AFFiNE Copilot

> AI Copilot Plugin for your writing

## OpenAI-compatible providers (including AIWave)

Copilot uses the OpenAI chat API via LangChain. You can point it at any
OpenAI-compatible endpoint by setting **Base URL** and **Model** in the debug
panel (along with your API key).

### AIWave (50+ Chinese models, one API)

[AIWave](https://dev.to/aiwave/how-to-access-50-chinese-ai-models-with-one-api-no-code-changes-required-2e7f)
exposes models such as DeepSeek, GLM, and Qwen through a single OpenAI-style
endpoint. In the debug panel, click **Use AIWave preset** or configure manually:

| Setting   | Value |
| --------- | ----- |
| API key   | Your `sk-aiwave-…` key |
| Base URL  | `https://api.aiwave.live/v1` |
| Model     | `provider/model`, e.g. `deepseek/deepseek-v4-pro` |

With no base URL, Copilot talks to OpenAI directly and uses `gpt-3.5-turbo` unless
you override the model field.
