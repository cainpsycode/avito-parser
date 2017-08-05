/// <reference path="./Price.ts" />
/// <reference path="./Years.ts" />
/// <reference path="./EngineCapacity.ts" />
/// <reference path="./AdsOwner.ts" />

namespace Avito {
    export interface Car {
        name:string;
        models:Array<string>;
        transmissions:Array<string>;
        price:Price;
        years:Years;
        engineCapacity: EngineCapacity;
        adsOwner: string;
    }
}