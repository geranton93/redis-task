import * as fs from 'fs';

class LogWriter {
    public async write(filePath: string, logstring: string): Promise<void> {
        fs.createWriteStream(filePath, {
            encoding: 'utf8',
            flags: 'a+'
        }).write(logstring);
    }
}

export const logWriter = new LogWriter();
