import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tasks: string, search = ''): any {
    if (search.length === 0) {
      return tasks
    }
  return  tasks.toLowerCase().includes(search.toLowerCase())?tasks:""
    // return tasks

  }

}
