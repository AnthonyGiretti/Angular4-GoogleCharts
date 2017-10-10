export class PieChartConfig {
    title: string;
    pieHole: number

    constructor(title: string, pieHole: number) {
        this.title = title;
        this.pieHole = pieHole;
    }
}