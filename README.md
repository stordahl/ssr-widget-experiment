# Server Rendered, Third Party JavaScript Applications

> This project is experimental

## Goals and Motivations

The current architecture for third-party web apps relies heavily on the client device's resources. With the Streams API landing in all major browsers, I want to attempt to create a new, stream based architecture to enable massively smaller client bundles and allow for third-party apps to take full advantage of edge deployments.

## Architecture

Below is a visualization of the tasks shared by the client and server in a typical third party application. Traditionally, an application will be downloaded onto the page, then some code executes to spin up the application. This computation usually includes fetching data from one or many remote APIs, executing some business logic, creating HTML, and then adding this HTML to the DOM.

<img width="600" alt="Xnapper-2023-06-19-15 34 53" src="https://github.com/stordahl/ssr-widget-experiment/assets/60861572/4a62248f-cc18-48b4-b475-e10c4fe73e16">

This repo aims to explore an architecture that utilizes the [Web Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) to move all data fetching, logic execution, and HTML generating to the server, where the server then streams the HTML to the client. My hypothesis is that this will result in dramatically smaller JS bundles, better performance in the eyes of auditing tools like [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/), and a better user experience overall.

<img width="600" alt="Xnapper-2023-06-19-15 31 22" src="https://github.com/stordahl/ssr-widget-experiment/assets/60861572/2c0617f4-4a61-4e1d-81ed-c2b2772db8fe">

## Running the prototype

Simply clone the repo, cd into it, and run `pnpm install && pnpm run dev` to run the protoype's server and client.
