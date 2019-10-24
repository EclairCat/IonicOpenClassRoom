export class Livre {
    description: string[];
    isGiven: boolean;
  
    constructor(public name: string) {
      this.isGiven = false;
    }
  }