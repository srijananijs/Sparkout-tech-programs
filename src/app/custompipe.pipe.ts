import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  /*transform(value: string, school: string ): string {
    return "School name is " + school;
  }
  transform(value: any, std: any ): string {
    return "Iam stydying in " + std + "standard";
    
  }*/
  transform(value: any, school: any, std: any ): any {
      return "My school name is " + school + " and I'm studying in " + std + "th"+ " standard";
    
  }


}
