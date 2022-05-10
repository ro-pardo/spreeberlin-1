console.log('generating Fake Data');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const Averages = [7.1, 18, 6.8, 821];

const StartDate = new Date('2020-11-01 00:00:00 UTC');
const EndDate = new Date();

Date.prototype.addHours = function (h) {
    var copiedDate = new Date(this.getTime());
    copiedDate.setHours(copiedDate.getHours() + h);
    return copiedDate;
};
const SecondDate = StartDate.addHours(1);
console.log(SecondDate);

console.log(StartDate, EndDate);

const date = StartDate;

const myData = () => {
    const data = [];

    let date = new Date('2020-11-01 00:00:00 UTC');

    console.log(date);

    while (true) {
        console.log(date - EndDate);
        if (date - EndDate >= 0) {
            console.log('finished');
            return data;
        }

        date = date.addHours(1);

        const datetime = `${date.toISOString()}`;

        const field1 = Number(
            (
                Averages[0] +
                (Math.random() * 2 - 1) * Averages[0] * 0.25
            ).toFixed(1)
        );
        const field2 = Number(
            (
                Averages[1] +
                (Math.random() * 2 - 1) * Averages[1] * 0.25
            ).toFixed(0)
        );
        const field3 = Number(
            (
                Averages[2] +
                (Math.random() * 2 - 1) * Averages[2] * 0.25
            ).toFixed(1)
        );
        const field4 = Number(
            (
                Averages[3] +
                (Math.random() * 2 - 1) * Averages[3] * 0.25
            ).toFixed(0)
        );
        data.push({
            datetime: datetime,
            field1: field1,
            field2: field2,
            field3: field3,
            field4: field4,
        });
        //console.log(date)
    }
};

console.log(myData());
const csvWriter = createCsvWriter({
    path: 'out.csv',
    header: [
        { id: 'datetime', title: 'datetime' },
        { id: 'field1', title: 'field1' },
        { id: 'field2', title: 'field2' },
        { id: 'field3', title: 'field3' },
        { id: 'field4', title: 'field4' },
    ],
});

csvWriter
    .writeRecords(myData())
    .then(() => console.log('The CSV file was written successfully'));
