import * as fs from 'fs';
import { Logger } from '@nestjs/common';

export default async function createLogFolder() {
    const isFolderExists = fs.existsSync(`${process.cwd()}/logs`);

    if (isFolderExists) {
        Logger.log('logs folder already exists', 'createLogFolder.util');
    } else {
        return new Promise((resolve, reject) => {
            fs.mkdir(`${process.cwd()}/logs`, error => {
                if (error) reject(error);
                Logger.log('logs folder created', 'createLogFolder.util');
                resolve();
            });
        });
    }
}
