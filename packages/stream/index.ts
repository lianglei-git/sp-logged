import createObject from 'shared/createObject'
import Write from './lib/write'
import Watch from './lib/watch'
import path from 'path';

class Stream {
    writeStream: Write = createObject(Write);
    watchStream!: Watch;
    constructor() {
        this.watchStream = createObject(Watch, {watchOptions: {file: path.resolve('.')}});
    }

    write = this.writeStream.write.bind(this.writeStream);

}
export default Stream;
export {
    Stream
}