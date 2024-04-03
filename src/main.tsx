import "@logseq/libs";

import "./index.css";

import uEmojiParser from 'universal-emoji-parser'
import { EmojiParseOptionsType } from "universal-emoji-parser/dist/lib/type";

function replaceHtml(node: ChildNode, options: EmojiParseOptionsType) {
  // Based on https://github.com/daviddavo/logseq-furigana/blob/ad616c79277ac2daf68d3d37c050e9ddff76919f/src/parsers/CommonParser.tsx#L10-L23
  if (['CODE', 'RUBY', 'A'].includes(node.nodeName)) {
    return
  }

  if (node.hasChildNodes()) {
    for (const child of node.childNodes) {
      replaceHtml(child, options)
    }
  } else {
    // Node is Text or something like that
    node.replaceWith(uEmojiParser.parse(node.textContent ?? "", options))
  }
}

// @ts-expect-error
const css = (t, ...args) => String.raw(t, ...args);

async function main() {
  logseq.Editor.registerSlashCommand(
    "Convert shortcodes to emoji",
    async ({pid, format, uuid}) => {
      const content = await logseq.Editor.getEditingBlockContent()
      logseq.Editor.updateBlock(uuid, uEmojiParser.parseToUnicode(content))
    }
  )  
  logseq.Editor.registerSlashCommand(
    "Convert emoji to shortcodes",
    async ({pid, format, uuid}) => {
      const content = await logseq.Editor.getEditingBlockContent()
      logseq.Editor.updateBlock(uuid, uEmojiParser.parseToShortcode(content))
    }
  )  

  const observer = new MutationObserver((mutationList, observer) => {
    for (const m of mutationList) {
      for (const node of m.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as HTMLElement 

          for (const content of element.querySelectorAll('div.block-content') as NodeListOf<HTMLElement>) {
            // Easier to debug
            if (/:\w+:/.test(content.innerHTML)) {
              replaceHtml(content, {parseToHtml: false, parseToUnicode: true, parseToShortcode: true,})
            }
          }
        }
      }
    }
  })

  observer.observe(top!.document.body, {childList: true, subtree: true, })

  console.info('logseq-emoji-shortcodes loaded');
}

logseq.ready(main).catch(console.error);
