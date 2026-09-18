import { FlexWrapper, Input } from '@affine/component';
import { Button } from '@toeverything/components/button';
import { useAtom } from 'jotai';
import { type ReactElement, useCallback } from 'react';

import {
  AIWAVE_BASE_URL,
  DEFAULT_AIWAVE_MODEL,
  DEFAULT_OPENAI_MODEL,
  openAIApiKeyAtom,
  openAIBaseUrlAtom,
  openAIModelNameAtom,
} from '../core/hooks';
import { conversationHistoryDBName } from '../core/langchain/message-history';

export const DebugContent = (): ReactElement => {
  const [key, setKey] = useAtom(openAIApiKeyAtom);
  const [baseUrl, setBaseUrl] = useAtom(openAIBaseUrlAtom);
  const [modelName, setModelName] = useAtom(openAIModelNameAtom);
  return (
    <div>
      <FlexWrapper justifyContent="space-between" flexWrap="wrap" gap={12}>
        <Input
          width={280}
          defaultValue={key ?? undefined}
          onChange={useCallback(
            (newValue: string) => {
              setKey(newValue);
            },
            [setKey]
          )}
          placeholder="API key (OpenAI or gateway)"
        />
        <Input
          width={280}
          defaultValue={baseUrl ?? undefined}
          onChange={useCallback(
            (newValue: string) => {
              setBaseUrl(newValue || null);
            },
            [setBaseUrl]
          )}
          placeholder={`Base URL (optional, e.g. ${AIWAVE_BASE_URL})`}
        />
        <Input
          width={280}
          defaultValue={modelName ?? undefined}
          onChange={useCallback(
            (newValue: string) => {
              setModelName(newValue || null);
            },
            [setModelName]
          )}
          placeholder={`Model (default ${DEFAULT_OPENAI_MODEL})`}
        />
        <Button
          size="large"
          onClick={() => {
            setBaseUrl(AIWAVE_BASE_URL);
            setModelName(DEFAULT_AIWAVE_MODEL);
          }}
        >
          Use AIWave preset
        </Button>
        <Button
          size="large"
          onClick={() => {
            setBaseUrl(null);
            setModelName(null);
          }}
        >
          Reset to OpenAI
        </Button>
        <Button
          size="large"
          onClick={() => {
            indexedDB.deleteDatabase(conversationHistoryDBName);
            location.reload();
          }}
        >
          {'Clean conversations'}
        </Button>
      </FlexWrapper>
    </div>
  );
};
