/**
 * Created by zhenglu on 12/6/16.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'double'})
export class DoublePipe implements PipeTransform {

  transform(value: number, args?: any) {
    return value * 2;
  }
}
