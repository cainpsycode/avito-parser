namespace Avito {
    const capacities = {
        '0': '',
        'до 0.6': '15776',
        '0.7': '15777',
        '0.8': '15778',
        '0.9': '15779',
        '1': '15780',
        '1.1': '15781',
        '1.2': '15782',
        '1.3': '15783',
        '1.4': '15784',
        '1.5': '15785',
        '1.6': '15786',
        '1.7': '15787',
        '1.8': '15788',
        '1.9': '15789',
        '2': '15790',
        '2.1': '15791',
        '2.2': '15792',
        '2.3': '15793',
        '2.4': '15794',
        '2.5': '15795',
        '2.6': '15796',
        '2.7': '15797',
        '2.8': '15798',
        '2.9': '15799',
        '3': '15800',
        '3.1': '15801',
        '3.2': '15802',
        '3.3': '15803',
        '3.4': '15804',
        '3.5': '15805',
        '3.6': '15806',
        '3.7': '15807',
        '3.8': '15808',
        '3.9': '15809',
        '4': '15810',
        '4.5': '15815',
        '5': '15820',
        '5.5': '15825',
        '6': '15830',
        '6+': ''
    };

    export class EngineCapacity {
        min:string;
        max:string;

        public static getId = (name:string):string => {
            return capacities[name];
        };
    }
}