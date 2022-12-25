import createObject from 'shared/createObject'
import Write from './lib/write'


class Stream {
    writeStream!: Write;
    constructor() {
        this.writeStream = createObject(Write)
    }

    write = this.writeStream.write.bind(this.writeStream);

}

export {
    Stream
}