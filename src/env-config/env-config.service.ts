import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService {
  constructor(
    private readonly configService: ConfigService
  ) {}

  get(key: string): string {
    return this.configService.get<string>(key);
  };

  getDatabaseHost(): string { 
    return this.get('DATABASE_HOST'); 
  };
  
  getDatabasePort(): number { 
    return parseInt(this.get('DATABASE_PORT'), 10); 
  };
}
