import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  //   @Column({nullable:true })
  @Column({ unique: true })
  email: string;
  @Column({ default: null })
  phone: string;
}
