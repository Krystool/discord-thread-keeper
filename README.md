# discord-thread-keeper
This is a Discord bot that keeps a constant check on user provided Discord thread channel IDs and regularly unarchives them, if they are archived. This prevents users from having to manually unarchive them, whether through sending a message or through the setting, or boosting the server enough to get a long enough thread lifetime.

The bot unarchives all threads it is tracking every 30 minutes.

## Commands
### /addthread [thread]
Add a thread to keep alive

[thread]: The ID of a thread within the server

### /removethread [thread]
Stop keeping a specified thread alive

[thread]: The ID of a thread within the server

### /viewthreads
View the list of thread IDs being tracked, will soon be updated to get the channel names

### /forcerefresh
Manually unarchive all tracked threads





