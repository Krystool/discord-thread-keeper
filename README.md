# discord-thread-keeper
This is a Discord bot that keeps a constant check on user provided Discord thread channel IDs and regularly unarchives them, if they are archived. This prevents users from having to manually unarchive them, whether through sending a message or through the setting, or boosting the server enough to get a long enough thread lifetime.

The bot unarchives all threads it is tracking every 30 minutes.

## Commands
### /addthread [thread]
Add a thread to keep alive. This can be the ID of a thread or a direct reference to the thread channel (e.g. by typing in # followed by the name).

[thread]: The ID or name of a thread within the server

### /removethread [thread]
Stop keeping a specified thread alive. This can be the ID of a thread or a direct reference to the thread channel (e.g. by typing in # followed by the name).

[thread]: The ID or name of a thread within the server

### /viewthreads
View the list of threads being tracked.

### /forcerefresh
Manually unarchive all tracked threads.





