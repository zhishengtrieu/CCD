import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Atelier } from './atelier.entity';
import { Label } from './label.entity';

@Entity()
export class Candidat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;
  
  @Column()
  prenom: string;

  @Column()
  email: string;

  @Column()
  enAttente: boolean;
  
}
