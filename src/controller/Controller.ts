import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { WeeklyStatus } from '../entity/WeeklyStatus';

export default class Controller {
  /**
   * Loads all weekly statuses from the database.
   */
  static async getAll(request: Request, response: Response) {
    const postRepository = getManager().getRepository(WeeklyStatus);
    const posts = await postRepository.find();
    response.send(posts);
  }

  /**
   *  Gets a weekly status by id.
   */
  static async getById(request: Request, response: Response) {
    const postRepository = getManager().getRepository(WeeklyStatus);
    const post = await postRepository.findOne(request.params.id);
    if (!post) {
      response.status(404);
      response.end();
      return;
    }
    response.send(post);
  }

  /**
   *  Saves a weekly status.
   */
  static async save(request: Request, response: Response) {
    const postRepository = getManager().getRepository(WeeklyStatus);
    const newPost = postRepository.create(request.body);
    await postRepository.save(newPost);
    response.send(newPost);
  }
}
