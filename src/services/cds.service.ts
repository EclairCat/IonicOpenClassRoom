import { Cd } from '../models/cd';

export class CdsService {
  cdList: Cd[] = [
    {
      name: 'Baby',
      description: [
        'Chanteur : Justin Baber',
        'Type : nul',
        'durée : 666 min'
      ],
      isGiven: true
    },
    {
      name: 'S3RL Hentai',
      description: [
        'Chanteur : S3RL',
        'Type : Electro Hardstyle wtf?',
        'durée : 1min30'
      ],
      isGiven: true
    },
    {
      name: 'Mirador',
      description: [
        'Chanteur : Kezah et Freddy',
        'Type : chanson de l\'été',
        'durée : 2min'
      ],
      isGiven: false
    }
  ];
}