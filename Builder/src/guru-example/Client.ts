import { ConcreteBuilder1 } from "./ConcreteBuilder1";
import { Director } from "./Director";

export class Client {
    private builder = new ConcreteBuilder1();
    
    public buildStandardBasicProduct(director: Director): void {
        console.log('Standard basci product: ');
        director.buildMinimalViableProduct();
        this.builder.getProduct().listParts();
    }

    public buildStandardFullFeaturedProduct(director: Director): void {
        console.log('Standard full featured product: ');
        director.buildFullFeaturedProduct();
        this.builder.getProduct().listParts();
    }

    public buildCustomProduct(director: Director): void {
        console.log('Custom product: ');
        this.builder.producePartA();
        this.builder.producePartC();
        this.builder.getProduct().listParts();
    }
}

(function() {
    const client = new Client();
    const director = new Director();
    client.buildStandardBasicProduct(director);
    client.buildStandardFullFeaturedProduct(director);
    client.buildCustomProduct(director);
})()