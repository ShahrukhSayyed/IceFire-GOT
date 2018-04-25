import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData',
  pure: false
})
export class FilterDataPipe implements PipeTransform {
  public newArray;
  transform(array: Array<object>, args: string): Array<object> {
    console.log("In FilterDataPipe");
    if (!array || !args) {
      return array;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    this.newArray = array.filter(val => {
      let nameInArray = val['name'].toLowerCase();
      let argsPassed = args.toLowerCase();
      return nameInArray.search(argsPassed) > -1;
    });

    return this.newArray;
  
  }


}
