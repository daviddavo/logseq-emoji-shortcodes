### My other plugins
- :tea: [Logseq Furigana](https://github.com/daviddavo/logseq-furigana)

# <img src="./logo.png" style="width: 0.9em" width="24"> Logseq Emoji Shortcodes

![demo video](./demo.gif)

<h3>If you 💜 what I'm doing - you can support my work 🍵</h3>
<a href="https://www.buymeacoffee.com/ddavo"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a bubble tea&emoji=🧋&slug=ddavo&button_colour=5f7fff&font_colour=fff&font_family=Lato&outline_colour=000000" /></a>

## Features

Choose if you want to modify your notes or not:

- **Slash command** to transcribe from shortcode to the Unicode emoji
  - Modifies your notes but you can read them without having the plugin installed.
- **Markdown rendering** to show shortcodes without modifying your notes
  - Just write something like `:smile:` and it will show you ":smile:", depending on your installed font

## How to develop
1. Clone the repository
2. Make sure you have pnpm installed, [install](https://pnpm.io/installation) if necessary 🛠
3. Execute `pnpm install` 📦
4. Execute `pnpm build` to build the plugin 🚧
5. Enable developer-mode in Logseq, go to plugins, select "Load unpacked plugin" 🔌
6. Select the directory of your plugin (not the `/dist`-directory, but the directory which includes your package.json) 📂
7. Enjoy! 🎉

## Acknowledgments
- Based on [logseq-furigana](https://github.com/daviddavo/logseq-furigana)
- Emoji parser from [universal-emoji-parser](https://github.com/DailyBotHQ/universal-emoji-parser#readme)
- Icon - Modified from https://www.flaticon.com/free-icons/emoticon