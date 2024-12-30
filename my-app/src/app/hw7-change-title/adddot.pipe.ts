import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adddot',
  standalone: false,
})
export class AdddotPipe implements PipeTransform {
  transform(context: string): string {
    return context.length > 10 ? context.substring(0, 80) + '...' : context;
  }
}
