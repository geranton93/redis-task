import * as dotenv from 'dotenv';
import * as fs from 'fs';
import path from 'path';

export class ConfigService {
    private readonly envConfig: Record<string, string>;

    constructor() {
        this.envConfig = dotenv.parse(fs.readFileSync(path.join(process.cwd(), '.env')));
    }

    public get(key: string): string {
        return this.envConfig[key];
    }
}
