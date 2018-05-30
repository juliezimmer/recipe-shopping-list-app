// this class defines a recipe for this application, the recipe model.
export class Recipe {
   public name: string;
   public description: string;
   public imagePath: string;

   constructor(name:string, desc: string, imagePath: string) {
      this.name = name;
      this.desc =  desc;
      this.imagePath = imagePath;
   }

}