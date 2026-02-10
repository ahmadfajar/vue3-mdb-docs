import { type CheerioAPI, load } from 'cheerio';
import * as Utils from 'markdown-it/lib/common/utils.mjs';
import type Token from 'markdown-it/lib/token.mjs';
import fs from 'node:fs';

declare type TParseResult = {
  doc: CheerioAPI;
  title?: string;
  description?: string;
  headers?: string[];
  script?: string;
  style?: string | null;
  content: string;
  clientOnly?: boolean;
};

export function parseToken(tokens: Token[], idx: number): TParseResult {
  const token = tokens[idx]!;

  let title: string | undefined,
    description: string | undefined,
    clientOnly: boolean | undefined,
    jscript: string | undefined;

  const content = tokens[idx + 1]?.content.trim() || '';
  const attrs = token.attrs;

  if (Array.isArray(attrs)) {
    attrs.forEach((attr) => {
      if (attr[0] === 'title') {
        title = attr[1];
        description = title + ' example from Vue MDBootstrap documentation';
      }
      if (attr[0] === 'clientOnly') {
        clientOnly = true;
      }
      if (attr[0] === 'file') {
        jscript = fs.readFileSync(attr[1], { encoding: 'utf8' });
      }
    });
  }

  const doc = load(content);
  const resultHtml = doc('template').html()?.trim() || content;
  const style = doc('style').html();

  return {
    doc,
    title,
    description,
    script: jscript,
    content: resultHtml,
    style,
    clientOnly,
  };
}

export function makeStackblitzOpts(params: TParseResult): string {
  const stackblitz = {
    title: params.title,
    description: params.description,
    headers: params.headers,
    script: params.script,
    style: params.style?.trim(),
    content: params.content.replaceAll('="/img', '="https://ahmadfajar.github.io/img'),
  };

  return Utils.escapeHtml(JSON.stringify(stackblitz));
}
