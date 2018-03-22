export class Hero {

  constructor(
    public id: string,
    public email: string,
    public username: string,
    public phone_number: string,
    public password: string,
    public country?: string,
  ) {  }

}