export class Post {
    constructor(
        public id?: number,
        public lugar?: string,
        public direccion?: string,
        public cp?: string,
        public localidad?: string,
        public nombre?: string,
        public descripcion?: string,
        public fecha?: string,
        public puntos?: number,
        public imange?: string,
    )
    {}
}
