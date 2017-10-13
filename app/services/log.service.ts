
import { Injectable } from "@angular/core";

@Injectable()
export class LogService {
    log(msg: string): void {
        console.log(msg);
    }

    error(msg: string): void {
        console.error("Error : " + msg);
    }
}