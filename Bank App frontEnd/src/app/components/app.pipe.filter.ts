import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { History } from './index/History';

@Pipe({
    name: 'stringFilter'
})
@Injectable()
export class FilterPipeSearch implements PipeTransform {
    transform(value: History[], q: string) {
        if (!q || q === '') {
            return value;
        }
        return value.filter(item => item.client.name.toLowerCase().match(q.toLowerCase()));
    }


}