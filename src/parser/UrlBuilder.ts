/// <reference path="./Car.ts" />
/// <reference path="./Transmissions.ts" />
/// <reference path="./Params.ts" />
/// <reference path="./Years.ts" />
/// <reference path="./EngineCapacity.ts" />
/// <reference path="./AdsOwner.ts" />

namespace Avito {
    export class UrlBuilder {
        public static build(city:string, car:Car, carModel:string) {
            let params:Array<Param> = [];

            if (car.transmissions.length) {
                const transmissions = car.transmissions.map(function (tr) {
                    return Transmissions[tr];
                });
                params.push(new Param(Params.Transmission, ParamValueTypes.Selection, transmissions));
            }
            params.push(new Param(Params.Year, ParamValueTypes.Range, [Years.getYearId(car.years.min), Years.getYearId(car.years.max)]));
            params.push(new Param(Params.EngineCapacity, ParamValueTypes.Range, [EngineCapacity.getId(car.engineCapacity.min), EngineCapacity.getId(car.engineCapacity.max)]));

            var adsOwnerSpecified = '';
            if (car.adsOwner) {
                const owner = AdsOwner[car.adsOwner];
                adsOwnerSpecified = '&user=' + owner;
            }

            const paramsStrings = params.map(function (param:Param) {
                return param.build();
            });
            const paramsGlued = paramsStrings.join('.');
            return `${this.getBaseUrl()}/${city}/avtomobili/${car.name}/${carModel}?f=${paramsGlued}&pmin=${car.price.min}&pmax=${car.price.max}${adsOwnerSpecified}`;
        }

        public static getBaseUrl() {
            return 'https://www.avito.ru';
        }
    }
}