import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Topic } from './Topic';

@Entity()
export class WeeklyStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column('text')
  blockers: string;

  @Column('text')
  updates: string;

  @Column('text')
  next: string;

  @ManyToMany((type) => Topic, {
    cascade: true,
  })
  @JoinTable()
  topics: Topic[];
}
