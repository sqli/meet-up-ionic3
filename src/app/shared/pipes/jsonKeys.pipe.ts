import {Pipe, PipeTransform} from "@angular/core";

/**
 * Convertie un json en tableau clé/valeur
 */
@Pipe({name: 'jsonKeys'})
export class JsonKeysPipe implements PipeTransform {
    transform(value): any {
        let keys = [];
        for (let key in value) {
            keys.push({key: key, value: value[key]});
        }
        return keys;
    }
}