import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dot',
  standalone: false,
})
export class DotPipe implements PipeTransform {
  transform(context: string): string {
    return context.length > 81 ? context.substring(0, 80) + '...' : context;
  }
}
