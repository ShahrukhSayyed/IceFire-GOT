import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderData'
})
export class OrderDataPipe implements PipeTransform {
  public newArray;
  
  /**
 * Perform the Ordering based on input.
 * 
 * @param {Array<Object>} array The array of objects to compare to the filter.
 * @param {string[books/houses/characters]} args The filter to apply.
 * @return {Array<object>} newArray if array of objects satisfies filters, null if not.
 */

  transform(array: Array<Object>, args: string): Array<object> {
    console.log("In orderDataPipe")
    if (!array || !args) {
      return array;
    }
    
    //console.log(args)
    // filter items array, items which match and return true will be kept, false will be filtered out
    if(args == undefined ){
      return array;
    }
    else if(args == "All"){
      return array;
    }
    else{
      this.newArray = array.filter(val => {
        let urlInArray = val['url'].toLowerCase();
        let argsPassed = args.toLowerCase();
        return urlInArray.search(argsPassed) > -1;
      });  
    }

    //console.log(this.newArray);
    
    return this.newArray;

  }
}