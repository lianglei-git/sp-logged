import { transformLinePlugin, transformHtmlPlugin } from '../plugins'
import Write from '../lib/write';
import createObject from 'shared/createObject';
import {describe, test} from 'vitest';
import _enum from './stdoutContent';


describe('TDD --- plugins', () => {
    const ws = createObject(Write);
    test('plugin ==> transformLinePlugin', () => {
        const _ws = ws.use(transformLinePlugin);
        _ws.write(_enum);
        _ws.write('ps--666');
        console.log('写入晚很')
    })
})