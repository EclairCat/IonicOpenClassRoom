import { Livre } from '../models/livre';

export class LivreService {
  livreList: Livre[] = [
    {
      name: 'Asterix et Obelix',
      description: [
        'Type : BD',
        'Tome : 5',
        'Description : Asterix et Obelix vont recupperer la potion volée par les golois!'
      ],
      isGiven: true
    },
    {
      name: 'Harry Potter',
      description: [
        'Type : Roman',
        'Tome : 1',
        'Description : Harry ur a wazard'
      ],
      isGiven: true
    },
    {
      name: '50 nuance de code',
      description: [
        'Type : Erotic',
        'Tome : 1',
        'Description : Code coquain entre langage différent. a en faire baver les dev carton'
      ],
      isGiven: false
    }
  ];
}