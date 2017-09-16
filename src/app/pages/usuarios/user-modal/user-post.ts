export class Post {
    constructor(
        public id?: number,
        public fecha?: string,
        public puntos?: number,
        public nombre?: string,
        public email?: string,
        public direccion?: string,
        public cp?: string,
        public localidad?: string,
    )
    {}
}
