import path from 'path';
import { writeFileSync, readFileSync, rm, readSync, openSync } from 'fs-extra'

export type HistoryContentConfig = {
    path?: string;
    isPathExists?: boolean;
    // transform plugins; tips: 1. htmltolog 2. logtohtml ...
    plugins?: any[];
    [k: string]: any
}

type HistoryFileContentType = {
    [k: string | number]: {
        history: HistoryContentConfig[]
    };

}

abstract class _Common {
    getFileStarts(filepath:string) {
        const fd = openSync(filepath, 'r');
        // readSync(fd, {})
    }
}

export default class Common {

    /** Config file path of history stream */
    hscfp = path.resolve(__dirname, '../private/config.stream');

    // 如果文件过大则新建文件并当如此对象里面储存
    /** content for history stream config  */
    hscf_content: HistoryFileContentType = this.readHscf() || Object.create(null)

    
    public flush = () => {
        let maps: string[] = Array();
        for (let key in this.hscf_content) {
            maps.push(key);
            this.hscf_content[key]?.history?.map(item => {
                maps.push(item.path as string);
            })
        }
        maps.forEach(item => rm(item));
        this.hscf_content = Object.create(null);
        console.log('清理完成!')
        return this;
    }

    /** update content for history stream config File*/
    writeHscf(): void {
        writeFileSync(this.hscfp, JSON.stringify(this.hscf_content));
    }

    /** get Hscf content */
    readHscf(): HistoryFileContentType {
        const content: string = readFileSync(this.hscfp, { encoding: 'utf-8' }) ?? '{}';
        return JSON.parse(content);
    }
}