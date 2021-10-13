# Query bug in Lucid

It's not clear when the bug appeared, and it may be in a dependency of Lucid,
but this worked before I upgraded dependencies in my app.

## Reproduce

```console
git clone https://github.com/targos/lucid-query-bug.git
cd lucid-query-bug
npm ci
node ace migration:run
node ace db:seed
node ace serve --watch
```

- http://localhost:3333/posts Shows the list of all posts.
- http://localhost:3333/posts?user=Robert Should show only the post created by Robert.

Error:

```text
select * from `posts` where exists (select * from `users` where `name` like '%Robert%' and `users`.`id` = `tracking_models`.`created_by_id`) - SQLITE_ERROR: no such column: tracking_models.created_by_id
```

The query is done with `tracking_models.created_by_id` instead of `posts.created_by_id`.
