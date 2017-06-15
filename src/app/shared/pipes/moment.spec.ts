import {MomentPipe} from "./moment.pipe";


describe('Pipe: MomentPipe', () => {
    let pipe: MomentPipe = new MomentPipe();

    it('Transforme un timestamp en date', () => {

      let timestamp = 1462399200000;
      let objectFromPipe = pipe.transform(timestamp, "Do MMMM YYYY, h:mm:ss");
      let objectExpected = "5 mai 2016, 12:00:00";
      expect(objectFromPipe).toEqual(objectExpected);

    });

});
