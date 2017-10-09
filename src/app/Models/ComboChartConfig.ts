export class ComboChartConfig {
    title: string;
    vAxis: string;
    hAxis: string;

    constructor(title: string, vAxis: string, hAxis: string) {
        this.title = title;
        this.vAxis = vAxis;
        this.hAxis = hAxis;
    }
}