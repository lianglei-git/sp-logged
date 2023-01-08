import createObject from 'shared/createObject'
import Write from './lib/write'
import Watch from './lib/watch'
import type { Dispose_StreamWriteConfig } from './lib/write'
import type { Options as Dispose_StreamWatchConfig } from './lib/watch'
interface IStream {
    writeConfig?: Dispose_StreamWriteConfig
    watchConfig?: Dispose_StreamWatchConfig
}

class Stream {
    writeStream!: Write;
    watchStream!: Watch;
    write!: typeof this.writeStream.write;


    constructor(public args?: IStream) {
        this.watchStream = createObject(Watch, args?.watchConfig);
        this.writeStream = createObject(Write, args?.writeConfig);
        this.write = this.writeStream.write.bind(this.writeStream);
    }


}

export default Stream;
export {
    Stream
}