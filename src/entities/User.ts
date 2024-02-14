export class User {
    constructor(
        public readonly _id?: string,
        public readonly name?: string,
        public readonly email?: string,
        public readonly password?: string,
        public readonly role?: string,
        public readonly createdAt?: Date,
        public readonly phoneNumber?: string
    ) {

    }

    //yukadrıda deperlerimizi opsiyonel yapıyoruz.çünkü fonksiyonalra değer geçeceğimiz zamaan ve değer dönerken hepsinin gelmesini istemeyebiliriz
    //istersek burada email gibi doğrulamalar yapabiliriz
}