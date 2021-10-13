import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {name: 'Robert'},
      {name: 'John'},
      {name: 'Jane'},
    ])
    await Post.createMany([
      {title: 'Post 1', createdById: 1},
      {title: 'Post 2', createdById: 2},
      {title: 'Post 3', createdById: 3},
    ])
  }
}
