## Reflections from the takehome challenge

( __UUID__: c1f56ae1-0d57-4271-882b-f9c25c9f3460​ )

* #### The instructions are extremely vague and they leave a lot of room for design and features.
  * The API doesn't support any sort of authentication, so I will assume the user has to have the browser window open to continue to see their tasks. If the browser window closes, the work is lost and they will start a new session upon visiting the site again.

  * I realized now that a user is authenticated via the UUID which is passed as a header.

* #### I spent an embarassingly long time on the first day fixing a bug which made all my http requests fail.
  * Turns out when I copied the UUID from the email I received, a weird non-ISO 8859 character came with it at the very end but VS Code wasn't showing it.  

* #### I have a lot of ideas on how to design a really enjoyable user experience, but I don't think I have the time to implement everything.
  * A kanban board to move all the completed tasks to would declutter the main pending tasks.
  * Initially, I was thinking about implementing a "Subtask" which is a subset of a "Task" since I believe it can help break down a complex task into smaller pieces. However, the API doesn't have support for that and it's there's no time to find a workaround.
  * I'm stil very unhappy about the design overall. I want to use more pre-made components to make it look a lot more stylish but I don't want to overwhelm such a small project with a bunch of libraries.