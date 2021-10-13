import { column } from '@ioc:Adonis/Lucid/Orm'
import TrackingModel from './TrackingModel'

export default class Post extends TrackingModel {
  @column()
  title: string;
}
