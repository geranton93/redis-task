import * as fs from 'fs';
import { Logger } from '@nestjs/common';
import path from 'path';

export default async function createLogFolder(): Promise<void> {
    const isFolderExists = fs.existsSync(path.join(process.cwd(), 'logs'));

    if (isFolderExists) {
        Logger.log('logs folder already exists', 'createLogFolder.util');
    } else {
        fs.mkdirSync(path.join(process.cwd(), 'logs'));
        Logger.log('logs folder created', 'createLogFolder.util');
    }
}
