import { LogFactory } from "./factories/interface/log-factory.interface";
import { LogFormater } from "./interfaces/log-formater.interface";
import { LogVisualization } from "./interfaces/log-visualization.interface";
import { Logger } from "./interfaces/logger.interface";

// client
export class LogSystem {
    private log: Logger;
    private formatter: LogFormater;
    private visualizator: LogVisualization;

    constructor(factory: LogFactory) {
        this.log = factory.createConnection();
        this.formatter = factory.createFormatter();
        this.visualizator = factory.createVisualization();
    }

    build() {
        const rawData = this.log.getLog();
        const parsedData = this.formatter.format(rawData);
        const print = this.visualizator.print(parsedData);
        console.log(rawData);
        console.log(parsedData);
        console.log(print);
    }
}