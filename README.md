# JavaScript developer assignment

For this assignment you'll create an app for listing events. You'll load the events from a Redis stream.


## Description

<img width="1324" src="https://camo.githubusercontent.com/5006f771da7cdd07f87589aa0d28ecd78c322cb9/68747470733a2f2f64326d787565667165616137736a2e636c6f756466726f6e742e6e65742f735f303231344144344539413443323631363445373238324232333936364134373831393933314630434535464335443941334536463433354237393233444137415f313531373335303135353935325f696d6167652e706e67">

We’d like you to build an implementation of this using a modern web framework on the client. You should use whatever you’re most comfortable with for this, but we recommend using React. On the server we’d like to see something that can load events from a Redis event stream, send them to the client, and build a UI for displaying those events that includes a button for pausing/resuming the events, and a search box for filtering the events.

Here’s what we care about:

* It works
* Write this like you would write production code at your company. i.e.
* Proper error handling and logging
* Resilient code that can recover from crashes/failures
* The code is high-quality and tested

Feel free to use the `docker-compose.yml` file I attached if you decide to use Docker for this challenge. The stream image will simulate a stream of events.

## Build

To run this app you need to have Node.js v12 LTS, npm, docker, docker-compose and can build app with shell script using command below

```sh

$ sh build.sh

```
