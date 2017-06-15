import {JsonKeysPipe} from "./jsonKeys.pipe";


describe('Pipe: JsonKeysPipe', () => {
    let pipe: JsonKeysPipe = new JsonKeysPipe();

    it('Transforme un json en tableau', () => {
        let json = {
            "PRIMAIRE": "PRIMAIRE",
            "SECONDAIRE": "SECONDAIRE"
        };
        let objectFromPipe = pipe.transform(json);
        let objectExpected = [{key: 'PRIMAIRE', value: 'PRIMAIRE'}, {key: 'SECONDAIRE', value: 'SECONDAIRE'}];
        expect(objectFromPipe).toEqual(objectExpected);
    });

}) 