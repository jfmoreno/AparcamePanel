export class Post {
    constructor(
        public id?: number,
        public cod?: string,
        public nombre?: string,
        public cp?: string,
        public localidad?: string,
        public plazas?: number,
        public adaptadas?: number,
        public electricas?: number,
        public longitud01?: string,
        public latitud01?: string,
        public longitud02?: string,
        public latitud02?: string,
    )
    {}
}
