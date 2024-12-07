<div align="center">
  <h1>Automated MAC Filtering for Routers using NodeJS and Puppeteer based on Client Payment Status</h1>

<a href="https://www.typescriptlang.org/">
	<img alt="License" src="https://img.shields.io/badge/Typescript-3776AB?style=for-the-badge&logo=typescript&logoColor=white">
</a>
<a href="https://www.nodejs.org/">
	<img alt="License" src="https://img.shields.io/badge/NodeJS v22.12.0-417e38?style=for-the-badge&logo=nodejs&logoColor=white">
</a>
<a href="https://github.com/SalamPS/puppet-mac-filter/blob/main/LICENSE">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-2cb150?style=for-the-badge&logo=opensourceinitiative&logoColor=white">
</a>
</div>

## What It Does

I made this automation system in the need of my responsibility as an Admin of my local network. I need to ensure that only client who already paid the internet bill that able to access the local network. The plan is by using Whitelist MAC Filtering.

I have plenty other things to do beside of this simply lovely stuff. Rather than doing all the filtering things manually everyday, I prefer to made this automation to let me chill out without any need of care about the filtering anymore.

You also able to use the source code I provided. You can freely customize the code according to your router display page. I recommend you to save a screenshot using puppeteer by doing `page.screenshot` at the end of every development trials to help you debugging the code.

## How To Use

Since this project was made using TS, there are two runtimes (TS and JS). You can run any of them and running the Typescript runtime will require you to install `ts-node` to be able to run Typescript directly.

To run index.js

```
node index.js
```

To run index.ts

```
# Run this if you don't have ts-node installed yet
# npm install -g ts-node

ts-node index.js
```