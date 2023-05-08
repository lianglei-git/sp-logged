declare module 'stream' {
    import * as Stream from 'stream/index'
    import type {Dispose_StreamWriteConfig} from 'stream/lib/write'
    declare var writeConfig = Dispose_StreamWriteConfig
    export = Stream
}