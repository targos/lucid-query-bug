import Route from '@ioc:Adonis/Core/Route'
import Post from 'App/Models/Post'

Route.get('/', async () => {
  return 'Access /posts or /posts?user=Robert'
})

Route.get('/posts', async ({request}) => {
  const query = Post.query().preload('createdBy')
  const { user } = request.qs()
  if (user) {
    query.whereHas('createdBy', (userQuery) => {
      userQuery.where('name', 'like', `%${user}%`)
    })
  }
  return query
})
