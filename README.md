<a  href="https://www.twilio.com">
<img  src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg"  alt="Twilio"  width="250"  />
</a>
 
# Masked Phone Numbers over SMS with Conversations

[![Actions Status](https://github.com/twilio-labs/sample-conversations-masked-numbers/workflows/Node%20CI/badge.svg)](https://github.com/twilio-labs/sample-appointment-reminders/actions)

## About

Twilio Conversations allows you to build virtual spaces ("conversations") to communicate across multiple channels.

This application shows how to add multiple external phone numbers to a Twilio Conversation and track their activity.

Implementations in other languages:

| .NET | Java | Python | PHP | Ruby |
| :--- | :--- | :----- | :-- | :--- |
| TBD  | TBD  | TBD    | TBD | TBD  |

### How it works

This application creates a single conversation and provides a page to manage phone numbers in the conversation.
Using a webhook it tracks the activity of every phone number in the conversation. When a phone number is idle
for longer than its expiration time it's removed from the conversation.

## Features

- Node.js web server using [Express.js](https://npm.im/express)
- Small JSON database using [lowdb](https://github.com/typicode/lowdb).
- User interface to add phone numbers to a [Twilio Conversation](https://www.twilio.com/conversations)
- Async task to detect and remove inactive phone numbers.
- Unit tests using [`mocha`](https://npm.im/mocha) and [`chai`](https://npm.im/chai)
- [Automated CI testing using GitHub Actions](/.github/workflows/nodejs.yml)
- One click deploy buttons for Heroku and Glitch

## Set up

### Requirements

- [Node.js](https://nodejs.org/)
- A Twilio account - [sign up](https://www.twilio.com/try-twilio)

### Twilio Account Settings

This application should give you a ready-made starting point for writing your
own conversations application. Before we begin, we need to collect
all the config values we need to run the application:

| Config&nbsp;Value | Description                                                                                                                                                  |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account&nbsp;Sid  | Your primary Twilio account identifier - find this [in the Console](https://www.twilio.com/console).                                                         |
| Auth&nbsp;Token   | Used to authenticate - [just like the above, you'll find this here](https://www.twilio.com/console).                                                         |
| Phone&nbsp;number | A Twilio phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) - you can [get one here](https://www.twilio.com/console/phone-numbers/incoming) |

### Local development

After the above requirements have been met:

1. Clone this repository and `cd` into it

    ```bash
    git clone git@github.com:twilio-labs/sample-conversations-masked-numbers.git
    cd sample-conversations-masked-numbers
    ```

1. Install dependencies

    ```bash
    npm install
    ```

1. Set your environment variables

    ```bash
    npm run setup
    ```

    See [Twilio Account Settings](#twilio-account-settings) to locate the necessary environment variables.

1. Run the application

    ```bash
    npm start
    ```

    Alternatively, you can use this command to start the server in development mode. It will reload whenever you change any files.

    ```bash
    npm run dev
    ```

    Your application is now accessible at [http://localhost:3000](http://localhost:3000/)

1. Make the application visible from the outside world.

    Your application needs to be accessible in a public internet address for Twilio to be able to connect with it. You can do that in different ways, [deploying the app to a public provider](#cloud-deployment) or using [ngrok](https://ngrok.com/) to create a tunnel to your local server.
    
    If you have ngrok installed to open a tunnel to you local server run the following command
    ```
    ngrok http 3000
    ```
    
    Now your application should be available in a url like:
    ```
    https://<unique_id>.ngrok.io/
    ```

That's it! Now you can start adding phone numbers to the conversation.


### Tests

You can run the tests locally by typing:

```bash
npm test
```

### Cloud deployment

Additionally to trying out this application locally, you can deploy it to a variety of host services. Here is a small selection of them.

Please be aware that some of these might charge you for the usage or might make the source code for this application visible to the public. When in doubt research the respective hosting service first.

| Service                           |                                                                                                                                                                                                                           |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Heroku](https://www.heroku.com/) | [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/twilio-labs/sample-conversations-masked-numbers/tree/master)                                                                                                                                       |
| [Glitch](https://glitch.com)      | [![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/twilio-labs/sample-conversations-masked-numbers.git) |

## Resources

- [Twilio Conversation Quickstart](https://www.twilio.com/docs/conversations/quickstart)
- [Create a conversation with the API](https://www.twilio.com/docs/conversations/api/conversation-resource)
- [Add participants to a conversation with the API](https://www.twilio.com/docs/conversations/api/conversation-participant-resource)

## Contributing

This application is open source and welcomes contributions. All contributions are subject to our [Code of Conduct](https://github.com/twilio-labs/.github/blob/master/CODE_OF_CONDUCT.md).

[Visit the project on GitHub](https://github.com/twilio-labs/sample-template-nodejs)

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.

[twilio]: https://www.twilio.com
