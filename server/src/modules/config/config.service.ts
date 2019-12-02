import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
    private readonly envConfig: Record<string, string>;

    constructor() {
        this.envConfig = dotenv.parse(fs.readFileSync(process.cwd() + `/.env`));
    }

    public get(key: string): string {
        return this.envConfig[key];
    }
}
