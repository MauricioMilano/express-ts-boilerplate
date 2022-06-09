export type Entity <T extends {}> = T &{
    id: String
}

export interface Repository<Entity> {
    create?(object: Partial<Entity>):Entity;
    get?(id: String): Entity;
    update?(object: Partial<Entity>):Entity;
    delete?(id: String): Entity;

}